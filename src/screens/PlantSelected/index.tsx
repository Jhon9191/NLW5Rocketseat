import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    FlatList,
    ActivityIndicator,
    Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/core'

import color from '../../styles/index'
import styles from './styles';
import api from '../../services/api';

import Header from '../../components/Header'
import EnviromentButton from '../../components/EnviromentButton';
import PlantCardPrimary from '../../components/PlantCardPrimary';
import Load from '../../components/Load';
import { PlantProps } from '../../Libs/storage';

interface EnviromentProps {
    key: string;
    title: string;
}

const PlantSelected = () => {

    const navigation = useNavigation();

    const [enviroment, setEnviroment] = useState<EnviromentProps[]>([]);
    const [plants, setPlants] = useState<PlantProps[]>([]);
    const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
    const [enviromentSelected, setEnviromentSelected] = useState('all');
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [loadMore, setLoadMore] = useState(false);

    const handleSelectEnviroment = (enviroment: string) => {
        setEnviromentSelected(enviroment)
        if (enviroment == 'all')
            return setFilteredPlants(plants);
        const filtered = plants.filter(plant =>
            plant.environments.includes(enviroment)
        );
        setFilteredPlants(filtered);
    }

    const facthPlants = async () => {
        const { data } = await api.
        get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);
        if(!data)
            return setLoading(true);
        if(page > 1){
            setPlants(OldValue => [...OldValue, ...data]);
            setFilteredPlants(OldValue => [...OldValue, ...data]);
        }else{
            setPlants(data)
            setFilteredPlants(data)
        }
    
        setLoading(false)
        setLoadMore(false)
    }

    const handleFecthMore = async (distance: number) => {
        if(distance < 1)
            return;
        setLoadMore(true);
        setPage(OldValue => OldValue + 1)
        facthPlants();
    }

    const handleSelectPlant = (item : PlantProps) => {
        navigation.navigate("Nova", { item })
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

        facthPlants();
    }, []);

    if (loading)
        return <Load />
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
                    keyExtractor={(item) => String(item.key)}
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
                    keyExtractor={(item) => String(item.id)}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    onEndReachedThreshold={0.10}
                    onEndReached={({ distanceFromEnd }) => handleFecthMore(distanceFromEnd)}
                    renderItem={(
                        { item }) => (
                        <PlantCardPrimary
                            data={item}
                            onPress={()=>handleSelectPlant(item)}
                        />
                    )}
                    ListFooterComponent={
                        loadMore ?
                        <ActivityIndicator
                            color={color.green}
                        />
                        : <></>
                    }
                />

            </View>


        </View>

    );
};

export default PlantSelected;
