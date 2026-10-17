import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

export function SearchGroup({ searchInput, setSearchInput }) {
  return (
    <InputGroup className="max-w-3xs">
      <InputGroupInput
        placeholder="Search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupButton variant="">Search</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
