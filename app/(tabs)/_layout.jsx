import React from 'react';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: [
          {
            height: 70,
            paddingTop: 10,
            borderRadius: 20,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 10,
            marginHorizontal: 25,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 10,
            elevation: 5,
          },
        ],
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
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
