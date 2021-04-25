import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
} from 'react-native';
import { useNavigation } from  '@react-navigation/core'
import styles from './styles';

import Header from '../../components/Header'

const PlantSelected = () => {
    
    return (
        <View style={styles.container}>
            <Header/>
            
        </View>

    );
};

export default PlantSelected;
