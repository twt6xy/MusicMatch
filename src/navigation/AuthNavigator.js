import { createStackNavigator } from "react-navigation-stack";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Chat from "../screens/Chat";
import Chat2 from "../screens/Chat2";

const AuthNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: Signup },
    Chat: { screen: Chat },
    Chat2: { screen: Chat2 },
  },
  {
    initialRouteName: "Login",
    headerMode: "none",
  }
);

export default AuthNavigator;
