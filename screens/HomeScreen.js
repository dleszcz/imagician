import React from 'react';
import { ImagePicker, Permissions, Icon } from 'expo';
import { StyleSheet, View } from 'react-native';

export class HomeScreen extends React.Component {
  componentDidMount() {
    console.log('dM');
  }

  askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
  };

  useLibraryHandler = async () => {
    await this.askPermissionsAsync();

    const { uri } = await ImagePicker.launchImageLibraryAsync({
      aspect: [4, 3],
      base64: false,
    });

    console.log('useLibraryHandler');
    if (uri) {
      this.props.navigation.navigate('Image', { uri });
    }
  };

  useCameraHandler = async () => {
    await this.askPermissionsAsync();

    const { uri } = await ImagePicker.launchCameraAsync({
      aspect: [4, 3],
      base64: false,
    });

    if (uri) {
      this.props.navigation.navigate('Image', { uri });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Icon.Ionicons
          style={styles.icon}
          name={'ios-camera'}
          size={64}
          onPress={this.useCameraHandler}
        />
          <Icon.Ionicons
          style={styles.icon}
          name={'ios-apps'}
          size={64}
          onPress={this.useLibraryHandler}
        />
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
    flexDirection: 'row'
  },
  icon: {
    margin: 10
  }
});
