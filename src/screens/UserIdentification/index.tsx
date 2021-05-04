import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Alert
} from 'react-native';
import { useNavigation } from  '@react-navigation/core'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import Button from '../../components/Button'
import colors from '../../styles/index'
import AsyncStorage from '@react-native-community/async-storage'
Icon.loadFont();

const UserIdentification = () => {
    
    const navigation = useNavigation()

    const hancleNavigate = async () =>{
        if(!name)
            return Alert.alert("Informe seu nome !")
        await AsyncStorage.setItem("USER_NAME", name)
        navigation.navigate("Confirmation",{ 
            title: "Prontinho",
            subTitle: "Agora vamos cuidar das suas plantinhas com muito cuidado",
            buttonTitle: "Começar",
            icon: "smile",
            screen: "PlantSeleted"
        }) 
    }

    const [ isFocus, setIsFocus ] = useState(false);
    const [ isFilled, setIsFilled ] = useState(false);
    const [ name, setName ] = useState<string>("");

    const handleBlur = () => {
        setIsFocus(false);
        setIsFilled(!!name);
    }
    
    const handleFocus  = () => {
        setIsFocus(true);
    }

    const handleFilled = (value : string) => {
        setIsFilled(!!value);
        setName(value);
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
                style={styles.content}
                behavior={Platform.OS === 'android' ? 'padding' : 'padding'}
            >
                <View style={styles.content}>
                    <View style={styles.form}>
                        <>
                        <Text style={styles.emoji}>
                            {isFilled ? '😄' : '😃'}    
                        </Text>
                        <Text style={styles.title}>
                            {'\n'}
                            Como podemos {'\n'}
                            chamar você?
                         </Text>
                        <TextInput 
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        onChangeText={handleFilled}
                        style={[
                            styles.input,
                            (isFocus && isFilled) && {borderColor: colors.green}
                        ]} 
                        placeholder="Digite seu nome"></TextInput>
                        <View style={styles.footer}>
                            <Button title="Salvar" onPress={hancleNavigate}/>
                        </View>
                        </>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>

    );
};


export default UserIdentification;
