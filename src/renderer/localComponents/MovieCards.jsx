import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { FavoritesBadge } from "./FavoritesBadge";

export function MovieCards({
  title,
  format,
  posterPath,
  favoriteMovie,
  updateFavorite,
}) {
  return (
    <Card className="min-w-2xs sm:min-w-0 max-w-2xs h-96 hover:border hover:border-primary p-0 gap-0 relative group">
      <CardContent className="p-0">
        <FavoritesBadge
          favoriteMovie={favoriteMovie}
          updateFavorite={updateFavorite}
        />
        <img className="h-72 w-full" src={posterPath} />
      </CardContent>
      <CardFooter className="h-full flex flex-col items-start pt-1">
        <p className="my-1">{title}</p>
        <p>{format}</p>
      </CardFooter>
    </Card>
  );
}
