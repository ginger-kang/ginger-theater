import React, { useState } from 'react';

const SearchMovie = (props) => {
    const [inputValue, setInputValue] = useState();

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
    
}