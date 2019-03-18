import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class VoteAirshowPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>VoteAirshow works</Text>
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
