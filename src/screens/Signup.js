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
import { Text, Button, Icon, Input } from "react-native-ui-kitten";
import { withFirebaseHOC } from "../utils";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  onChangeName = (name) => {
    this.setState({ name });
  };
  onChangeEmail = (email) => {
    this.setState({ email });
  };
  onChangePassword = (password) => {
    this.setState({ password });
  };

  handleOnSignup = async () => {
    const { name, email, password } = this.state;

    try {
      const response = await this.props.firebase.signupWithEmail(
        email,
        password
      );

      if (response.user.uid) {
        const { uid } = response.user;
        const userData = { email, name, uid };
        await this.props.firebase.createNewUser(userData);
        this.props.navigation.navigate("App");
      }
    } catch (error) {
      console.log(error);
      alert(
        "Please make sure the following fields are correct: " +
          "\n" +
          "• Name field is properly filled out" +
          "\n" +
          "• Password is at least 6 characters" +
          "\n" +
          "• Email is not already in use by another user"
      );
    }
  };

  handleLogin = () => {
    this.props.navigation.navigate("Login");
  };
  render() {
    const { name, email, password } = this.state;
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
                placeholder="Name"
                placeholderTextColor="#B1B1B1"
                returnKeyType="next"
                textContentType="name"
                value={name}
                onChangeText={this.onChangeName}
              />
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
              onPress={() => this.handleOnSignup()}
            >
              <View style={styles.signUpButton}>
                <Text
                  style={{
                    fontSize: 16,
                    letterSpacing: 0.5,
                    color: "#000000",
                  }}
                >
                  Sign Up
                </Text>
              </View>
            </TouchableOpacity>

            <View style={{ marginTop: 10 }}>
              <Text
                style={{
                  fontWeight: "200",
                  fontSize: 16,
                  textAlign: "center",
                  letterSpacing: 0.5,
                }}
                onPress={this.handleLogin}
              >
                Already have an account?
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
    backgroundColor: "#FFFFFF",
  },
  form: {
    width: "86%",
    marginTop: 15,
  },
  logo: {
    marginTop: 20,
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
  signUpButton: {
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
export default withFirebaseHOC(Signup);
