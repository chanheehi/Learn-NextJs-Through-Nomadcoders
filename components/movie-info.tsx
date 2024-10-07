import style from "../styles/movie-info.module.css";
import { API_URL } from "../app/contants";
import Link from 'next/link';

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();
  return data;
}
  
  
export default async function MovieInfo({id}: {id: string}) {
  const movie = await getMovie(id);

  return (
    <div className={style.container}>
      <img src={movie.poster_path} className={style.poster} alt={movie.title} />
      <div>
        <h1 className={style.title}>{movie.title}</h1>
        <h3 className={style.vote_average}>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  )
}