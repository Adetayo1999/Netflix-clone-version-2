import React, { useState, useEffect } from "react";
import requests from "../../endpoints/requests";
import axios from "../../endpoints/axios";
import "./Banner.css";

const base_url = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setMovie] = useState({});
  const [changer, setChanger] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setChanger(!changer);
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [changer]);

  useEffect(() => {
    axios
      .get(requests.fetchTrending)
      .then((res) =>
        setMovie(
          res.data.results[Math.floor(Math.random() * res.data.results.length)]
        )
      )
      .catch((err) => console.error(err));
  }, [changer]);

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(to bottom , rgba(0,0,0,0.92) , rgba(0,0,0,0.1) ) ,  url('${base_url}${movie.backdrop_path}')`,
        backgroundSize: "cover",
        height: "100vh",
        backgroundPosition: "top",
      }}
      className='banner'
    >
      <div className='banner__container'>
        <h1>{movie.name || movie.original_title || movie.original_name}</h1>

        <div>
          <button>
            {" "}
            <i class='fas fa-play'></i> Play
          </button>
          <button>
            {" "}
            <i class='fas fa-info-circle'></i> More Info
          </button>
        </div>
        <p>{movie.overview}</p>
      </div>
    </section>
  );
}

export default Banner;
