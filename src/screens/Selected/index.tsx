import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Image,
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import styles from './styles';
import { useRoute } from '@react-navigation/native'
import waterDrop from '../../assets/waterdrop.png';
import Button from '../../components/Button';

interface PlantsProps {
    item: {
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
}

const Selected = () => {

    const route = useRoute();
    const { item } = route.params as PlantsProps;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.plantInfo}>
                <SvgFromUri
                    uri={item.photo}
                    height={150}
                    width={150}
                />
                <Text style={styles.nameOfPlant}>{item.name}</Text>

                <Text>{item.about}</Text>
            </View>

            <View style={styles.controllers}>
                <View style={styles.tipContainer}>
                    <Image
                        source={waterDrop}
                        style={styles.tipImage}
                    />
                    <Text style={styles.tipText}>{item.water_tips}</Text>
                </View>

                <Text style={styles.alertLabel}>Escolha o melhor horiario</Text>

                <Button title="Cadastrar Planta" onPress={() => { }} />

            </View>
        </SafeAreaView>
    );
}

export default Selected;