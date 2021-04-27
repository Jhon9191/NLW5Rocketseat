import React from 'react'
import {
    StyleSheet,
    SafeAreaView
} from 'react-native'
import LottieView from 'lottie-react-native';

const load = require ('../assets/load.json');

const Load = () => {
    return(
        <SafeAreaView style={styles.container}>
            <LottieView
            source={load}
            autoPlay
            loop
            style={styles.animation}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    animation:{
        backgroundColor: 'transparent',
        width: 200,
        height: 200
    }

})

export default Load;