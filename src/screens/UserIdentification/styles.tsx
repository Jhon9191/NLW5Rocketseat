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
    },

    form:{
        flex: 1,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 54
    },

    emoji:{
        fontSize: 44
    },

    input:{
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width:'100%',
        fontSize: 10,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
        
    },

    title:{
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
    },

    footer:{
        width:'100%',
        paddingHorizontal: 20
    }
});

export default styles;