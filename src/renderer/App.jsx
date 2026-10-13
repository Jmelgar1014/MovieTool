import { MovieGrid } from "./localComponents/MovieGrid";
import { SearchHeader } from "./localComponents/SearchHeader";
import { useEffect, useState } from "react";
function App() {
  const [movies, setMovies] = useState([]);
  const [tabSelection, setTabSelection] = useState("All");

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

  const filteredMovies = movies.filter((movie) => {
    switch (tabSelection) {
      case "Watched":
        return movie.watchedMovie;
      case "To Watch":
        return !movie.watchedMovie;
      case "Favorites":
        return movie.favorites;
      default:
        return true;
    }
  });

  return (
    <div className="mx-20 my-8 ">
      <SearchHeader
        tabSelection={tabSelection}
        setTabSelection={setTabSelection}
      />
      <div className="flex justify-center">
        <MovieGrid movies={filteredMovies} markWatched={markWatched} />
      </div>
    </div>
  );
}

export default App;
