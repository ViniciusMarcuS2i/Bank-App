import { StatusBar } from 'react-native';
import 'react-native-reanimated' 
import { Routes } from './src/routes';
import { NativeBaseProvider } from 'native-base';
import { AppProvider } from './src/context/AppContext';



export default function App() {
  return (
    <AppProvider>
      <NativeBaseProvider>
      <StatusBar 
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
      <Routes />
      </NativeBaseProvider>
    </AppProvider>
  );
}


