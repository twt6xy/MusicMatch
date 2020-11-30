import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
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
      alert(
        "Please make sure the following fields are correct: " +
          "\n" +
          "• Your email is input correctly" +
          "\n" +
          "• Your password matches your account"
      );
    }
  };

  handleSignup = () => {
    this.props.navigation.navigate("Signup");
  };
  render() {
    const { email, password } = this.state;
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Image
              style={styles.tinyLogo}
              source={require("../assets/logo.png")}
            />
            <Text
              style={{
                fontSize: 32,
                fontWeight: "700",
                color: "black",
                paddingBottom: 20,
              }}
            >
              Music Match
            </Text>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#B1B1B1"
                returnKeyType="next"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoCompleteType="email"
                value={email}
                autoCapitalize="none"
                onChangeText={this.onChangeEmail}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#B1B1B1"
                returnKeyType="done"
                textContentType="newPassword"
                secureTextEntry={true}
                value={password}
                onChangeText={this.onChangePassword}
              />
            </View>

            <TouchableOpacity
              style={{ width: "86%", marginTop: 10 }}
              onPress={this.handleOnLogin}
            >
              <View style={styles.signInButton}>
                <Text
                  style={{
                    fontSize: 16,
                    letterSpacing: 0.5,
                    color: "#000000",
                  }}
                >
                  Sign In
                </Text>
              </View>
            </TouchableOpacity>

            <View style={{ marginTop: 10 }}>
              <Text
                style={{ fontWeight: "200", fontSize: 16, textAlign: "center" }}
                onPress={this.handleSignup}
              >
                Don't have an Account?
              </Text>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "86%",
    marginTop: 15,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
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
  signInButton: {
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
  tinyLogo: {
    width: 100,
    height: 100,
    flexDirection: "column",
    justifyContent: "space-around",
  },
});
export default withFirebaseHOC(Login);
