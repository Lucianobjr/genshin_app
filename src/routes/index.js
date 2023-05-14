import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StackRoutes } from './StackRoutes';
import Weapons from '../pages/weapons';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function Routes() {

    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#121212",
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'rgb(255,236,188)',
                    borderRadius: 20,
                    bottom: 5,
                    left: 10,
                    right: 10,
                    elevation: 0,
                }
            }}
        >
            <Tab.Screen 
                name='StackRoutes'
                component={StackRoutes}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if(focused) {
                            return <Ionicons name='people' size={30} color="#000" />
                        }
                        return <Ionicons name='people-outline' size={30} color={color} />
                    }
                }}
            />
            <Tab.Screen 
                name='Weapons'
                component={Weapons}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if(focused) {
                            return <Image source={require('../pages/assets/blades.png')} style={{ width: 30, height: 30 }} />
                        }
                        return <Image source={require('../pages/assets/blades-outline.png')} style={{ width: 30, height: 30 }} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}