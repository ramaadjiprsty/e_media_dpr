import { useEffect, useRef, useState } from 'react';
import { BackHandler } from 'react-native';

const useWebViewBackHandler = () => {
  const [canGoBack, setCanGoBack] = useState(false);
  const webviewRef = useRef(null);

  const handleBackPress = () => {
    if (webviewRef.current && canGoBack) {
      webviewRef.current.goBack(); // Go back to the previous page in the WebView
      return true; // Prevents the app from closing
    }
    return false; // If no back history in WebView, pressing back will exit the app
  };

  const triggerBurgerMenu = () => {
    if (webviewRef.current) {
      webviewRef.current.injectJavaScript(`
        document.querySelector('.burger-menu').click();
        true; // Ensures the injection returns something to prevent a crash
      `);
    }
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [canGoBack]);

  const handleNavigationStateChange = (navState) => {
    const { canGoBack } = navState;
    setCanGoBack(canGoBack);
  };

  return { webviewRef, handleNavigationStateChange, triggerBurgerMenu };
};

export default useWebViewBackHandler;
