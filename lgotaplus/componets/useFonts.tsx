import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

export const useFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'Bahnschrift': require('../assets/fonts/Bahnschrift'), 
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error('Ошибка загрузки шрифтов:', error);
      }
    }

    loadFonts();
  }, []);

  return fontsLoaded;
};