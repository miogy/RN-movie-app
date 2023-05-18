import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { Ionicons } from "@expo/vector-icons";
import {
  BLACK_COLOR,
  GRAY_COLOR,
  LIGHT_GRAY_COLOR,
  MAIN_COLOR,
} from "../color";
import { useColorScheme } from "react-native";

const Tab = createBottomTabNavigator();

function Tabs() {
  // const isDark = useColorScheme();
  //console.log(isDark); // light

  const isDark = useColorScheme() === "dark";

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: isDark ? BLACK_COLOR : "white",
      }}
      screenOptions={{
        tabBarStyle: {
          paddingBottom: 6,
          backgroundColor: isDark ? BLACK_COLOR : "white",
        },
        tabBarActiveTintColor: isDark ? "white" : MAIN_COLOR,
        tabBarInactiveTintColor: isDark ? LIGHT_GRAY_COLOR : GRAY_COLOR,
        headerStyle: {
          backgroundColor: isDark ? BLACK_COLOR : MAIN_COLOR,
        },
        headerTitleStyle: {
          color: "white",
        },
      }}
    >
      <Tab.Screen
        name="MOVIES"
        component={Movies}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-film-outline" size={18} color={color} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="TV"
        component={Tv}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="tv-outline" size={18} color={color} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="SEARCH"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-search-outline" size={18} color={color} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

export default Tabs;
