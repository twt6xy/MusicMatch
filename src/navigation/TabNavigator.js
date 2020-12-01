import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Icon } from "react-native-ui-kitten";

import Feed from "../screens/Feed";

import Activity from "../screens/Activity";
import Profile from "../screens/Profile";
import { FeedNavigator, ProfileNavigator } from "./StackNavigator";

const TabNavigator = createBottomTabNavigator(
  {
    Feed: {
      screen: FeedNavigator,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon
            name="swap-outline"
            width={32}
            height={32}
            fill={focused ? "#111" : "#939393"}
          />
        ),
      },
    },
    Activity: {
      screen: Activity,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon
            name="message-square-outline"
            width={32}
            height={32}
            fill={focused ? "#111" : "#939393"}
          />
        ),
      },
    },

    Profile: {
      screen: ProfileNavigator,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon
            name="person-outline"
            width={32}
            height={32}
            fill={focused ? "#111" : "#939393"}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
    },
  }
);

export default createAppContainer(TabNavigator);
