import MovieVideos from "../../../../components/movie-videos";
import MovieInfo, { getMovie } from "@/components/movie-info";
import { Suspense } from "react";

interface IParams {
  params: {id: string};
}

export async function generateMetadata({params: {id}}: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({params: {id }}: {params: {id: string}}) {
  return (
    <div>
      <Suspense fallback={<h1>Lading movie info</h1>}>
        <a><MovieInfo id={id} /></a>
      </Suspense>
      <Suspense fallback={<h1>Lading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  )
}