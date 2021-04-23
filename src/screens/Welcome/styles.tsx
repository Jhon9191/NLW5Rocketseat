import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/index';
const styles = StyleSheet.create({

    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    title:{
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
    },

    image:{
        height: Dimensions.get('window').width *  0.7 
    },

    description:{
        fontSize: 18,
        paddingHorizontal: 20,
        textAlign: 'center',
        color: colors.heading
    },

    button:{
        backgroundColor: colors.green,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },

    textButton:{
        color: colors.blue_light,
        fontWeight: 'bold',
        fontSize: 18,
    },

});

export default styles;