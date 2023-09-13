import { useEffect, useState } from "react";
import searchIcon from "./assets/search.svg";
import "./App.css";
import Movie from "./Movie";

//  9cb5714
const API_URL = "http://www.omdbapi.com?apikey=9cb5714";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  //fetching data using function
  const searchMovies = async title => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search);
  };

  console.log(movies);
  useEffect(() => {
    searchMovies("avenger");
  }, []);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold tracking-tighter text-teal-700">
        MovieLand
      </h1>
      <div className="flex justify-center items-center p-5 ">
        <input
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="border  border-rose-800 rounded-md h-9 pl-2 text-xl"
          placeholder="Search movies"
        />
        <div className="">
          <img
            onClick={() => searchMovies(searchTerm)}
            className="inline w-7 h-9 rounded-md hover:bg-cyan-500 bg-white"
            src={searchIcon}
            alt=""
          />
        </div>
      </div>
      {movies?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {movies.map(movie => (
            <Movie key={movie.imdbID} movie={movie}></Movie>
          ))}
        </div>
      ) : (
        <div>
          <h2>No movie found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
