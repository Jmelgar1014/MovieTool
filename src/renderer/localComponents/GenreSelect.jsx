import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select";

export function GenreSelect() {
  return (
    <NativeSelect>
      <NativeSelectOption value="All Genres">All Genres</NativeSelectOption>
      <NativeSelectOption value="Action">Action</NativeSelectOption>
      <NativeSelectOption value="Horror">Horror</NativeSelectOption>
    </NativeSelect>
  );
}
