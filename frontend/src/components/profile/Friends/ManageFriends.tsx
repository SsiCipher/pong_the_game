import { useState, ChangeEvent, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useRouteLoaderData } from 'react-router-dom';
import UserCard from './Friends-cards/Friends.tsx';
import CheckOutline from '@assets/novaIcons/outline/CheckOutline.tsx';
import CloseOutline from '@assets/novaIcons/outline/CloseOutline.tsx';
import Unblock from '@assets/novaIcons/outline/Unblock.tsx';
import Block from '@assets/novaIcons/outline/block.tsx';
import { unfriend, block, accept, unblock } from './utils.ts';
import { User } from '@globalTypes/types';
import Button from '../../Button.tsx';

interface args {
  friendType: string;
  setFriends: (props: []) => void;
  setBlocked: (props: []) => void;
  setPending: (props: []) => void;
}

const getFriendList = (data: args) => {
  const { friendType, setFriends, setBlocked, setPending } = data;

  if (friendType == 'Accepted') {
    axios.get('/api/friendlist/friends').then((response) => {
      if (response.status == 200) {
        console.log('i got Accepted list');
        setPending([]);
        setBlocked([]);
        setFriends(response.data.friendlist['friends']);
      }
    });
  } else if (friendType == 'Pending') {
    axios.get('/api/friendlist/pending').then((response) => {
      if (response.status == 200) {
        console.log('i got Pending list');
        setPending(response.data.friendlist['pending']);
        setBlocked([]);
        setFriends([]);
      }
    });
  } else {
    axios.get('/api/friendlist/blocked').then((response) => {
      if (response.status == 200) {
        console.log('i got blocked list');
        setBlocked(response.data.friendlist['blocked']);
        setFriends([]);
        setPending([]);
      }
    });
  }
};

