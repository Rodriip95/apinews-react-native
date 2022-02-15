import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import AppContextProvider from './src/context';
import RootNavigation from './src/navigation';

const App = () => {
  return (
    <AppContextProvider>
      <RootNavigation />
    </AppContextProvider>
  );
};

export default App;
