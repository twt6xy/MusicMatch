import React, { Component } from "react";
import { View, TouchableOpacity, Image, ScrollView } from "react-native";
import { Text, Button, withStyles, Avatar, Icon } from "react-native-ui-kitten";
import { withFirebaseHOC } from "../utils";
import Gallery from "../components/Gallery";

class Activity extends Component {
  state = {
    images: [],
    userDetails: {},
  };

  handleSignout = async () => {
    try {
      await this.props.firebase.signOut();
      this.props.navigation.navigate("Auth");
    } catch (error) {
      console.log(error);
    }
  };
  fetchUserDetails = async () => {
    try {
      const userDetails = await this.props.firebase.getUserDetails();
      this.setState({ userDetails });
    } catch (error) {
      console.log(error);
    }
  };
  handleChatNavigation = () => {
    this.props.navigation.navigate("Chat");
  };

  handleChat2Navigation = () => {
    this.props.navigation.navigate("Chat2");
  };

  render() {
    const { images, userDetails } = this.state;
    const { themedStyle } = this.props;
    return (
      <ScrollView bounces={true} directionalLockEnabled={true}>
        <View style={themedStyle.root}>
          <Image
            style={themedStyle.tinyLogo}
            source={require("../assets/image1.jpg")}
          />
          <View style={[themedStyle.header, themedStyle.bordered]}>
            <Text category="h6" style={themedStyle.text}>
              {userDetails.name}
            </Text>
            <Text> </Text>
            <Text category="h6" style={themedStyle.text}>
              Joe Mama
            </Text>
          </View>

          <TouchableOpacity
            style={{ width: "86%", marginTop: 10, alignItems: "center" }}
            onPress={() => this.handleChatNavigation()}
          >
            <View style={themedStyle.signUpButton}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 200,
                  letterSpacing: 0.5,
                  color: "#000000",
                }}
              >
                Chat with Joe Mama
              </Text>
            </View>
          </TouchableOpacity>

          <Image
            style={themedStyle.tinyLogo}
            source={require("../assets/image3.jpg")}
          />
          <View style={[themedStyle.header, themedStyle.bordered]}>
            <Text category="h6" style={themedStyle.text}>
              {userDetails.name}
            </Text>
            <Text> </Text>
            <Text category="h6" style={themedStyle.text}>
              John Doe
            </Text>
          </View>

          <TouchableOpacity
            style={{ width: "86%", marginTop: 10, alignItems: "center" }}
            onPress={() => this.handleChat2Navigation()}
          >
            <View style={themedStyle.signUpButton}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 200,
                  letterSpacing: 0.5,
                  color: "#000000",
                }}
              >
                Chat with John Doe
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default Activity = withFirebaseHOC(
  withStyles(Activity, (theme) => ({
    root: {
      backgroundColor: theme["color-basic-100"],
      marginTop: 60,
      alignItems: "center",
      flex: 1,
    },
    header: {
      alignItems: "center",
      paddingTop: 25,
      paddingBottom: 17,
    },
    userInfo: {
      flexDirection: "row",
      paddingVertical: 18,
    },
    bordered: {
      borderBottomWidth: 1,
      borderColor: theme["color-basic-400"],
    },
    section: {
      flex: 1,
      alignItems: "center",
    },
    space: {
      marginBottom: 3,
      color: theme["color-basic-1000"],
    },
    separator: {
      backgroundColor: theme["color-basic-400"],
      alignSelf: "center",
      flexDirection: "row",
      flex: 0,
      width: 1,
      height: 42,
    },
    buttons: {
      flexDirection: "row",
      paddingVertical: 8,
    },
    button: {
      flex: 1,
      alignSelf: "center",
    },
    text: {
      color: "#000000",
    },
    add: {
      backgroundColor: "#939393",
      position: "absolute",
      bottom: 0,
      right: 0,
      width: 30,
      height: 30,
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "center",
    },
    signUpButton: {
      backgroundColor: "#9DFEB7",
      marginLeft: 30,
      marginRight: 30,
      marginTop: 20,
      marginBottom: 20,
      height: 48,
      width: 200,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
    },
    tinyLogo: {
      width: 300,
      height: 350,
      flexDirection: "column",
      justifyContent: "space-around",
    },
    separator: {
      backgroundColor: theme["color-basic-400"],
      alignSelf: "center",
      flexDirection: "row",
      flex: 0,
      width: 1,
      height: 42,
    },
  }))
);
