import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import {Button} from "react-native-elements";
import AddPage from "../pages/AddPage";

const Stack = createNativeStackNavigator()
const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomePage}
                    options={{
                        title: "Contacts",
                        headerTitleAlign: "center",
                    }}/>
                <Stack.Screen name="Detail" component={DetailPage} />
                <Stack.Screen name="Add" component={AddPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
