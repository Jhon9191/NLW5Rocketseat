import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const stack = createStackNavigator();

import Welcome from '../screens/Welcome';
import UserIdentification from '../screens/UserIdentification';
import Confirmation from '../screens/Confirmation';
import PlantSeleted from '../screens/PlantSelected';
import Selected from '../screens/Selected';
import MyPlants from '../screens/MyPlants';

const AppRoutes: React.FC = () => (
    <stack.Navigator
        headerMode="none"
    // screenOptions={{
    //     cardStyle: {
    //         backgroundColor: "#fff"
    //     }
    // }}
    >
        <stack.Screen
            name="Welcome"
            component={Welcome}
        />

        <stack.Screen
            name="UserIdentification"
            component={UserIdentification}
        />

        <stack.Screen
            name="Confirmation"
            component={Confirmation}
        />

        <stack.Screen
            name="PlantSeleted"
            component={PlantSeleted}
        />

        <stack.Screen
            name="Selected"
            component={Selected}
        />

        <stack.Screen
            name="MyPlants"
            component={MyPlants}
        />  

    </stack.Navigator>
)

export default AppRoutes;