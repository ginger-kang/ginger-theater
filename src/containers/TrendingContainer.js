import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTrending } from "../store/actions/index";
import Movie from "../components/Movie";

const TrendingContainer = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrending());
  }, [dispatch]);

  const trendingData = useSelector((state) => state.trending.movies, []) || [];

  return (
    <div className="movie__view">
      <h3>현재 많이 보는 컨텐츠</h3>
      <div className="movieContainer">
        {trendingData.results &&
          trendingData.results.map((movie) => (
            <Movie props={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
};

export default TrendingContainer;
