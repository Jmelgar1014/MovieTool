import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";

export function FavoritesBadge({ favoriteMovie, updateFavorite }) {
  return (
    <button
      onClick={updateFavorite}
      className={`absolute top-2 left-4 z-10 transition-opacity ${
        favoriteMovie
          ? "opacity-100"
          : "opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
      }`}
    >
      <Badge>
        <Heart className={favoriteMovie ? "fill-white" : ""} />
      </Badge>
    </button>
  );
}
