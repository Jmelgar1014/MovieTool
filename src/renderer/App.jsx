import { MovieGrid } from "./localComponents/MovieGrid";
import { SearchHeader } from "./localComponents/SearchHeader";
function App() {
  return (
    <div className="mx-20 my-8 ">
      <SearchHeader />
      <div className="flex justify-center">
        <MovieGrid />
      </div>
    </div>
  );
}

export default App;
