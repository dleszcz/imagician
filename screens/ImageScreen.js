import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export class ImageScreen extends React.Component {
  render() {
    const { uri } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <Image source={{ uri }} style={{ width: '100%', height: '100%' }} />
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
