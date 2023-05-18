import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components";
import { BLACK_COLOR } from "../color";
import VMedia from "./VMedia";

const ListContainer = styled.View`
  margin-bottom: 30px;
`;
const ListTitle = styled.Text`
  color: ${BLACK_COLOR};
  font-size: 20px;
  font-weight: 600;
  margin-left: 20px;
  margin-bottom: 20px;
`;
export const HListSeparator = styled.View`
  width: 15px;
`;

const HList = ({ title, data }) => (
  <ListContainer>
    <ListTitle>{title}</ListTitle>
    <FlatList
      contentContainerStyle={{ paddingHorizontal: 20 }}
      ItemSeparatorComponent={HListSeparator}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.id + ""}
      renderItem={({ item }) => (
        <VMedia
          posterPath={item.poster_path}
          voteAverage={item.vote_average}
          originalTitle={item.original_title ?? item.original_name}
        />
      )}
    />
  </ListContainer>
);

export default HList;
