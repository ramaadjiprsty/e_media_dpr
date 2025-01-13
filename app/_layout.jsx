import './../global.css';
import { Stack } from 'expo-router';
import { Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRef } from 'react';

const RootLayout = () => {
  const webviewRef = useRef(null);

  const headerLeft = () => (
    <TouchableOpacity className="border" activeOpacity={1}>
      <Image
        source={require('../assets/logo_eMedia.png')} // Replace with your logo image path
        style={{ width: 120, height: 80 }} // Adjust size as needed
        resizeMode="contain"
        className="border"
      />
    </TouchableOpacity>
  );

  const headerRight = () => (
    <TouchableOpacity onPress={() => onRefresh} activeOpacity={0.5}>
      <Ionicons name="refresh" size={24} />
    </TouchableOpacity>
  );

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerLeft,
          // headerRight,
          headerTitle: '',
          headerTitleAlign: 'center',
        }}
      />
    </Stack>
  );
};

export default RootLayout;
