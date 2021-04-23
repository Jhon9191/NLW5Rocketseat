import React from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    Text,
    View,
    TextInput
} from 'react-native';


import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import Button from '../../components/Button'
Icon.loadFont();

const Welmcome = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.form}>
                    <Text style={styles.title}>Como podemos {'\n'}
                    chamar você?
                    </Text>
                    <Text style={styles.emoji}>
                        😄
                    </Text>
                    <TextInput style={styles.input}></TextInput>

                    <View style={styles.footer}>
                    <Button title="Salvar" />
                    </View>
                </View>
            </View>
        </SafeAreaView>

    );
};


export default Welmcome;
