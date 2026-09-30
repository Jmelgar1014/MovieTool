import { useState, useEffect } from "react";
import { MovieCards } from "./MovieCards";

export function MovieGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const data = await window.api.getMovies();
      setMovies(data);
    }
    loadMovies();
  }, []);

  return (
    <ul className="my-4 grid gap-4 justify-items-center grid-cols-1 sm:grid-cols-2 sm:justify-items-stretch md:grid-cols-3 lg:grid-cols-4 ">
      {movies.map(({ title, format, genre, Id }) => (
        <li className=" " key={Id}>
          <MovieCards title={title} format={format} genre={genre} />
        </li>
      ))}
    </ul>
  );
}
