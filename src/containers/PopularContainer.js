import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPopular } from "../store/actions/index";
import Movie from "../components/Movie";

const PopularContainer = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopular());
  }, [dispatch]);

  const popularData = useSelector((state) => state.popular.movies, []) || [];
  //console.log(popularData.results)

  return (
    <div className="movie__view">
      <h3>인기 컨텐츠</h3>
      <div className="movieContainer">
        {popularData.results &&
          popularData.results.map((movie) => (
            <Movie props={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
};

export default PopularContainer;
