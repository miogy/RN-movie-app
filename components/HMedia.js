import React from "react";
import styled from "styled-components";
import { BLACK_COLOR, DGRAY_COLOR } from "../color";
import Poster from "./Poster";

function HMedia({ posterPath, originalTitle, overview, releaseDate }) {
  return (
    <HMovie>
      <Poster path={posterPath} />
      <HColumn>
        <Title>
          {originalTitle.slice(0, 13)}
          {originalTitle > 13 ? "..." : null}
        </Title>
        <Release>
          {new Date(releaseDate).toLocaleDateString("ko", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </Release>
        <Overview>
          {overview !== "" && overview.length > 140
            ? `${overview.slice(0, 140)}...`
            : overview}
        </Overview>
      </HColumn>
    </HMovie>
  );
}

export default HMedia;

const HMovie = styled.View`
  flex: 1;
  padding: 0px 20px;
  flex-direction: row;
`;
const HColumn = styled.View`
  width: 58%;
  margin-left: 15px;
  padding: 10px 0;
`;
const Title = styled.Text`
  font-weight: 600;
  font-size: 16px;
  color: ${BLACK_COLOR};
`;
const Overview = styled.Text`
  color: ${BLACK_COLOR};
  opacity: 0.6;
`;
const Release = styled.Text`
  color: ${DGRAY_COLOR};
  font-size: 12px;
  margin: 10px 0;
`;
