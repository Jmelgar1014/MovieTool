import { SearchGroup } from "./SearchGroup";
import { GenreSelect } from "./GenreSelect";
import { FilterTabs } from "./FilterTabs";
export function SearchHeader({
  tabSelection,
  setTabSelection,
  searchInput,
  setSearchInput,
}) {
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="my-2">
          <FilterTabs
            setTabSelection={setTabSelection}
            tabSelection={tabSelection}
          />
        </div>
        <div className="flex">
          <div className="my-2">
            <SearchGroup
              searchInput={searchInput}
              setSearchInput={setSearchInput}
            />
          </div>
          <div className="my-2">
            <GenreSelect />
          </div>
        </div>
      </div>
    </div>
  );
}
