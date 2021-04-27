import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/core'

import styles from './styles';
import api from '../../services/api';

import Header from '../../components/Header'
import EnviromentButton from '../../components/EnviromentButton';
import PlantCardPrimary from '../../components/PlantCardPrimary';

interface EnviromentProps {
    key: string;
    title: string;
}

interface PlantsProps {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
        times: number,
        repeat_every: string
    };
}

const PlantSelected = () => {

    const [enviroment, setEnviroment] = useState<EnviromentProps[]>([]);
    const [plants, setPlants] = useState<PlantsProps[]>([]);

    useEffect(() => {
        const facthEnviroment = async () => {
            const { data } = await api.get("plants_environments");
            setEnviroment([
                { key: "all", title: "Todos" },
                ...data
            ])
        }
        facthEnviroment();
    }, []);

    useEffect(() => {
        const facthPlants = async () => {
            const { data } = await api.get("plants");
            setPlants(data)
        }
        facthPlants();
    }, []);

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
                    data={enviroment}
                    keyExtractor={(item) => item.key.toString()}
                    renderItem={({ item }) => (
                        <EnviromentButton title={item.title} />
                    )} />
            </View>

            <View style={styles.plants}>
                <FlatList
                    data={plants}
                    //keyExtractor={item => item.id}
                    numColumns={2}
                    contentContainerStyle={styles.plantList}
                    showsVerticalScrollIndicator={false}
                    renderItem={(
                        { item }) => (<PlantCardPrimary data={item} />
                    )}

                />
            </View>


        </View>

    );
};

export default PlantSelected;
