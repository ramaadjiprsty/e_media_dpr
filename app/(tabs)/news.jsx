import React from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import URLs from '../../constants/url';
import CustomHeader from '../../components/CustomHeader';

export const News = () => {
  return (
    <View className="h-full overflow-hidden">
      <CustomHeader headerImage={require('../../assets/logo_eMedia.png')} />
      <WebView
        className={'overflow-hidden'}
        source={{ uri: URLs.DPR_MEDIA_BERITA }}
        cacheMode="LOAD_CACHE_ELSE_NETWORK"
        cacheEnabled={true}
        javaScriptEnabled={true}
        scalesPageToFit={true}
        //manipulate the default theme on webview into light
        injectedJavaScript={`
          document.documentElement.setAttribute('data-theme', 'light');
          var topBar = document.querySelector('.top-bar');
            if (topBar) {
              topBar.style.display = 'none';  // Hides the top-bar
            }
            // Remove mid-header-wrap and its children
            const midHeaderWrap = document.querySelector('.mid-header-wrap');
            if (midHeaderWrap) {
            midHeaderWrap.style.display = 'none'; // Hide the mid-header-wrap
            //midHeaderWrap.remove(); use this to completely remove it
          }
          true;
        `}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default News;
