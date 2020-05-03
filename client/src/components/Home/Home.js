import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../config'
import axios from 'axios';
import Movie from '../Movie';

function Home() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [mainImage, setMainImage] = useState(null);

    const endpoint = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    useEffect(() => {
        const fetchApi = async () => {
            try {
                setMovies([]);
                setError(null);
                setLoading(false);
                setMainImage(null);
                const response = await axios.get(endpoint);
                setMovies(response.data.results);
                setMainImage(response.data.results[0]);
            }catch(e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchApi();
    }, []);

    if (loading) return <div>로딩중..</div>
    if (error) return <div>에러</div>
    if (!movies) return null;
    if (!mainImage) return null;

    return (
        <div className="home">
            <div>
            
            </div>
            {movies.map(movie => {
                return (
                    <Movie 
                        key = {movie.id}
                        id = {movie.id}
                        title = {movie.original_title}
                        image = {movie.poster_path}
                    />
                );
            })}
        </div>
    );
}

export default Home;