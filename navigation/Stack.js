import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

const NativeStack = createNativeStackNavigator();

const ScreenOne = ({ navigation: { navigate } }) => (
  <ScreenWrap onPress={() => navigate("Two")}>
    <Text>go to next TwoPage</Text>
  </ScreenWrap>
);

const ScreenTwo = ({ navigation: { navigate } }) => (
  <ScreenWrap>
    <Text>welcome TwoPage!</Text>
    <Button title="next Screen" onPress={() => navigate("three")} />
  </ScreenWrap>
);

const ScreenThree = ({ navigation }) => (
  <ScreenWrap onPress={() => navigation.navigate("Tabs", { screen: "SEARCH" })}>
    <Text>go to Search </Text>
  </ScreenWrap>
);

export default function Stack() {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name="One" component={ScreenOne}></NativeStack.Screen>
      <NativeStack.Screen name="Two" component={ScreenTwo}></NativeStack.Screen>
      <NativeStack.Screen
        name="three"
        component={ScreenThree}
      ></NativeStack.Screen>
    </NativeStack.Navigator>
  );
}

const ScreenWrap = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
