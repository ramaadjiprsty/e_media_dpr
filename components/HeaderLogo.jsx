import { Image, TouchableOpacity } from 'react-native';

const HeaderLogo = () => (
  <TouchableOpacity activeOpacity={1}>
    <Image
      source={require('../assets/logo_eMedia.png')} // Replace with your logo image path
      style={{ width: 120, height: 80 }} // Adjust size as needed
      resizeMode="contain"
    />
  </TouchableOpacity>
);

export default HeaderLogo;
