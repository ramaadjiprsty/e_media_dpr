import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  BackHandler,
  RefreshControl,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';
import URLs from '../../constants/url';

const Index = () => {
  const [canGoBack, setCanGoBack] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true); // Track if the WebView is at the top
  const webviewRef = useRef(null);

  // Handle back press
  const handleBackPress = () => {
    if (webviewRef.current && canGoBack) {
      // Go back to the previous page in the WebView
      webviewRef.current.goBack();
      return true; // Prevents the app from closing
    }
    return false; // If no back history in WebView, allow the default back behavior (exit app)
  };

  // Register back button handler
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

  // Handle swipe-to-refresh
  const onRefresh = () => {
    if (webviewRef.current) {
      setIsRefreshing(true);
      // Reload the WebView
      webviewRef.current.reload();
      // Set a timeout to simulate refresh complete
      setTimeout(() => setIsRefreshing(false), 2000); // Simulate 2 seconds refresh time
    }
  };

  // Handle scroll detection for refresh control trigger
  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setIsAtTop(offsetY === 0); // Check if the WebView is at the top
    Alert.alert(offsetY.toString());
  };

  return (
    <View className="flex-1" style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            colors={['#9Bd35A', '#689F38']} // Optional: Customize refresh spinner color
            enabled={isAtTop} // Only allow refresh when at the top of the WebView
          />
        }
        onScroll={handleScroll} // Detect if WebView is scrolled to the top
      >
        <WebView
          ref={webviewRef}
          source={{ uri: URLs.DPR_MEDIA_BERANDA }} // Replace with your URL
          cacheMode="LOAD_CACHE_ELSE_NETWORK"
          cacheEnabled={true}
          javaScriptEnabled={true}
          scalesPageToFit={true}
          showsHorizontalScrollIndicator={false}
          injectedJavaScript={`
            document.documentElement.setAttribute('data-theme', 'light');
            document.documentElement.style.overflowX = 'hidden';
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
          onNavigationStateChange={handleNavigationStateChange}
        />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

export default Index;
