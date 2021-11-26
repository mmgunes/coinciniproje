import React from 'react'
import { View, Text } from 'react-native'

import { useState,useEffect,useContext } from 'react'
//Routes içine aldığı için childrenlar taşır.() içinde belirt
const AuthProvider = ({children}) => {
    return (
        <View>
            <Text>ASayfa AuthProvider</Text>
        </View>
    )
}

export default AuthProvider
