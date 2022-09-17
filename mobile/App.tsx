import { StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';

import { Routes } from './src/routes';
import { Brackground } from './src/components/Brackground';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })
  return (
    <Brackground>
    <StatusBar
      barStyle={'light-content'}
      backgroundColor={'transparent'}
      translucent
    />

    { fontsLoaded ? <Routes /> : <Loading />}
      
    </Brackground>
  );
}