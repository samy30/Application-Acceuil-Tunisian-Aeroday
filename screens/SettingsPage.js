import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class SettingsPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SettingsPage works</Text>
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