const ManageFriends = () => {
  const user = useRouteLoaderData('profile') as User;

  if (user.isforeign) throw new Error('This is not your profile');
  const [friendType, setType] = useState('Accepted');
  const [friends, setFriends] = useState<User[]>([]);
  const [blocked, setBlocked] = useState<User[]>([]);
  const [pending, setPending] = useState<User[]>([]);

  // you need to isolate lists comcerns to remove card smooth
  function handletype(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    setType(e.target.value);
  }

  useEffect(() => {
    const data: args = { friendType, setFriends, setBlocked, setPending };

    console.log('FriendType:', friendType);
    getFriendList(data);
  }, [friendType]);

  return (
    <section className="mt-24">
      <div id="redio-buttons" className="flex justify-end">
        <div id="Pending" className="flex items-center ml-[30px]">
          <input
            id="default-radio-1"
            type="radio"
            name="default-radio"
            value="Pending"
            checked={friendType === 'Pending'}
            className="w-6 h-6 appearance-none border-4 border-[#717178] rounded-full checked:bg-[#717178] checked:border-transparent focus:outline-none"
            onChange={handletype}
          />
          <label
            htmlFor="default-radio-1"
            className={`  ml-2 text-['1rem'] font-medium text-[#717178] `}
          >
            Pending
          </label>
        </div>
        <div id="Blocked" className="flex items-center ml-[30px]">
          <input
            id="default-radio-2"
            type="radio"
            value="Blocked"
            checked={friendType === 'Blocked'}
            name="default-radio"
            className="w-6 h-6 appearance-none border-4 border-[#717178] rounded-full checked:bg-[#717178] checked:border-transparent focus:outline-none"
            onChange={handletype}
          />
          <label
            htmlFor="default-radio-2"
            className={`  font-poppins ml-2 text-['1rem'] font-medium text-[#717178] `}
          >
            Blocked
          </label>
        </div>
        <div id="Accepted" className="flex items-center ml-[30px]">
          <input
            id="default-radio-3"
            type="radio"
            value="Accepted"
            checked={friendType === 'Accepted'}
            name="default-radio"
            className="w-6 h-6 appearance-none border-4 border-[#717178] rounded-full checked:bg-[#717178] checked:border-transparent focus:outline-none"
            onChange={handletype}
          />
          <label
            htmlFor="default-radio-3"
            className={`ml-2 text-[${'1rem'}px] font-medium text-[#717178] `}
          >
            Accepted
          </label>
        </div>
      </div>

      <motion.ul className="grid grid-cols-3 gap-8 mt-16">
        {friendType == 'Accepted'
          ? friends.map((users) => (
              <motion.li initial={{ x: -500 }} animate={{ x: 0 }} exit={{ x: 500 }} key={users.id}>
                <UserCard
                  user={users.profile.avatar}
                  name={users.display_name}
                  username={users.username}
                  banner={users.profile.banner}
                >
                  <div className="flex justify-start items-center gap-4 pt-6 ml-4">
                    <Button
                      className="flex center pl-[12px] pr-[20px] py-[8px]"
                      color="BrightRed"
                      onClick={() => {
                        unfriend(friends, users.username, users.id, setFriends);
                      }}
                      cut={55}
                      borderRadius={10}
                      borderWidth={3}
                      borderColor="#E95E6F"
                    >
                      <Unblock className="relative text-white w-[22px] h-[22px]" />
                      <p className="text-white font-poppins font-medium">Unfriend</p>
                    </Button>
                    <Button
                      className="flex center pl-[12px] pr-[20px] py-[8px] gap-1"
                      color="DarkMaroon"
                      onClick={() => {
                        block(friends, users.username, users.id, setFriends);
                      }}
                      cut={25}
                    >
                      <Block className="text-red w-[18px] h-[18px]" />
                      <p className="text-red font-poppins font-regular">Block</p>
                    </Button>
                  </div>
                </UserCard>
              </motion.li>
            ))
          : []}
        {friendType == 'Blocked'
          ? blocked.map((users) => (
              <motion.li initial={{ x: -500 }} animate={{ x: 0 }} exit={{ x: 500 }} key={users.id}>
                <UserCard
                  user={users.profile.avatar}
                  name={users.display_name}
                  username={users.username}
                  banner={users.profile.banner}
                >
                  <div className="flex justify-start items-center gap-4 pt-6 ml-4">
                    <Button
                      className="center pl-[12px] pr-[20px] py-[8px] gap-1"
                      onClick={() => {
                        unblock(blocked, users.username, users.id, setBlocked);
                      }}
                      color="gray"
                      cut={35}
                      borderRadius={10}
                      borderWidth={3}
                      borderColor="#858895"
                    >
                      <Unblock className="relative text-white w-[22px] h-[22px]" />
                      <p className="text-white font-poppins font-medium">Unblock</p>
                    </Button>
                  </div>
                </UserCard>
              </motion.li>
            ))
          : []}
        {friendType == 'Pending'
          ? pending.map((users) => (
              <motion.li initial={{ x: -500 }} animate={{ x: 0 }} exit={{ x: 500 }} key={users.id}>
                <UserCard
                  user={users.profile.avatar}
                  name={users.display_name}
                  username={users.username}
                  banner={users.profile.banner}
                >
                  <div className="flex justify-start items-center gap-4 pt-6 ml-4">
                    <Button
                      className="flex center pl-[12px] pr-[20px] py-[8px]"
                      onClick={() => {
                        accept(pending, users.username, users.id, setPending);
                      }}
                      color="primary"
                      borderWidth={2}
                      borderColor="#FF8C66"
                    >
                      <CheckOutline className="text-white" />
                      <p className="text-white font-poppins font-medium">Accept</p>
                    </Button>
                    <Button
                      className="flex center pl-[12px] pr-[20px] py-[8px]"
                      color="DarkMaroon"
                      onClick={() => {
                        unfriend(pending, users.username, users.id, setPending);
                      }}
                      cut={25}
                    >
                      <CloseOutline className="text-red" />
                      <p className="text-red font-poppins font-regular">Decline</p>
                    </Button>
                  </div>
                </UserCard>
              </motion.li>
            ))
          : []}
      </motion.ul>
    </section>
  );
};

export default ManageFriends;