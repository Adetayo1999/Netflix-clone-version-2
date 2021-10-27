 
 import React from 'react';
 import requests from "./endpoints/requests";
 import Row from "./components/Row";
 import Banner from "./components/Banner";
 import Header from "./components/Header";
 import "./App.css";
 

 function App() {
   return (
     <div className="app">
         <Header />
         <Banner />
         <Row 
          title="Netflix Originals" 
          moviesUrl ={requests.fetchNetflixOriginals}
          isLarge
           />
         <Row  title="Top Rated Movies" moviesUrl ={requests.fetchTopRated} />
         <Row  title="Action Movies" moviesUrl ={requests.fetchActionMovies} />
         <Row  title="Comedy Movies" moviesUrl ={requests.fetchComedyMovies} />
         <Row  title="Romance Movies" moviesUrl ={requests.fetchRomanceMovies} />
         <Row  title="Horror Movies" moviesUrl ={requests.fetchHorrorMovies} />
         <Row  title="Trending Movies" moviesUrl ={requests.fetchTrending} />
         <Row  title="Documentaries" moviesUrl ={requests.fetchDocumentaries} />

     </div>
   )
 }
 
 export default App
 