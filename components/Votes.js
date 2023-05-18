import React from "react";
import styled from "styled-components";
import { DGRAY_COLOR } from "../color";

function Votes({ votes }) {
  return <Text>{votes > 0 ? `⭐️${votes.toFixed(1)}/10` : "Coming soon"}</Text>;
}

export default Votes;

const Text = styled.Text`
  color: ${DGRAY_COLOR};
`;
