import { useState } from "react";
import { RefreshControl, ScrollView } from "react-native";
import { useQuery, useQueryClient } from "react-query";
import styled from "styled-components";
import { tvApi } from "../api";
import HList from "../components/HList";
import Loader from "../components/Loader";

function Tv() {
  const queryClient = useQueryClient();
  const [refreshing, setRefreshing] = useState(false);
  const { isLoading: airingLoading, data: airingData } = useQuery(
    ["tv", "today"],
    tvApi.airing
  );
  const { isLoading: trendingLoading, data: trendingData } = useQuery(
    ["tv", "trending"],
    tvApi.trending
  );
  const { isLoading: topRatedLoading, data: topRatedData } = useQuery(
    ["tv", "top"],
    tvApi.topRated
  );
  // console.log(airingData);

  const onRefresh = async () => {
    setRefreshing(true);
    await queryClient.refetchQueries(["tv"]);
    setRefreshing(false);
  };
  const loading = airingLoading || trendingLoading || topRatedLoading;
  return loading ? (
    <Loader />
  ) : (
    <ScrollView
      contentContainerStyle={{ paddingVertical: 30 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <HList title="Trending TV" data={trendingData.results} />
      <HList title="Airing Today" data={airingData.results} />
      <HList title="Top Rated TV" data={topRatedData.results} />
    </ScrollView>
  );
}

export default Tv;

const TvWrap = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
