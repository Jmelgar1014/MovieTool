import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

export function SearchGroup() {
  return (
    <InputGroup className="max-w-3xs">
      <InputGroupInput placeholder="Search" />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupButton variant="">Search</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
