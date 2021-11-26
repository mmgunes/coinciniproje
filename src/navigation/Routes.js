import {Text,View} from 'react-native'

import React, {useState,useEffect,useContext} from 'react'
//Diğer sayfada Context create burada kullan yani useContext. Adı AuthContext 
import auth from '@react-native-firebase/auth'
import { AuthContext } from './AuthProvider'

import { NavigationContainer } from '@react-navigation/native'
import HomeStack from './HomeStack'
import AuthStack from './AuthStack'

import Loading from '../utils/Loading'


const Routes = () => {


    //Bunları{user ve setUser} AuthContext ten getir
    const {user, setUser }= useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(true);
    const [isInitial, setIsInitial] = useState(true);
     
    function onAuthStateChanged(user) {
        setUser(user);
       if(isInitial) setIsInitial(false);
       setIsLoading(false);
    }

    useEffect(() => {
        //Uygulama başlar
        const subscriberAbone=auth().onAuthStateChanged(onAuthStateChanged)
        return subscriberAbone;
    }, [])


    if (isLoading) {
        return <Loading />
    }

    return (
       <NavigationContainer>
        
            {user ? <HomeStack/>: <AuthStack/>} //*User varsa Home yoksa Auth sayfasına yönlendir */
       </NavigationContainer>
    )
}

export default Routes
