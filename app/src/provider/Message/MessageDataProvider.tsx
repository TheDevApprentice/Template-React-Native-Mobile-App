import React, { createContext, useContext, useState } from 'react';
import { getFirestore, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { AuthContext } from '../Auth/AuthProvider';
import { MessageDataContextType } from '../Types/messageDataContext';
import { Friend, UserMessage } from '../../utils/Types/user';
import { useGlobalContext } from '../GlobalContextProvider';

const MessageDataContext = createContext<MessageDataContextType | undefined>(undefined);

export const MessageDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [message, setInputFieldMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState<Friend | null>(null);
  const { auth } = useContext(AuthContext);
  const firestore = getFirestore();
  const { setUserData, userData } = useGlobalContext();

  const sendMessage = async () => {
    if (!selectedUser || !message.trim()) return;
  
    try {
      const newMessage: UserMessage = {
        id: Date.now(),
        uid: auth?.currentUser?.uid || '', 
        message: message,
      };

      const userDocRef = doc(
        firestore,
        `users/${auth?.currentUser?.uid}/friends/${selectedUser.id - 1}`
      );
    
      await updateDoc(userDocRef,``, {
        'message' : arrayUnion(newMessage)
      });

      setInputFieldMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  
  const handleFriendSelect = (user: Friend | null) => {
    setSelectedUser(user);
  };

  const getSelectedFriendData = () => {
    return selectedUser?.messages || [];
  };

  return (
    <MessageDataContext.Provider 
      value={{
        message,
        setInputFieldMessage,
        selectedUser,
        sendMessage,
        handleFriendSelect,
        getSelectedFriendData,
      }}
    >
      {children}
    </MessageDataContext.Provider>
  );
};

export const useMessageContext = () => {
  const context = useContext(MessageDataContext);
  if (!context) {
    throw new Error('useMessageContext must be used within a MessageDataProvider');
  }
  return context;
};
