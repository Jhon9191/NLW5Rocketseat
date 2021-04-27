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
    const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([]);
    const [enviromentSelected, setEnviromentSelected] = useState("");

    function handleSelectEnviroment (enviroment: string) {
        setEnviromentSelected(enviroment)

        if (enviroment === 'all') {
            return setFilteredPlants(plants)
        } else {
            const filtered = plants.filter(plant =>
                plant.environments.includes(enviroment)
            );

            setFilteredPlants(filtered);
        }

    }

    useEffect(() => {
        const facthEnviroment = async () => {
            const { data } = await api.get("plants_environments?_sort=title&_order=asc");
            setEnviroment([
                { key: 'all', title: 'Todos' },
                ...data
            ])
        }
        facthEnviroment();
    }, []);

    useEffect(() => {
        const facthPlants = async () => {
            const { data } = await api.get("plants?_sort=name&_order=asc");
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
                        <EnviromentButton
                            title={item.title}
                            active={item.key == enviromentSelected}
                            onPress={() => handleSelectEnviroment(item.key)}
                        />
                    )} />
            </View>

            <View style={styles.plants}>
                <FlatList
                    data={filteredPlants}
                    //keyExtractor={item => item.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={(
                        { item }) => (
                        <PlantCardPrimary
                            data={item}
                        />
                    )}

                />
            </View>


        </View>

    );
};

export default PlantSelected;
