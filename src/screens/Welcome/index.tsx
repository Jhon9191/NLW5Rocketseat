import React from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    Text,
    View,
    Image, StatusBar
} from 'react-native';

import watering from '../../assets/watering.png'
import styles from './styles'

import Button from '../../components/Button'

const Welmcome = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true}/>
            <Text style={styles.title}>
                Gerencie {'\n'} 
                suas plantas {'\n'} 
                de forma fácil
            </Text>
            <Image style={styles.image} source={watering}/>
            <Text style={styles.description}>
                Não esqueça mais de regar suas plantas.
                Nós cuidamos de lembrar pra você sempre que precisar.
            </Text>
            <Button title=">" onPress={()=>{}}/>
        </ SafeAreaView>
    );
};


export default Welmcome;
