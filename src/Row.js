import React, { useState,useEffect } from 'react'
import YouTube from 'react-youtube';
import axios from './axios'
import './Row.css'
import movieTrailer from "movie-trailer"

const base_url="https://image.tmdb.org/t/p/original"

function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies] = useState([]);
    const [trailer,setTrailer] = useState("");

    useEffect(()=>{
        async function fetchData(){
        const request = await axios.get(fetchUrl)
        setMovies(request.data.results) 
        return request;           
        }
        fetchData();
    },[fetchUrl])

    const opts = {
        height: '390',
        width: "100%",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const handleClick = (movie) => {
          if(trailer){
              setTrailer("");
          } else {
              movieTrailer(movie?.name || "")
              .then((url)=>{
                  console.log(url);
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailer(urlParams.get("v"));
              });
          }
      }
      const scroll=()=>{
          return window.scrollBy(100,0)
      }

    return (
        <div className="row" >
            <h2>{title}</h2>
            {/* <button onClick={scroll}>dva</button>/ */}
                <div className="row_posters">
                    {movies.map(movie=>(
                    <img className={`row_poster ${isLargeRow && "row_large_poster"}`}
                    key={movie.id}
                    src={`${base_url}${movie.poster_path}`}
                    // onClick={()=>{handleClick(movie)}}
                    alt={movie.name} 
                    />

                    ))} 
                    
                </div>
                {trailer && <YouTube videoId={trailer} opts={opts} />}
        </div>
    )
}

export default Row
