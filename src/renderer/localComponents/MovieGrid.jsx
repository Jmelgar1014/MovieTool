import { useState, useEffect } from "react";
import { MovieCards } from "./MovieCards";

export function MovieGrid() {
  const [movies, setMovies] = useState([]);

  const markWatched = async (id) => {
    const movie = movies.find((m) => m.id === id);
    const next = !movie.favorites;
    await window.api.updateFavorites(id, next);

    setMovies((prev) =>
      prev.map((m) => (m.id === id ? { ...m, favorites: next } : m)),
    );
  };

  useEffect(() => {
    async function loadMovies() {
      const data = await window.api.getMovies();
      setMovies(data);
    }
    loadMovies();
  }, []);

  return (
    <ul className="my-4 grid gap-4 justify-items-center grid-cols-1 sm:grid-cols-2 sm:justify-items-stretch md:grid-cols-3 lg:grid-cols-4 ">
      {movies.map(({ title, format, id, posterPath, favorites }) => (
        <li className="rounded-4xl" key={id}>
          <MovieCards
            title={title}
            format={format}
            posterPath={posterPath}
            favoriteMovie={favorites}
            updateFavorite={() => markWatched(id)}
          />
        </li>
      ))}
    </ul>
  );
}
