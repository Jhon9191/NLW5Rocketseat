import React, { useEffect, useState } from 'react';
import {
    SafeAreaView, 
    View,
    Text,
    Image,
    FlatList
} from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import waterDrop from '../../assets/waterdrop.png';
import { PlantProps, loadPlant } from '../../Libs/storage';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';
import PlantCardSecundary from '../../components/PlantCardSecundary';

export const MyPlants = () => {

    const [ myPlants, setMyPlants  ] = useState<PlantProps[]>([]);
    const [ loading, setLoading ] = useState(true);
    const [ nextWaterd, setNextWaterd ] = useState<string>();

    useEffect(() => {
        const loadStorage = async () => {
            const plantStorage = await loadPlant();
    
            const nextTime = formatDistance(
                new Date(plantStorage[0].dateNotificationTime).getTime(),
                new Date().getTime(),
                {locale: pt}
            );

            setNextWaterd(
                `Não esqueça de regar a ${plantStorage[0].name} à ${nextTime} horas`
            )

            setMyPlants(plantStorage);
            setLoading(false);

        }
        loadStorage();
    },[])

    return(
        <SafeAreaView style={styles.container}>
            <Header/>
            <View style={styles.spotlight}>
                <Image
                    source={waterDrop}
                    style={styles.spotlightImage}
                />
                <Text style={styles.spotlightText}>{nextWaterd}</Text>
            </View>
            <View style={styles.plants}>
                <Text style={styles.plantsTitle}>Próximas regadas</Text>
                <FlatList
                    data={myPlants}
                    keyExtractor={(item)=>String(item.id)}
                    renderItem={({item})=>( 
                        <Text>Elemento</Text>
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}   

export default MyPlants;