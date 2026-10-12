import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";

export function FavoritesBadge({ watchedMovie, updateWatch }) {
  return (
    <button
      onClick={updateWatch}
      disabled={watchedMovie}
      className={`absolute top-2 left-4 z-10 transition-opacity ${
        watchedMovie
          ? "opacity-100"
          : "opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
      }`}
    >
      <Badge>
        <Heart className={watchedMovie ? "fill-white" : ""} />
      </Badge>
    </button>
  );
}
