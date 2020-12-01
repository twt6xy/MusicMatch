import React, { Component } from "react";
import { GiftedChat } from "react-native-gifted-chat"; // 0.3.0
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import firebaseSvc from "../utils/FirebaseSvc";
import { Icon } from "react-native-ui-kitten";

class Chat extends Component {
  state = {
    messages: [],
  };
  handleEditAvatarNavigation = () => {
    this.props.navigation.navigate("Activity");
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <TouchableOpacity
          style={{
            width: "100%",
            height: "10%",
            flex: "start",
            marginTop: 10,
            paddingLeft: 10,
            top: 50,
          }}
          onPress={() => this.handleEditAvatarNavigation()}
        >
          <Icon
            name="arrow-back-outline"
            width={32}
            height={32}
            fill="#000000"
          />
        </TouchableOpacity>
        <GiftedChat
          messages={this.state.messages}
          onSend={firebaseSvc.send}
          user={this.user}
        />
      </View>
    );
  }

  componentDidMount() {
    firebaseSvc.refOn((message) =>
      this.setState((currentState) => ({
        messages: GiftedChat.append(currentState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    firebaseSvc.refOff();
  }
}
const styles = StyleSheet.create({
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
});

export default Chat;
