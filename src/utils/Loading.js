import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

const Loading = () => {
    return (
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
            <ActivityIndicator size='large' color="#000f"/>
        </View>
    )
}

export default Loading
