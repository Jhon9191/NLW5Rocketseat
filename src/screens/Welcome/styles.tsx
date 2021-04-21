import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../styles/index';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    title:{
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading
    },

    image:{
        
    },

    description:{
        fontSize: 18,
        paddingHorizontal: 20,
        textAlign: 'center',
        color: colors.heading
    },


});

export default styles;