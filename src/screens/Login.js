import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
} from "react-native";
import { Text, Button, Input, Icon } from "react-native-ui-kitten";
import { withFirebaseHOC } from "../utils";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  onChangeEmail = (email) => {
    this.setState({ email });
  };

  onChangePassword = (password) => {
    this.setState({ password });
  };

  handleOnLogin = async () => {
    const { email, password } = this.state;
    try {
      const response = await this.props.firebase.loginWithEmail(
        email,
        password
      );

      if (response.user) {
        this.props.navigation.navigate("App");
      }
    } catch (error) {
      console.log(error);
      alert("Make sure email and passwords match.");
    }
  };

  handleSignup = () => {
    this.props.navigation.navigate("Signup");
  };
  render() {
    const { email, password } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <View style={{ alignItems: "center", marginTop: 60 }}>
          <Image
            source={require("../assets/logo.png")}
            width={200}
            height={200}
            fill="#333"
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Input
            style={{ marginTop: 10, fontSize: 16 }}
            value={email}
            onChangeText={this.onChangeEmail}
            label="Email"
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Input
            style={{ marginTop: 10, fontSize: 16 }}
            label="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={this.onChangePassword}
          />
        </View>
        <View style={styles.button}>
          <Button onPress={this.handleOnLogin}>Login</Button>
        </View>
        <View
          style={{
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 14, color: "#abb4bd" }}>
            Don't have an account?{" "}
          </Text>
          <Button
            onPress={this.handleSignup}
            status="info"
            appearance="ghost"
            style={{
              paddingHorizontal: 1,
            }}
          >
            Sign up
          </Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  tinyLogo: {
    width: 100,
    height: 100,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "#9DFEB7",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default withFirebaseHOC(Login);
