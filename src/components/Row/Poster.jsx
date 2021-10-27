import React from 'react';
import "./Poster.css";
   const base_url = "https://image.tmdb.org/t/p/original";

function Poster({movieImage, name , isLarge }) {
    return (
       
            <img src={`${base_url}${movieImage}`} alt = {name} className={`poster__image ${isLarge && 'poster__large'}`}/>
       
    )
}

export default Poster
