import React, { useEffect, useState } from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native'

import colors from '../styles'
import AsyncStorage from '@react-native-community/async-storage'

const Header = () =>{

    const [ name, setName ] = useState<string>("");
    useEffect(() =>{
        const loadNameUser = async() => {
            const user = await AsyncStorage.getItem("USER_NAME")
            setName(user || "");
        }

        loadNameUser();
    },[])

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.greting}>Olá,</Text>
                <Text style={styles.userName}>{name}</Text>
            </View>
        
            <Image style={styles.image} 
            source={{uri : "https://avatars.githubusercontent.com/u/47609014?v=4"}} resizeMode="contain" />

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        alignItems: 'center',
    },

    image:{
        width: 80,
        height: 80,
        borderRadius: 100
    },

    greting:{
        fontSize: 32,
        color: colors.heading,
        fontFamily: 'Jost-Light'
    },

    userName:{
        fontSize: 32,
        color: colors.heading,
        fontFamily: 'Jost-Bold',
        lineHeight: 40
    }

});


export default Header;