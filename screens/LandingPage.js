import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

 export default class LandingPage extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>LandingPageWorks! scroll right to start</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});