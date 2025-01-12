import React from 'react';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="Beranda"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={'home_outline'}
              size={24}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Berita"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={'newspaper'}
              size={24}
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
