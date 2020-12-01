import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Feed from "../screens/Feed";

import Profile from "../screens/Profile";
import EditAvatar from "../screens/EditAvatar";
import Activity from "../screens/Activity";
import Chat from "../screens/Chat";
import Chat2 from "../screens/Chat2";
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

        Activity: {
          screen: Activity,
          navigationOptions: {
            headerTitle: "Playlists you've liked",
          },
          Chat2: {
            screen: Chat2,
            navigationOptions: {
              headerTitle: "Chat",
            },
          },
        },
      },
    },
  })
);

export const ChatNavigator = createAppContainer(
  createStackNavigator({
    Activity: {
      screen: Activity,
      navigationOptions: {
        headerTitle: "Playlist you've liked",
      },
    },
  })
);
