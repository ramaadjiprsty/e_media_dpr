import React, { useEffect, useRef, useState } from 'react';
import { BackHandler, View } from 'react-native';
import { WebView } from 'react-native-webview';
import URLs from '../../constants/url';
import { StatusBar } from 'expo-status-bar';

const Index = () => {
  const [canGoBack, setCanGoBack] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
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

  const onRefresh = () => {
    if (webviewRef.current) {
      setIsRefreshing(true);
      webviewRef.current.reload(); // Reload the WebView
      setTimeout(() => setIsRefreshing(false), 2000); // Simulate 2 seconds refresh time
    }
  };

  // Handle scroll detection for refresh control trigger
  const handleScroll = (event) => {
    const {
      contentOffset: { y },
      contentSize: { height },
      layoutMeasurement: { height: layoutHeight },
    } = event.nativeEvent;

    setIsAtTop(y <= 0 && height <= layoutHeight);
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
  })();
`;

  return (
    <View className="h-full">
      {/*<ScrollView*/}
      {/*  contentContainerStyle={{ flex: 1 }}*/}
      {/*  refreshControl={*/}
      {/*    <RefreshControl*/}
      {/*      refreshing={isRefreshing}*/}
      {/*      onRefresh={onRefresh}*/}
      {/*      colors={['#9Bd35A', '#689F38']} // Optional: Customize refresh spinner color*/}
      {/*      enabled={isAtTop} // Only allow refresh when at the top of the ScrollView*/}
      {/*    />*/}
      {/*  }*/}
      {/*  onScroll={handleScroll} // Detect if ScrollView is scrolled to the top*/}
      {/*  scrollEventThrottle={16} // Throttle scroll events for better performance*/}
      {/*>*/}
      <WebView
        ref={webviewRef}
        source={{ uri: URLs.DPR_MEDIA_BERANDA }}
        cacheMode="LOAD_CACHE_ELSE_NETWORK"
        cacheEnabled={true}
        javaScriptEnabled={true}
        scalesPageToFit={true}
        showsHorizontalScrollIndicator={false}
        onNavigationStateChange={handleNavigationStateChange}
        androidLayerType="hardware"
        injectedJavaScript={INJECTED_JAVASCRIPT}
      />
      {/*</ScrollView>*/}
      <StatusBar style="light" />
    </View>
  );
};

export default Index;
