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
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from  '@react-navigation/core'
Icon.loadFont();

const Welmcome = () => {

    const navigation = useNavigation()

    const hancleNavigate = () =>{
        navigation.navigate("UserIdentification")
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>
            <Image style={styles.image} source={watering} resizeMode="contain" />
            <Text style={styles.description}>
                Não esqueça mais de regar suas plantas.
                Nós cuidamos de lembrar pra você sempre que precisar.
            </Text>
            <TouchableOpacity style={styles.button} onPress={hancleNavigate} activeOpacity={0.7} >
                <Icon
                    name="chevron-right"
                    size={16}
                    color="#FFF"
                />
            </TouchableOpacity>
        </ SafeAreaView>
    );
};


export default Welmcome;
