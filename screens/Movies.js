// import Swiper from "react-native-web-swiper";
import Swiper from "react-native-swiper";
import { Dimensions, FlatList } from "react-native";
import Slide from "../components/Slide";
import { BLACK_COLOR } from "../color";
import HMedia from "../components/HMedia";
import styled from "styled-components";
import { useQuery, useQueryClient } from "react-query";
import { moviesApi } from "../api";
import Loader from "../components/Loader";
import HList from "../components/HList";
import { useState } from "react";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
// === const SCREEN_HEIGHT = Dimensions.get("window").height;

const ListTitle = styled.Text`
  color: ${BLACK_COLOR};
  font-size: 20px;
  font-weight: 600;
  margin-left: 20px;
`;
const ComingSoonTitle = styled(ListTitle)`
  margin-bottom: 20px;
`;

const HSeparator = styled.View`
  height: 20px;
`;

function Movies() {
  const queryClient = useQueryClient();
  const [refreshing, setRefreshing] = useState(false);

  // 상태를 관리할 state, fetch, loading상태를 useQuery로 만든다.
  const { isLoading: nowPlayingLoading, data: nowPlayingData } = useQuery(
    ["movies", "nowPlaying"],
    moviesApi.nowPlaying
  );
  const { isLoading: trendingLoading, data: trendingData } = useQuery(
    ["movies", "trending"],
    moviesApi.trending
  );
  const { isLoading: upcomingLoading, data: upcomingData } = useQuery(
    ["movies", "upcoming"],
    moviesApi.upcoming
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await queryClient.refetchQueries(["movies"]); // "movies"의 key를 가진 쿼리들을 refetch한다.
    setRefreshing(false);
  };

  // FlatList컴포넌트내에 동일하게 적용되는 props 정리하기
  const renderHMedia = ({ item }) => (
    <HMedia
      posterPath={item.poster_path}
      originalTitle={item.original_title}
      overview={item.overview}
      releaseDate={item.release_date}
    />
  );
  const keyExtractor = (item) => item.id + "";

  const loading = nowPlayingLoading || trendingLoading || upcomingLoading;

  return loading ? (
    <Loader />
  ) : (
    <FlatList
      onRefresh={onRefresh}
      refreshing={refreshing}
      ListHeaderComponent={
        <>
          <Swiper
            horizontal
            loop
            autoplay
            showsPagination={false} // slide dot
            autoplayTimeout={3.5}
            showsButtons={false}
            containerStyle={{
              width: "100%",
              marginBottom: 20,
              height: SCREEN_HEIGHT / 3,
            }}
          >
            {nowPlayingData.results.map((item) => {
              return (
                <Slide
                  key={item.id}
                  backdropPath={item.backdrop_path}
                  posterPath={item.poster_path}
                  voteAverage={item.vote_average}
                  originalTitle={item.original_title}
                  overview={item.overview}
                />
              );
            })}
          </Swiper>
          <HList title="Trending Movie" data={trendingData.results} />
          <ComingSoonTitle>Coming soon</ComingSoonTitle>
        </>
      }
      // ItemSeparatorComponent={() => <HSeparator />}
      ItemSeparatorComponent={<HSeparator />}
      data={upcomingData.results}
      keyExtractor={keyExtractor}
      renderItem={renderHMedia}
    />
  );
}

export default Movies;
