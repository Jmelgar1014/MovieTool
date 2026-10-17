import { MovieGrid } from "./localComponents/MovieGrid";
import { SearchHeader } from "./localComponents/SearchHeader";
import { useEffect, useState } from "react";
function App() {
  const [movies, setMovies] = useState([]);
  const [tabSelection, setTabSelection] = useState("All");
  const [search, setSearch] = useState("");

  const markFavorite = async (id) => {
    const movie = movies.find((m) => m.id === id);
    const next = !movie.favorites;
    await window.api.updateFavorites(id, next);

    setMovies((prev) =>
      prev.map((m) => (m.id === id ? { ...m, favorites: next } : m)),
    );
  };

  const markWatched = async (id) => {
    const movie = movies.find((m) => m.id === id);
    const next = !movie.watchedMovie;
    await window.api.markWatched(id, next);

    setMovies((prev) =>
      prev.map((m) => (m.id === id ? { ...m, watchedMovie: next } : m)),
    );
  };

  const inputSearch = async (input) => {
    var filteredSearchMovies = movies.filter((movie) => {
      movie.title.toLowerCase().includes(input.toLowerCase());
    });
  };

  useEffect(() => {
    async function loadMovies() {
      const data = await window.api.getMovies();

      setMovies(data);
    }
    loadMovies();
  }, []);

  const filteredMovies = movies.filter((movie) => {
    const matchesTab =
      tabSelection === "Watched"
        ? movie.watchedMovie
        : tabSelection === "To Watch"
          ? !movie.watchedMovie
          : tabSelection === "Favorites"
            ? movie.favorites
            : true;

    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLocaleLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <div className="mx-20 my-8 ">
      <SearchHeader
        tabSelection={tabSelection}
        setTabSelection={setTabSelection}
        searchInput={search}
        setSearchInput={setSearch}
      />
      <div className="flex justify-center">
        <MovieGrid
          movies={filteredMovies}
          markFavorite={markFavorite}
          markWatched={markWatched}
        />
      </div>
    </div>
  );
}

export default App;
