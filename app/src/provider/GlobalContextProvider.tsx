import React, { createContext, useContext, useEffect, useState } from 'react';
import { GlobalContextProviderType } from './Types/globalContextProvider';
import { getFirestore, setDoc, doc } from "firebase/firestore";
import * as Location from 'expo-location';
import { User } from '../utils/Types/user';
import { Platform } from 'react-native';
import { getAuth } from 'firebase/auth';

const GlobalContext = createContext<GlobalContextProviderType | undefined>(undefined);

export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const firestore = getFirestore();
  const auth = getAuth();
  const [userData, setUserData] = useState<User>({
    isConnected: false,
    email: '',
    uid: '0',
    name: "",
    userType: "",
    avatar: "",
    transactions: [],
    badges: [],
    messages: [],
    friends: [], 
    cart: [],
    location: {
      latitude: 0, 
      longitude: 0
    }
   });


  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !(await Location.isBackgroundLocationAvailableAsync())) {
        // A faire : Gestion des erreurs pour les services Google non disponibles sur Android
        return;
      }
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        // A faire : Gestion des erreurs si l'utilisateur refuse la permission
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
        // A faire : Stocke la localisation en base de données si l'utilisateur est connecté
      
      if (auth?.currentUser && auth?.currentUser !== undefined) {
        await setDoc(doc(firestore, "users", auth.currentUser.uid), {
          location: { latitude: location.coords.latitude, longitude: location.coords.longitude },
        }, { merge: true });
      }
    })();
  }, []);

  useEffect(() => {
    const saveLocationPeriodically = setInterval(() => {
      saveUserLocation();
    }, 120000);

    return () => {
      clearInterval(saveLocationPeriodically);
    };
  }, [userData]);

  const saveUserLocation = async () => {
    if (userData && userData.uid) {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {
          const location = await Location.getCurrentPositionAsync({});
          console.log("location user modified = ", location)
          await setDoc(doc(firestore, "users", userData.uid), {
            location: { latitude: location.coords.latitude, longitude: location.coords.longitude },
          }, { merge: true });
        }
      } catch (error) {
        console.error('Error saving user location:', error);
      }
    }
  };

  return (
    <GlobalContext.Provider 
    value={{
      userData: userData,
      setUserData, 
      auth
    }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalContextProvider');
  }
  return context;
};