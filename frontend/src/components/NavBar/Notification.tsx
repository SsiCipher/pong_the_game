import React, { useState } from 'react';
import axios from 'axios';

import Card from '@components/Card';
import { NotificationType } from '@globalTypes/notification';
import CheckOutline from '@assets/novaIcons/outline/CheckOutline';
import CloseOutline from '@assets/novaIcons/outline/CloseOutline';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import useSSE from '@hooks/useSSE';

interface NotificationMessageProps {
  notificationMessage: NotificationType;
  setNotifications: React.Dispatch<React.SetStateAction<NotificationType[]>>;
}

const NotificationMessage: React.FC<NotificationMessageProps> = ({
  notificationMessage,
  setNotifications,
}) => {
  const acceptFriendRequest = async () => {
    axios.post(`/api/friendlist/${notificationMessage.sender.id}/accept`);
    axios.post(`/api/notification/${notificationMessage.id}/mark-read`);
    notificationMessage.is_read = true;
    notificationMessage.status = 'accepted';
    setNotifications((notifications) =>
      notifications.map((notification) =>
        notification.id == notificationMessage.id ? notificationMessage : notification,
      ),
    );
  };

  const declineFriendRequest = async () => {
    axios.delete(`/api/friendlist/${notificationMessage.sender.id}`);
    axios.post(`/api/notification/${notificationMessage.id}/mark-read`);
    notificationMessage.is_read = true;
    notificationMessage.status = 'accepted';
    setNotifications((notifications) =>
      notifications.map((notification) =>
        notification.id == notificationMessage.id ? notificationMessage : notification,
      ),
    );
  };

  const avatar =
    notificationMessage.action == 'ACHIEVEMENT_UNLOCKED'
      ? notificationMessage.recipient?.profile?.avatar
      : notificationMessage.sender?.profile?.avatar;

  console.log("notificationMessage");
  console.log(notificationMessage);
  const displayName =
    notificationMessage.action == 'ACHIEVEMENT_UNLOCKED'
      ? notificationMessage.recipient.display_name
      : notificationMessage.sender.display_name;

  return (
    <>
      <div className="w-full" id="notification">
        <div className={'flex items-center gap-x-4'}>
          <img src={avatar} className="w-14 h-14 rounded-full empty" />
          <div className="flex flex-col">
            <p className="text-white font-bold">{displayName}</p>
            <p
              className={`text-sm w-52 ${notificationMessage.is_read ? 'text-gray' : 'text-white'}`}
            >
              {notificationMessage.description}
            </p>
            {notificationMessage.action != 'ACHIEVEMENT_UNLOCKED' &&
              notificationMessage.status == 'pending' && (
                <div className="flex items-center justify-center pt-2 gap-4">
                  <Card
                    fill="#FE5821"
                    cut={32}
                    className={`w-24 h-8 text-white text-sm hover:brightness-110`}
                  >
                    <button
                      className={`flex items-center w-full h-full gap-1 ${
                        notificationMessage.action == 'GAME_REQUEST' ? 'pl-4' : 'pl-2'
                      }`}
                      onClick={
                        notificationMessage.action == 'FRIEND_REQUEST'
                          ? acceptFriendRequest
                          : () => {}
                      }
                    >
                      <CheckOutline className="h-5 w-5" />
                      <p>{notificationMessage.action == 'GAME_REQUEST' ? 'Play' : 'Accept'}</p>
                    </button>
                  </Card>
                  <Card
                    fill="#2B1F24"
                    cut={32}
                    className={`w-24 h-8 text-red text-sm bg-opacity-25 hover:brightness-110`}
                  >
                    <button
                      className="flex items-center pl-2 w-full h-full gap-1"
                      onClick={
                        notificationMessage.action == 'FRIEND_REQUEST'
                          ? declineFriendRequest
                          : () => {}
                      }
                    >
                      <CloseOutline className="h-5 w-5" />
                      <p>Decline</p>
                    </button>
                  </Card>
                </div>
              )}
          </div>
        </div>
      </div>
      <hr className="h-px text-darkGray" />
    </>
  );
};

const Notification: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);

  const getNotifications = async (page: number) => {
    setIsLoading(true);
    const res = await axios.get(`/api/notification?page=${page}`);
    setNotifications((notifications) => [...notifications, ...res.data]);
    if (res.data.length < 10) setHasMore(false);
    setIsLoading(false);
  };

  const lastNotificationRef = useIntersectionObserver(() => {
    if (hasMore) {
      console.log('get more');
      getNotifications(page);
      setPage((prevPage) => prevPage + 1);
    }
  });

  useSSE('/api/notification/sse-notifications', {
    onMessage: (event) => {
      const newNotification = JSON.parse(event.data);
      setNotifications((notifications) => [newNotification, ...notifications]);
    },
  });

  return (
    <div
      className="flex flex-col group lg:absolute z-20 lg:w-[450px] lg:h-[350px] pt-5 lg:pb-0 px-6 lg:top-[calc(100%+32px)] bg-lightBlack border-2 border-darkGray rounded-lg transition-all caret
                fixed top-0 max-lg:left-0 w-full h-[calc(100vh-5rem)] max-lg:opacity-0 group-focus-within:opacity-100 max-lg:overflow-hidden pointer-events-none group-focus-within:pointer-events-auto"
    >
      <h1 className="text-xl text-white font-bold mb-6">Notifications</h1>
      <div className="flex flex-col gap-4 overflow-hidden group-hover:overflow-y-auto scroll-smooth scrollbar scrollbar-track-lightBlack scrollbar-thumb-rounded scrollbar-thumb-gray">
        {notifications.map((notification, index) => (
          <NotificationMessage
            key={index}
            notificationMessage={notification}
            setNotifications={setNotifications}
          />
        ))}
        {!isLoading && hasMore && <div ref={lastNotificationRef}></div>}
        {(isLoading || hasMore) && (
          <div id="skeleton" className="flex items-center gap-4 animate-pulse">
            <div className="h-14 w-14 bg-darkGray rounded-full" />
            <div className="flex flex-col items-start gap-2">
              <div className="h-4 w-48 bg-darkGray rounded-full" />
              <div className="h-2 w-32 bg-darkGray rounded-full" />
            </div>
          </div>
        )}
        {!isLoading && notifications.length == 0 && (
          <div className="flex w-full h-full items-center justify-center">
            <p className="text-gray font-serif">Empty</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;