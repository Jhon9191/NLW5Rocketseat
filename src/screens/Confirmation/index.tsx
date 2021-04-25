import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
} from 'react-native';
import { useNavigation } from  '@react-navigation/core'
import styles from './styles'
import Button from '../../components/Button'

const Confirmation = () => {
    const navigation = useNavigation()
    
    const hancleNavigate = () =>{
        navigation.navigate("PlantSeleted")
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                    
                        <Text style={styles.emoji}>
                            😄    
                        </Text>
                        <Text style={styles.title}>
                            Prontinho
                        </Text>
                        <Text style={styles.description}>
                            Agora vamos começar a cuidar das suas {`\n`}
                             plantinhas com muito cuidado.
                        </Text>
                       
                        <View style={styles.footer}>
                            <Button title="Confirmar" onPress={hancleNavigate}/>
                        </View>
                    </View>
        </SafeAreaView>

    );
};


export default Confirmation;
