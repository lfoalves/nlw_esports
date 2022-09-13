import { StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';

import { Home } from './src/screens/Home';
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

    { fontsLoaded ? <Home /> : <Loading />}
      
    </Brackground>
  );
}