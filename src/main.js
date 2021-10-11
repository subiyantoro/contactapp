import React from "react";
import {Provider} from "react-redux";
import store from "./configs/store";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import Router from "./configs/router";

export const Main = () => {
    return(
        <Provider store={store}>
            <SafeAreaProvider>
                <Router />
            </SafeAreaProvider>
        </Provider>
    )
}
