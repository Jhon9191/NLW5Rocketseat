import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/index';
const styles = StyleSheet.create({

    container:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    content:{
        flex: 1,
        width: '100%',
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },

    emoji:{
        fontSize: 78,
    },

    title:{
        marginTop: 15,
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
    },

    description:{
        fontSize: 16,
        textAlign: 'center',
        color: colors.heading,
        paddingVertical: 20
    },

    footer:{
        width:'100%',
        paddingHorizontal: 50
    },

});

export default styles;