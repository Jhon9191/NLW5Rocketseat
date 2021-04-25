import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
} from 'react-native';
import { useNavigation } from  '@react-navigation/core'
import styles from './styles';

const PlantSelected = () => {
    
    return (
        <SafeAreaView style={styles.container}>
            <Text>Plant</Text>
        </SafeAreaView>

    );
};

export default PlantSelected;
