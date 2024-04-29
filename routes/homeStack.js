import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../src'
import About from "../screens/About";

const screens = {
    Home: {
        screen: Home
    },
    About: {
        screen: About
    }


}

const HomeStack = createStackNavigator(screens);