import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Feed from "../screens/Feed";

import Profile from "../screens/Profile";
import EditAvatar from "../screens/EditAvatar";

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
    },
  })
);
