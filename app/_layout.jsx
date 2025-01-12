import {Stack} from "expo-router";
import React from "react";
import "../global.css"

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ title: 'e-Media DPR RI' }} />
        </Stack>
    )
}

export default RootLayout;