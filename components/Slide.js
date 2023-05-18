// Movies Refactor

import React from "react";
import { useColorScheme, View } from "react-native";
import styled from "styled-components";
import { makeImgPath } from "../utils";
import Poster from "./Poster";

const Slide = ({
  backdropPath,
  posterPath,
  voteAverage,
  originalTitle,
  overview,
}) => {
  const isDark = useColorScheme() === "dark";
  return (
    <View style={{ flex: 1 }}>
      <BgImg blurRadius={10} source={{ uri: makeImgPath(backdropPath) }} />
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: isDark
            ? "rgba(0,0,0,.0.3)"
            : "rgba(255,255,255, 0.1)",
        }}
      />
      <Wrapper>
        <Poster path={posterPath} />
        <Column>
          <Title>{originalTitle}</Title>
          {voteAverage > 0 ? <Votes>⭐️{voteAverage}/10</Votes> : null}
          <Overview>{overview.slice(0, 80)}...</Overview>
        </Column>
      </Wrapper>
    </View>
  );
};

export default Slide;

const BgImg = styled.Image`
  flex: 1;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const PostImg = styled.Image`
  width: 120px;
  height: 180px;
  border-radius: 5px;
`;

const Wrapper = styled.View`
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const Column = styled.View`
  width: 50%;
  margin-left: 20px;
`;

const Title = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
  color: white;
`;

const Overview = styled.Text`
  width: 100%;
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.6);
`;

const Votes = styled(Overview)`
  font-size: 12px;
`;
