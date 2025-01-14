import React, { useEffect, useRef, useState } from 'react';
import { BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';
import URLs from '../../constants/url';
import { StatusBar } from 'expo-status-bar';
import CustomHeader from '../../components/CustomHeader';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  const [canGoBack, setCanGoBack] = useState(false);
  const webviewRef = useRef(null);

  const handleBackPress = () => {
    if (webviewRef.current && canGoBack) {
      webviewRef.current.goBack(); // Go back to the previous page in the WebView
      return true; // Prevents the app from closing
    }
    return false; // If no back history in WebView, allow the default back behavior (exit app)
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [canGoBack]);

  // Handle WebView navigation state change
  const handleNavigationStateChange = (navState) => {
    const { canGoBack } = navState;
    setCanGoBack(canGoBack); // Update canGoBack state
  };

  const triggerBurgerMenu = () => {
    if (webviewRef.current) {
      webviewRef.current.injectJavaScript(`
        document.querySelector('.burger-menu').click();
        true; // Ensures the injection returns something to prevent a crash
      `);
    }
  };

  const INJECTED_JAVASCRIPT = `
  (function() {
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.style.overflowX = 'hidden';
    var topBar = document.querySelector('.top-bar');
    if (topBar) {
      topBar.style.display = 'none';
    }
    const midHeaderWrap = document.querySelector('.mid-header-wrap');
    if (midHeaderWrap) {
      midHeaderWrap.style.display = 'none';
    }
    const containerElement = document.querySelector('.navigation-inner');
    if (containerElement) {
      containerElement.style.display = 'none'; // Remove the entire container element
    }
  })();
`;

  return (
    <SafeAreaView className="h-full">
      <CustomHeader
        headerImage={require('../../assets/logo_eMedia.png')}
        handlePressMenu={triggerBurgerMenu}
      />
      <WebView
        className={'overflow-hidden'}
        source={{ uri: URLs.DPR_MEDIA_BERANDA }}
        cacheMode="LOAD_CACHE_ELSE_NETWORK"
        cacheEnabled={true}
        javaScriptEnabled={true}
        scalesPageToFit={true}
        injectedJavaScript={INJECTED_JAVASCRIPT}
      />
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default Index;
