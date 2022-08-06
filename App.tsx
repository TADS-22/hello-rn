import React, { useState } from "react"
import { Alert, Button, Pressable, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native"

const App = () => {
    const [userName, setUserName] = useState<string>('')

    const showHello = () => {
        Alert.alert('Atenção', `Olá, ${userName}`)
    }

    return (
        <View>
            <Text>Bem-vindo ao React Native!</Text>
            <TextInput onChangeText={text => setUserName(text)} />
            <Button title="Olá!" onPress={showHello} />
            <Text>{userName}</Text>
        </View>
    )
}

export default App