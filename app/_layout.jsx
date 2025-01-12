import {Stack} from "expo-router";
import React from "react";

export const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='index'/>
        </Stack>
    )
}