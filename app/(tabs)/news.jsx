import React from 'react';
import WebView from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import URLs from '../../constants/url';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../components/CustomHeader';
import { INJECTED_JAVASCRIPT } from '../../constants/injectedJavascript';
import useWebViewBackHandler from '../../hooks/useWebViewBackHandler';

export const News = () => {
  const { webviewRef, handleNavigationStateChange, triggerBurgerMenu, triggerGalleryMenu } =
    useWebViewBackHandler();

  return (
    <SafeAreaView className="h-full overflow-hidden">
      <CustomHeader
        headerImage={require('../../assets/logo_eMedia.png')}
        handlePressMenu={triggerBurgerMenu}
        handlePressGallery={triggerGalleryMenu}
      />
      <WebView
        ref={webviewRef}
        source={{ uri: URLs.DPR_MEDIA_BERITA }}
        cacheMode="LOAD_CACHE_ELSE_NETWORK"
        cacheEnabled={true}
        javaScriptEnabled={true}
        scalesPageToFit={true}
        onNavigationStateChange={handleNavigationStateChange}
        injectedJavaScript={INJECTED_JAVASCRIPT}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default News;
