import React from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import colors from '../styles'

interface EnviromentButtonProps extends RectButtonProps{
    title: string;
    active? : boolean;
}

const EnviromentButton = ({
    title,
    active = false,
    ...rest
}: EnviromentButtonProps ) =>{
    return(
       <RectButton
       style={[
        styles.container,
        active && styles.containerActive
       ]}
       { ...rest }
       >
           <Text style={[
               styles.text,
               active && styles.textActive
           ]}>
               { title }
           </Text>

       </RectButton>
    );
}

const styles = StyleSheet.create({

    container:{
        backgroundColor: colors.shape,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 76,
        borderRadius: 12,
        marginHorizontal: 6
    },

    containerActive:{
        backgroundColor: colors.green_light
    },

    text:{
        color: colors.heading,
        fontFamily: "Jost-Light"
    },

    textActive:{
        color: colors.green_dark,
        fontFamily: "Jost-Bold"
    }

});


export default EnviromentButton;