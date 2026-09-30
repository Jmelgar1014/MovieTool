import { SearchGroup } from "./SearchGroup";
import { GenreSelect } from "./GenreSelect";
import { FilterTabs } from "./FilterTabs";
export function SearchHeader() {
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="m-2">
          <FilterTabs />
        </div>
        <div className="flex">
          <div className="m-2">
            <SearchGroup />
          </div>
          <div className="m-2">
            <GenreSelect />
          </div>
        </div>
      </div>
    </div>
  );
}
