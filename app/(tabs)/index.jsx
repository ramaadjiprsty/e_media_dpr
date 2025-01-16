import React from 'react';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import CustomHeader from '../../components/CustomHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { INJECTED_JAVASCRIPT } from '../../constants/injectedJavascript';
import useWebViewBackHandler from '../../hooks/useWebViewBackHandler';
import { URLs } from '../../constants/url';

const Index = () => {
  const { webviewRef, handleNavigationStateChange, triggerBurgerMenu, triggerGalleryMenu } =
    useWebViewBackHandler();

  return (
    <SafeAreaView className="h-full">
      <CustomHeader
        headerImage={require('../../assets/logo_eMedia.png')}
        handlePressMenu={triggerBurgerMenu}
        handlePressGallery={triggerGalleryMenu}
      />
      <WebView
        ref={webviewRef}
        source={{ uri: URLs.DPR_MEDIA_BERANDA }}
        cacheMode="LOAD_CACHE_ELSE_NETWORK"
        cacheEnabled={true}
        javaScriptEnabled={true}
        scalesPageToFit={true}
        onNavigationStateChange={handleNavigationStateChange}
        injectedJavaScript={INJECTED_JAVASCRIPT}
      />
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
};

export default Index;
