import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const stack = createStackNavigator();

import Welcome from '../screens/Welcome';
import UserIdentification from '../screens/UserIdentification';
import Confirmation from '../screens/Confirmation';

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
    </stack.Navigator>
)

export default AppRoutes;