import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../styles/index';
import Icon from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator();

import Selected from '../screens/PlantSelected';
import MinhasPlantas from '../screens/MyPlants';

const TabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: colors.green,
            inactiveTintColor: colors.heading,
            labelPosition: 'beside-icon',
            style: {
                paddingVertical: 0,
                height: 58,
                borderColor: 'transparent',
                elevation: 0,
                borderWidth: 0
            },
        }}>
            <Tab.Screen name="Selected" component={Selected}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <Icon name="add-circle-outline" size={size} color={color} />
                    ))
                }}
            />

            <Tab.Screen name="Minhas Plantas" component={MinhasPlantas}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <Icon name="format-list-bulleted" size={size} color={color} />
                    ))
                }}
            />

        </Tab.Navigator>
    );
}

export default TabNavigator;