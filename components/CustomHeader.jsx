import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const CustomHeader = ({ headerImage, handlePressMenu }) => {
  return (
    <View className="flex-row items-center justify-between px-4 h-16 bg-white border-b border-gray-200">
      {/* Left Menu Icon */}
      <View className="flex-1">
        <TouchableOpacity onPress={handlePressMenu} activeOpacity={0.7}>
          <Ionicons name={'menu'} size={28} color={'black'} />
        </TouchableOpacity>
      </View>

      {/*Center Header Image */}
      <View className="flex-2 items-center">
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={headerImage} // Replace with your logo image path
            className="w-40 h-12" // Adjust width and height based on your logo size
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* Empty View to balance space on the right */}
      <View className="flex-1"></View>
    </View>
  );
};

export default CustomHeader;
