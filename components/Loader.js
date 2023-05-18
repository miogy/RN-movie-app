import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components";

const Wrap = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Loader = () => (
  <Wrap>
    <ActivityIndicator />
  </Wrap>
);
export default Loader;
