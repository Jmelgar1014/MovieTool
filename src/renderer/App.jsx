import { MovieGrid } from "./localComponents/MovieGrid";
import { SearchHeader } from "./localComponents/SearchHeader";
function App() {
  return (
    <div className="mx-20 my-8 ">
      <SearchHeader />
      <MovieGrid />
    </div>
  );
}

export default App;
