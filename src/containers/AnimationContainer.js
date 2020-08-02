import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnimation } from "../store/actions";
import Movie from "../components/Movie";

const AnimationContainer = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnimation());
  }, [dispatch]);

  const animationData =
    useSelector((state) => state.animation.movies, []) || [];

  return (
    <div className="movie__view">
      <h3>애니메이션</h3>
      <div className="movieContainer">
        {animationData.results &&
          animationData.results.map((movie) => (
            <Movie props={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
};

export default AnimationContainer;
