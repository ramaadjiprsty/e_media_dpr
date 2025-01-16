import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const CustomHeader = ({ headerImage, handlePressMenu, handlePressGallery }) => {
  return (
    <View className="flex-row items-center justify-between px-4 h-16 bg-white border-b border-gray-200">
      <View>
        <TouchableOpacity onPress={handlePressMenu} activeOpacity={0.7}>
          <Ionicons name={'menu'} size={28} color={'black'} />
        </TouchableOpacity>
      </View>
      <View>
          <Image
            source={headerImage}
            className="w-40 h-12" 
            resizeMode="contain"
          />
      </View>
      <View>
      <TouchableOpacity onPress={handlePressGallery} activeOpacity={0.7}>
      <Ionicons name="aperture-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeader;
