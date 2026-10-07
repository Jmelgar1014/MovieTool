import { Card, CardContent } from "@/components/ui/card";

export function MovieCards({ title, format, genre, posterPath }) {
  return (
    <Card className="min-w-2xs sm:min-w-0 max-w-2xs h-96 hover:border hover:border-primary">
      <CardContent>
        <p className="">{title}</p>
        <p>{format}</p>
        <p>{genre}</p>
        <img src={posterPath} />
      </CardContent>
    </Card>
  );
}
