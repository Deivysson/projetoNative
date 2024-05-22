import { createStackNavigator } from "@react-navigation/stack";

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name='Welcome'
            component={Welcome}
            />

            <Stack.Screen 
            name="SignIn"
            component={SignIn}
            />
        </Stack.Navigator>
    )
}