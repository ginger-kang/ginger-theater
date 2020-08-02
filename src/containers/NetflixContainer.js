import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNetflix } from "../store/actions/index";
import Movie from "../components/Movie";

const NetflixContainer = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNetflix());
  }, [dispatch]);

  const netflixData = useSelector((state) => state.netflix.movies, []) || [];
  //console.log(netflixData.results);

  return (
    <div className="movie__view">
      <h3>NETFLIX ORIGINAL</h3>
      <div className="movieContainer">
        {netflixData.results &&
          netflixData.results.map((movie) => (
            <Movie props={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
};

export default NetflixContainer;
