import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Caracters from '../pages/caracters';
import Details from '../pages/Details';

const Stack = createNativeStackNavigator();

export function StackRoutes() {

    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='Caracters' component={Caracters} />
            <Stack.Screen name='Details' component={Details} />
        </Stack.Navigator>
    )
}