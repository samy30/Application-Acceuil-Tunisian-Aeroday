import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, Platform } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';
import materialTheme from '../constants/Theme';

const { height, width } = Dimensions.get('screen');

export default class LoadingPage extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        
        <Block flex center>
          <ImageBackground
            source={require('../assets/images/firstTest.jpg')}
            style={{ height: height, width: width, zIndex: 1 }}
          >
            <Block center style={styles.bottom}>
              <Button
                shadowless
                style={styles.button}
                color={materialTheme.COLORS.BUTTON_COLOR}
                onPress={() => navigation.navigate('RealTime')}>
                GET STARTED
              </Button>
            </Block>
          </ImageBackground>
          
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'relative',
    bottom: theme.SIZES.BASE,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: '10%',
  }
});