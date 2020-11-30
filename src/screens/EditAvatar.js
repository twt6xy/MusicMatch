import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Button, Text } from "react-native-ui-kitten";
import * as ImagePicker from "expo-image-picker";
import { withFirebaseHOC } from "../utils";

class EditAvatar extends Component {
  state = {
    avatarImage: null,
  };

  selectImage = async () => {
    const options = {
      noData: true,
    };
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ avatarImage: result.uri });
    }
  };

  onSubmit = async () => {
    try {
      const avatarImage = this.state.avatarImage;
      this.props.firebase.uploadAvatar(avatarImage);

      this.setState({
        avatarImage: null,
      });
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text category="h2">Edit Avatar</Text>
        <View>
          {this.state.avatarImage ? (
            <Image
              source={{ uri: this.state.avatarImage }}
              style={{ width: 300, height: 300 }}
            />
          ) : (
            <Button onPress={this.selectImage} style={styles.Button}>
              Add an image
            </Button>
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Button: {
    backgroundColor: "#000000",
    alignItems: "center",
    padding: 10,
    margin: 30,
    borderColor: "#9DFEB7",
  },
});
export default withFirebaseHOC(EditAvatar);
