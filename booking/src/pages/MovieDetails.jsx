import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { StarIcon } from 'lucide-react'
import { dummyShowsData, dummyDateTimeData } from "../assets/assets"
import timeFormat from "../lib/timeFormat"

const MovieDetails = () => {
  const { id } = useParams()
  const [show, setShow] = useState(null)

const getShow = async () => {
  console.log("ID from URL:", id);
  const show = dummyShowsData.find((show) => show._id === id.toString());
  console.log("Found show:", show);
  setShow({
    movie: show,
    dateTime: dummyDateTimeData,
  });
};
  
  useEffect(() => {
    getShow()
  }, [id])

  if (!show) return <div className="text-center text-gray-400">Loading...</div>
  if (!show?.movie) return <div className="text-center text-gray-400">Movie not found</div>;
  return (  
    <div className="p-6">
      {/* Poster + Title */}
      <h1 className="text-3xl font-bold text-white">{show.movie.title}</h1>

      {/* Rating */}
      <div className="flex items-center gap-2 text-gray-300 mt-2">
        <StarIcon className="w-5 h-5 text-primary fill-primary" />
        {show.movie.vote_average.toFixed(1)} User Rating
      </div>

      {/* Overview */}
      <p className="text-gray-400 mt-2 text-sm leading-tight max-w-xl">
        {show.movie.overview}
      </p>

      {/* Runtime - Genres - Year */}
      <p className="text-gray-300 mt-3 text-sm">
        {timeFormat(show.movie.runtime)} •{" "}
        {show.movie.genres.map((genre) => genre.name).join(", ")} •{" "}
        {show.movie.release_date.split("-")[0]}
      </p>
    </div>
  )
}


export default MovieDetails
