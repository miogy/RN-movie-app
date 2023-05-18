import React from "react";
import styled from "styled-components";
import { BLACK_COLOR, DGRAY_COLOR } from "../color";
import Poster from "./Poster";
import Votes from "./Votes";

function VMedia({ posterPath, originalTitle, voteAverage }) {
  return (
    <Movie>
      <Poster path={posterPath} />
      <Title>
        {originalTitle.slice(0, 13)}
        {originalTitle.length > 13 ? "..." : null}
      </Title>
      <Votes votes={voteAverage} color={DGRAY_COLOR} />
    </Movie>
  );
}

export default VMedia;

const Movie = styled.View`
  align-items: center;
`;
const Title = styled.Text`
  font-weight: 600;
  font-size: 16px;
  color: ${BLACK_COLOR};
`;
