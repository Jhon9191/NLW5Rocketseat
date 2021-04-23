import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    PushNotification
} from 'react-native';


import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import Button from '../../components/Button'
import colors from '../../styles/index'
Icon.loadFont();

const UserIdentification = () => {
    
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
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.content}>
                    <View style={styles.form}>
                  
                        <View style={{alignItems: 'center'}}> 
                        <Text style={styles.emoji}>
                            {isFilled ? '😄' : '😃'}    
                        </Text>
                        <Text style={styles.title}>
                            {'\n'}
                            Como podemos {'\n'}
                            chamar você?
                         </Text>
                        </View>
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
                            <Button title="Salvar" />
                        </View>
                        
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>

    );
};


export default UserIdentification;
