import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/index';
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.shape
    },

    plantInfo:{
        flex: 1,
        paddingVertical: 50,
        paddingHorizontal:30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shape
    },

    nameOfPlant:{
        fontFamily: "Jost-Bold",
        fontSize: 24,
        color: colors.heading,
        marginTop: 15
    },

    description:{
        textAlign: 'center',
        fontFamily: "Jost-Light",
        fontSize: 17,
        color: colors.heading,
    },

    controllers:{
        backgroundColor: colors.white,
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom: 20,
        marginTop: 20,
    },

    tipContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue_light,
        padding: 20,
        borderRadius: 20,
        position: 'relative',
        bottom: 60,
    },

    tipImage:{
        width: 56,
        height: 56,
    },

    tipText:{
        flex: 1,
        fontSize: 17,
        textAlign: 'justify',
        marginLeft: 20,
        fontFamily: 'Jost-Bold',
        color: colors.blue
    },

    alertLabel:{
        textAlign: 'center',
        fontFamily: 'Jost-Light',
        color: colors.heading,
        fontSize: 12,
        marginBottom: 5
    },




});

export default styles;