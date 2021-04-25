import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/core'
import styles from './styles';

import Header from '../../components/Header'
import EnviromentButton from '../../components/EnviromentButton';

const PlantSelected = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Header />
                <Text style={styles.title}>
                    Em qual ambiente
                </Text>
                <Text style={styles.subTitle}>
                    você quer por suas plantas?
                </Text>

                <EnviromentButton title="Ativo" active/>

            </View>
        </View>

    );
};

export default PlantSelected;
