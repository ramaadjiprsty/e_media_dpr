import './../global.css';
import { Stack } from 'expo-router';
import { Image, TouchableOpacity } from 'react-native';

const RootLayout = () => {
  const headerLeft = () => (
    <TouchableOpacity className="w-full items-center" activeOpacity={1}>
      <Image
        source={require('../assets/logo_eMedia.png')} // Replace with your logo image path
        style={{ width: 120, height: 60 }} // Adjust size as needed
        resizeMode="contain"
        resizeMethod={'auto'}
      />
    </TouchableOpacity>
  );

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerLeft,
          headerTitle: '',
          headerTitleAlign: 'center',
        }}
      />
    </Stack>
  );
};

export default RootLayout;
