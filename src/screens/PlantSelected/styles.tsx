import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/index';
const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: "100%",
    },

    title:{
        fontSize: 17,
        color: colors.heading,
        fontFamily: "Jost-Bold",
        lineHeight: 20,
        marginTop: 15
    },

    subTitle:{
        fontSize: 17,
        lineHeight: 20,
        color: colors.heading,
        fontFamily: "Jost-Light"
    },

    header:{
        paddingHorizontal: 30
    },

    eviromentList:{
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32
    },

    plants:{
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center',
    },

});

export default styles;