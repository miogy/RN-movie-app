import React from "react";
import styled from "styled-components";
import { makeImgPath } from "../utils";

export default function Poster({ path }) {
  return <Image source={{ uri: makeImgPath(path) }} />;
}

const Image = styled.Image`
  width: 140px;
  height: 200px;
  border-radius: 5px;
`;
