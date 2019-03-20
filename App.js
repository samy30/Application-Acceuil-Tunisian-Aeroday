import React from 'react';
import { Platform, StatusBar, Image } from 'react-native';
import { AppLoading, Asset } from 'expo';
import { Block, GalioProvider } from 'galio-framework';
import { createAppContainer } from 'react-navigation';

import Screens from './navigation/Screens';
import { Images, products, materialTheme } from './constants/';

const App = createAppContainer(Screens);
export default App;
/*
export default class App extends React.Component {
  render() {
      return (
        <GalioProvider theme={materialTheme}>
          <Block flex>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <Screens />
          </Block>
        </GalioProvider>
      );
    }
  }*/