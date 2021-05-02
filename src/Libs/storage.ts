import AsyncStorage from '@react-native-community/async-storage';
import { isBefore } from 'date-fns';


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
}

interface StoragePlants{
    [id: string]: {
        data: PlantProps
    }
}

export const savePlant = async (plant : PlantProps) : Promise<void> => {
    try{
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

    }catch(error){
        throw new Error(error);  
    }
}
