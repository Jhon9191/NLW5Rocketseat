import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TouchableOpacityProps
} from 'react-native';

import colors from '../styles'

interface buttonProps extends TouchableOpacityProps {
    title: string;
}

const Button = ( {title, ...rest} : buttonProps) => {
    return (
            <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
                <Text style={styles.textButton}>
                    {title}
                </Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    
    button:{
        marginTop: 15,
        backgroundColor: colors.green,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
    },

    textButton:{
        color: colors.blue_light,
        fontWeight: 'bold',
        fontSize: 18,
    },

})

export default Button;