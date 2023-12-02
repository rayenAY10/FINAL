// App.js
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: 'avengers', poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg', trailerLink:'https://youtu.be/eOrNdBpGMv8' },
    { id: 2, title: 'avengers endgame', poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg', trailerLink:'https://youtu.be/TcMBFSGVi1c' },
    { id: 1, title: 'avengers age of ultron', poster: 'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg', trailerLink:'https://youtu.be/tmeOjFno6Do' },
    { id: 1, title: 'avengers infinity war', poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg', trailerLink:'https://youtu.be/6ZfuNTqbHE8' },
    { id: 1, title: 'ant man and the wasp quantumania', poster: 'https://m.media-amazon.com/images/M/MV5BODZhNzlmOGItMWUyYS00Y2Q5LWFlNzMtM2I2NDFkM2ZkYmE1XkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_FMjpg_UX1000_.jpg', trailerLink:'https://youtu.be/ZlNFpri-Y40' },
    { id: 1, title: 'spiderman no way home', poster: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg', trailerLink:'https://youtu.be/ZYzbalQ6Lg8' },
    { id: 1, title: 'captain america the winter soldier', poster: 'https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_.jpg', trailerLink:'https://youtu.be/7SlILk2WMTI' },
    { id: 1, title: 'thor ragnaruk', poster: 'https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg', trailerLink:'https://youtu.be/ue80QwXMRHg' },
    { id: 1, title: 'captain america civil war', poster: 'https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_FMjpg_UX1000_.jpghttps://m.media-amazon.com/images/M/MV5BNDIzMTk4NDYtMjg5OS00ZGI0LWJhZDYtMzdmZGY1YWU5ZGNkXkEyXkFqcGdeQXVyMTI5NzUyMTIz._V1_FMjpg_UX1000_.jpg', trailerLink:'https://youtu.be/dKrVegVI0Us' },
    { id: 1, title: 'ant man the wasp', poster: 'https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg', trailerLink:'https://youtu.be/UUkn-enk2RU' },
    { id: 1, title: 'iron man', poster: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_.jpg', trailerLink:'https://youtu.be/8ugaeA-nMTc' },
    { id: 1, title: 'black panther', poster: 'https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg', trailerLink:'https://youtu.be/xjDjIWPwcPU' },
    { id: 1, title: 'captain america the first avenger', poster: 'https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_FMjpg_UX1000_.jpg', trailerLink:'https://youtu.be/JerVrbLldXw' },
    { id: 1, title: 'spiderman homecoming', poster: 'https://m.media-amazon.com/images/M/MV5BOGQ5YTM3YzctOTVmMC00OGIyLWFkZTYtMWYwOWZhMjA2MWMwXkEyXkFqcGdeQXVyMjUyMTE5MA@@._V1_.jpg', trailerLink:'https://youtu.be/rk-dF1lIbIg' },
    { id: 1, title: 'the amazing spiderman', poster: 'https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_.jpg', trailerLink:'https://youtu.be/-tnxzJ0SSOw' },
    { id: 1, title: 'spiderman 2', poster: 'https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY281_CR8,0,190,281_.jpg', trailerLink:'https://youtu.be/1s9Yln0YwCw' },
    { id: 1, title: 'spiderman', poster: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg', trailerLink:'https://youtu.be/t06RUxPbp_c' },
    { id: 1, title: 'iron man 2', poster: 'https://m.media-amazon.com/images/M/MV5BZGVkNDAyM2EtYzYxYy00ZWUxLTgwMjgtY2VmODE5OTk3N2M5XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_FMjpg_UX1000_.jpg', trailerLink:'https://youtu.be/BoohRoVA9WQ' },
    { id: 1, title: 'iron man 3', poster: 'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg', trailerLink:'https://youtu.be/Ke1Y3P9D0Bc' },
    { id: 1, title: 'black widdow', poster: 'https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg', trailerLink:'https://youtu.be/ybji16u608U' },
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
      </div>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
