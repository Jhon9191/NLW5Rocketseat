import React, { useEffect, useState } from 'react';
import Routes from './src/routes';
import 'react-native-gesture-handler';
interface propsT {
    splash: number;
}

let countdownTimeOut: NodeJS.Timeout;
const App = () => {

    const [time, setTime] = useState(0);
    const [valida, setValida] = useState(false);

    useEffect(() => {
        if (time >= 0 && time < 6) {
            countdownTimeOut = setTimeout(() => {
                setTime(time + 1);
                console.log(time)
            }, 1000)
        }
    }, [time])

    return (
        <Routes/>
        // <>
        //     {time <= 3 ? (
        //          <Routes />
        //         // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#121212" }}>
        //         //     <Text>Loading</Text>
        //         // </View>
        //     ) : (
        //         <Routes />
        //     )
        //     }
        // </>

    );
};


export default App;
