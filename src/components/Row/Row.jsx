import React , { useState , useEffect } from 'react'
import instance from "../../endpoints/axios";
import Poster from "./Poster";
import "./Row.css";


   function Row({title , moviesUrl , isLarge}) {
         
         const [ movies , setMovies ] = useState([]);
         const [ loading , setLoading] = useState(true);

          useEffect(() => {
            
              instance.get(moviesUrl)
              .then(result => {
                  setLoading(false);
                  setMovies(result.data.results);
              })
              .catch(err => console.log(err.message))


          },[moviesUrl])  
  
                    
       return (
           <div className ="collection">
                <div className="collection__top">
                   <h2> {title} </h2>
                </div>
               <div className="collection__bottom"> 
                   {
                      movies.map(movie =>  <Poster  key={movie.id} movieImage={isLarge ? movie.poster_path : movie.backdrop_path} name={movie.name} isLarge={isLarge}/> )
                   }               
                </div>

           </div>
       )
   }
   
   export default Row
   