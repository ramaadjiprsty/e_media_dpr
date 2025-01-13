import React from 'react';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12, // You can adjust this to your desired size
          fontWeight: 'bold', // Optional: Make the text bold
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Beranda',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={'home-outline'}
              size={28}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: 'Berita',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={'newspaper'}
              size={28}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
