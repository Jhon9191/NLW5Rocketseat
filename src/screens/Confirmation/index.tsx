import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
} from 'react-native';
import { useNavigation, useRoute } from  '@react-navigation/core'
import styles from './styles'
import Button from '../../components/Button'

interface Parms {
    title: string;
    subTitle: string;
    buttonTitle: string;
    icon: 'smile' | 'hug';
    screen: string;
}

const emojis = {
    hug: '🤗',
    smile: '😄',
}

const Confirmation = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const {
        title,
        subTitle,
        buttonTitle,
        icon,
        screen
    } = route.params as Parms

    const hancleNavigate = () =>{
        navigation.navigate(screen)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                    
                        <Text style={styles.emoji}>
                            {emojis[icon]}    
                        </Text>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                        <Text style={styles.description}>
                            {subTitle}
                        </Text>
                       
                        <View style={styles.footer}>
                            <Button title={buttonTitle} onPress={hancleNavigate}/>
                        </View>
                    </View>
        </SafeAreaView>

    );
};


export default Confirmation;
