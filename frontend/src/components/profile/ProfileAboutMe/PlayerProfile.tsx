import { useState } from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import axios from 'axios';
import { User } from '@globalTypes/types';
import Card from '@components/Card';
import PlusOutline from '@assets/novaIcons/outline/PlusOutline.tsx';
import MessageSendSolid from '@assets/novaIcons/solid/MessageSendSolid.tsx';
import CalendarSolid from '@assets/novaIcons/solid/CalendarSolid.tsx';
import LocationSolid from '@assets/novaIcons/solid/LocationSolid.tsx';
import Button from '../../Button.tsx';
import Unblock from '@assets/novaIcons/outline/Unblock.tsx';

const PlayerProfile = () => {
  const user = useRouteLoaderData('profile') as User;
  const [loading, setLoading] = useState(false);

  const unblock = async (userId: number) => {
    axios.post(`/api/friendlist/${userId}/unblock`).finally(() => setLoading(false));
    setLoading(true);
  };

  function unfriendRequest() {
    axios.delete(`/api/friendlist/${user.id}`).finally(() => setLoading(false));
    setLoading(true);
  }

  function sendFriendRequest() {
    axios.post(`/api/friendlist/${user.id}/send`).finally(() => setLoading(false));
    setLoading(true);
  }

  return (
    <div id="AboutMe" className="">
      <div className="flex">
        <div className="relative flex-shrink-0 h-24 w-24 rounded-full ">
          <div className="absolute top-1 right-1 h-4 w-4 bg-[#D5FF5C] border-[2px] border-background rounded-full"></div>
          <img
            className="h-24 w-24 rounded-full object-cover"
            src={user.profile.avatar}
            alt="avatar"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className={` ml-4 font-poppins  text-white font-bold text-auto`}>
            {user.display_name}
          </p>
          <p className="font-sans text-[0.5vw] font-extrabold ml-[0.72vw]  text-[#5E6069] ">
            @{user.username}
          </p>
        </div>
      </div>
      {user.isforeign ? (
        <div className="pt-8 flex gap-4">
          {user.friendStatus == 'FRIEND' ? (
            <Button
              className={`w-full h-full center pl-[12px] pr-[20px] py-[8px]  ${
                loading ? 'filter opacity-70' : ''
              }`}
              color="BrightRed"
              onClick={unfriendRequest}
              cut={55}
              borderRadius={10}
              borderWidth={3}
              borderColor="#E95E6F"
            >
              <Unblock className="relative text-white w-[22px] h-[22px]" />
              <p className="text-white font-poppins font-medium">Unfriend</p>
            </Button>
          ) : user.friendStatus == 'NONE' ? (
            <Button
              className={`w-full h-full center px-4 z-10 ${loading ? 'filter opacity-70' : ''}`}
              color="primary"
              onClick={sendFriendRequest}
              cut={55}
              borderRadius={10}
              borderWidth={3}
              borderColor="#FF8C66"
            >
              <PlusOutline className="font-bold w-[11px] h-[11px] text-white" />
              <p className="text-white font-poppins font-medium">Add as friend</p>
            </Button>
          ) : user.friendStatus == 'BLOCKED' ? (
            <Button
              className={`w-full h-full center pl-[12px] pr-[20px] py-[8px] gap-1  ${
                loading ? 'filter opacity-70' : ''
              }`}
              onClick={() => unblock(user.id)}
              color="gray"
              cut={35}
              borderRadius={10}
              borderWidth={3}
              borderColor="#858895"
            >
              <Unblock className="relative text-white w-[22px] h-[22px]" />
              <p className="text-white font-poppins font-medium">Unblock</p>
            </Button>
          ) : (
            ''
          )}

          <Card
            className="relative flex center text-[#2D313A] z-10 w-[37px] h-[37px]"
            cut={30}
            borderRadius={10}
            borderWidth={1.5}
            borderColor="#4B5261"
          >
            <button>
              <MessageSendSolid className="font-bold w-[16px] h-[16px] text-white" />
            </button>
          </Card>
        </div>
      ) : (
        ''
      )}

      <div id="About_me" className="pt-8">
        <h1 className="font-poppins text-white font-bold text-2xl">About me</h1>
        <p className="font-sans text-[#bababa] filter opacity-70 font-bold lg:text-xs 2xl:text-sm whitespace-wrap">
          {user.profile.about}
        </p>
      </div>
      <div id="birthdate" className="flex  gap-4 pt-8">
        <CalendarSolid className="w-[19px] h-[19px] lg:w-[23px] lg:h-[23px] 2xl:w-[27px] 2xl:h-[27px] text-accent" />
        <p className="text-white font-poppins ">
          {new Date(user.profile.birthdate).toLocaleDateString()}
        </p>
      </div>
      <div id="location" className="flex gap-4 pt-4">
        <LocationSolid className="text-accent w-[19px] h-[19px] lg:w-[23px] lg:h-[23px] 2xl:w-[27px] 2xl:h-[27px] " />
        <p className="text-white font-poppins ">{user.profile.location}</p>
      </div>
    </div>
  );
};

export default PlayerProfile;