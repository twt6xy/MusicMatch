import { createStackNavigator } from "react-navigation-stack";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Chat from "../screens/Chat";

const AuthNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: Signup },
    Chat: { screen: Chat },
  },
  {
    initialRouteName: "Login",
    headerMode: "none",
  }
);

export default AuthNavigator;
