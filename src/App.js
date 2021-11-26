import React from 'react'
import { View, Text } from 'react-native'
import {AuthProvider} from './navigation/AuthProvider'
import Routes from './navigation/Routes'
//Auth Provider ana yapı olmadığı için süslü paranteze aldık. Bir çok değer için kullanılacak
//Routes içine aldığı için childrenlar taşır

const App = () => {
    return (
        <AuthProvider>

            <Routes/>
        </AuthProvider>
    )
}

export default App
