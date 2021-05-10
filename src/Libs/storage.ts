import AsyncStorage from '@react-native-community/async-storage';
import { format, isBefore } from 'date-fns';


export interface PlantProps {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
        times: number;
        repeat_every: string;
    },
    dateNotificationTime: Date;
    hour: string;
}

export interface StoragePlants {
    [id: string]: {
        data: PlantProps
    }
}

export const savePlant = async (plant: PlantProps): Promise<void> => {
    try {
        const data = await AsyncStorage.getItem('@plantmanager:plant');
        const oldPlants = data ? (JSON.parse(data) as StoragePlants) : {};

        const newPlant = {
            [plant.id]: {
                data: plant
            }
        }

        await AsyncStorage.setItem('@plantmanager:plant',
            JSON.stringify({
                ...newPlant,
                ...oldPlants
            }));

    } catch (error) {
        throw new Error(error);
    }
}

export const loadPlant = async (): Promise<PlantProps[]> => {
    try {
        const data = await AsyncStorage.getItem('@plantmanager:plant');
        const plants = data ? (JSON.parse(data) as StoragePlants) : {};

        const plantSorted = Object
            .keys(plants)
            .map((plant) => {
                return {
                    ...plants[plant].data,
                    hour: format(new Date(plants[plant].data.dateNotificationTime), 'HH:mm')
                }
            })
            .sort((a, c) =>
                Math.floor(
                    new Date(a.dateNotificationTime).getTime() / 1000 -
                    Math.floor(new Date(c.dateNotificationTime).getTime() / 1000)
                )
            );
        return plantSorted;

    } catch (error) {
        throw new Error(error);
    }
}

export const removePlant = async (id: string): Promise<void> => {
    const data = await AsyncStorage.getItem('@plantmanager:plant');
    const plants = data ? (JSON.parse(data) as StoragePlants) : {};

    delete plants[id]
    await AsyncStorage.setItem(
        '@plantmanager:plant',
        JSON.stringify(plants)
    );
}