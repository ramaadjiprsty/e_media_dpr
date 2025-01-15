import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const CustomHeader = ({ headerImage, handlePressMenu }) => {
  return (
    <View className="flex-row items-center justify-between px-4 h-16 bg-white border-b border-gray-200">
      <View className="flex-1">
        <TouchableOpacity onPress={handlePressMenu} activeOpacity={0.7}>
          <Ionicons name={'menu'} size={28} color={'black'} />
        </TouchableOpacity>
      </View>
      <View className="flex-2 items-center">
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={headerImage}
            className="w-40 h-12" 
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View className="flex-1"></View> // make it balance
    </View>
  );
};

export default CustomHeader;
