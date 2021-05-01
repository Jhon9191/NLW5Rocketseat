import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Image,
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import styles from './styles';
import waterDrop from '../../assets/waterdrop.png';
import Button from '../../components/Button';

const Selected = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.plantInfo}>
                <SvgFromUri
                    uri=""
                    height={150}
                    width={150}
                />
                <Text style={styles.nameOfPlant}>Nome da planta</Text>

                <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.{'\n'}
            Harum obcaecati modi molestiae voluptatem consequuntur! Est quae,{'\n'}
            itaque modi minima numquam aperiamsit ducimus alias repellat {'\n'}
            obcaecati, provident error debitis sequi.</Text>
            </View>

            <View style={styles.controllers}>
                <View style={styles.tipContainer}>
                    <Image
                        source={waterDrop}
                        style={styles.tipImage}
                    />
                    <Text style={styles.tipText}>Lorem ipsum dolor sit</Text>
                </View>

                <Text style={styles.alertLabel}>Escolha o melhor horiario</Text>

                <Button title="Cadastrar Planta" onPress={() => { }} />

            </View>
        </SafeAreaView>
    );
}

export default Selected;