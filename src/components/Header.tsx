import React from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native'

import colors from '../styles'

import watering from '../assets/watering.png'

const Header = () =>{
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.greting}>Olá</Text>
                <Text style={styles.userName}>João</Text>
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
        padding: 20
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