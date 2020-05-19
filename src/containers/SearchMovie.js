import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { API_KEY, API_URL } from '../components/config';
import axios from 'axios';
import Search from '../components/Search';

const SearchMovie = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const getSearchMovies = async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&sort_by=popularity&language=en-US&query=${inputValue}&include_adult=false`);
        const searchData = response.data.results || [];
        //console.log(searchResults);
        setSearchResults(searchData);
        //console.log(searchData[0].poster_path)
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getSearchMovies();
        setInputValue('');
    }
    
    return (
        <div className='search'>
            <div className='inputContainer'>
                <span className='inputIcon'><AiOutlineSearch size={40}/></span>
                <form className="inputForm" onSubmit={handleSubmit}>
                    <input className='inputText' type='text' placeholder='Search Movie...' value={inputValue || ''} onChange={handleChange}/>
                </form>
            </div>
            <div className='searchContainer'>
                {searchResults && searchResults.map(movie => (
                    <Search props={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    );
}

export default SearchMovie;