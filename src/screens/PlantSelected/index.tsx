import React, { useEffect, useState } from 'react';
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
import api from '../../services/api';

interface EnviromentProps{
    key: string;
    title: string;
}

const PlantSelected = () => {

    const [ enviroment, setEnviroment ] = useState<EnviromentProps[]>([]);

    useEffect(()=>{
        const facthEnviroment = async() => {
            const { data } = await api.get("plants_environments");
            setEnviroment([
                {key: "all", title: "Todos"},
                ...data
            ])
        }
        facthEnviroment();
    },[])

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
                        renderItem={({item})=>(
                            <EnviromentButton title={item.title} />
                        )}/>
                </View>
        </View>

    );
};

export default PlantSelected;
