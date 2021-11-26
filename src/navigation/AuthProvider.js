import React from 'react';


import {useState, useEffect, createContext} from 'react';
//Burada  context create Rotes sayfasında use yani kullan.

import auth from '@react-native-firebase/auth';
//AuthContext create contexten türeyecek. Herhangi bir sayfadan propsa direk erişim sağlamak için

export const AuthContext = createContext({});
//Routes içine aldığı için childrenlar taşır.() içinde belirt
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (error) {
            console.log(error);
          }
        },

        signup: async (email, password) => {
          try {
            await auth().createInWithEmailAndPassword();
          } catch (error) {
            console.log(error);
          }
        },

        resetPassword: async email => {
          try {
            await auth().sendPasswordResetEmail(email);
            alert("Şifree sıfırlama linki email adresinize gönderildi")
          } catch (error) {
            console.log(error);
          }
        },
        signout: async () => {
            try {
              await auth().signOut();
            } catch (error) {
              console.log(error);
            }
          },


      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
