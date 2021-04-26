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


            </View>
                <View>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.eviromentList}
                        data={[
                        {id: 1, title: "1"},
                        {id: 2, title: "2"},
                        {id: 3, title: "3"},
                        {id: 4, title: "4"},
                        {id: 5, title: "5"}
                        ]}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item})=>(
                            <EnviromentButton title={`${item.title}`} active/>
                        )}/>
                </View>
        </View>

    );
};

export default PlantSelected;
