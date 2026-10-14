import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export function WatchedBadge({ watchedMovie, markWatched }) {
  return (
    <div>
      <button
        onClick={markWatched}
        className={`absolute top-10 left-4 z-10 transition-opacity ${
          watchedMovie
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
        }`}
      >
        <Badge>
          <Check className={watchedMovie ? "text-green-500" : ""} />
        </Badge>
      </button>
    </div>
  );
}
