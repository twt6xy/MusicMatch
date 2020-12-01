import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Feed from "../screens/Feed";

import Profile from "../screens/Profile";
import EditAvatar from "../screens/EditAvatar";
import Activity from "../screens/Activity";
import Chat from "../screens/Chat";
export const FeedNavigator = createAppContainer(
  createStackNavigator({
    Feed: {
      screen: Feed,
      navigationOptions: {
        headerTitle: "Feed",
      },
    },
  })
);

export const ProfileNavigator = createAppContainer(
  createStackNavigator({
    Profile: {
      screen: Profile,
    },
    EditAvatar: {
      screen: EditAvatar,
      navigationOptions: {
        headerTitle: "Edit Avatar",
      },
      Chat: {
        screen: Chat,
        navigationOptions: {
          headerTitle: "Chat",
        },
      },
    },
  })
);

export const ChatNavigator = createAppContainer(
  createStackNavigator({
    Chat: {
      screen: Activity,
      navigationOptions: {
        headerTitle: "Chat",
      },
    },
  })
);
