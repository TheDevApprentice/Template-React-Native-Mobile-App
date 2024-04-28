import { useRef } from 'react';
import { useGlobalContext } from '../../../provider/GlobalContextProvider';
import { User } from '../../../utils/Types/user';
import { profileStyles } from '../Styles/ProfileStyle';
import { actions } from './Actions/action';

export const useProfileDataHandler = () => {
  const styles = useRef(profileStyles).current;
  const { userData } = useGlobalContext();

  const userDataProfile: User = {
    uid: userData.uid,
    isConnected: userData.isConnected,
    email: userData.email,
    name: userData.name,
    userType: userData.userType,
    avatar: userData.avatar,
    transactions: [
      {
        id: 1,
        productName: 'Apples',
        quantity: 5,
        price: 100,
        date: '2022-01-01',
      },
      {
        id: 2,
        productName: 'Carrots',
        quantity: 10,
        price: 50,
        date: '2022-02-01',
      },
    ],
    badges: [
      // {
      //   id: 1,
      //   name: "Bronze",
      //   color: "#aa6c2a",
      // },
      // {
      //   id: 2,
      //   name: 'Silver',
      //   color: "#d9d9d9",
      // },
      {
        id: 3,
        name: 'Gold',
        color: "#e09f3e",
      },
    ],
    cart: userData.cart,
    location: userData.location,
    messages: [],
    friends: []
  };
  
  return { userDataProfile, actions, styles };
};
