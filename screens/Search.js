import { useState } from "react";
import { Alert, Text } from "react-native";
import { useQueries, useQuery } from "react-query";
import styled from "styled-components";
import { moviesApi, tvApi } from "../api";

const Container = styled.ScrollView``;
const SearchBar = styled.TextInput`
  width: 90%;
  margin: 10px auto;
  padding: 10px;
  background-color: white;
  /* border-width: 1; */
  border-color: lightgray;
`;

function Search() {
  const [query, setQuery] = useState("");
  const {
    isLoading: moviesLoading,
    data: moviesData,
    refetch: searchMovies,
  } = useQuery(["searchMovies", query], moviesApi.search, {
    enabled: false,
  });
  const {
    isLoading: tvLoading,
    data: tvData,
    refetch: searchTv,
  } = useQuery(["searchTv", query], tvApi.search, {
    enabled: false,
  });

  const onChangeText = (text) => {
    setQuery(text);
    // console.log(query);
  };

  const onSubmit = () => {
    if (query === "") {
      return;
    }
    // alert("search");
    searchMovies();
    searchTv();
  };
  console.log(moviesData, tvData);
  // console.log(isLoading, data);
  return (
    <Container>
      <SearchBar
        placeholder="Search for Movie or Tv show"
        placeholderTextColor="lightgray"
        returnKeyType="search"
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
      />
    </Container>
  );
}

export default Search;

const SearchWrap = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
