import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Stack= createStackNavigator();
const Tab= createBottomTabNavigator();


const AuthStack = () => {
    return (
        <View>
            <Text>Auth stack</Text>
        </View>
    )
}

export default AuthStack
