import MovieVideos from "../../../../components/movie-videos";
import MovieInfo from "../../../../components/movie-info";
import { Suspense } from "react";

export default async function MovieDetail({params: {id }}: {params: {id: string}}) {
  return (
    <div>
      <h1>Movie detail page</h1>
      <Suspense fallback={<h1>Lading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Lading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  )
}