import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";
import { dummyTrailers } from "../assets/assets";
import ReactPlayer from "react-player";
import { PlayCircleIcon } from "lucide-react";

const UpcomingReleases = () => {
  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

    const fetchUpcomingReleases = async () => {
      try {
        const { data } = await axios.get("/api/movies/releases");
        setReleases(data.releases);
      } catch (error) {
        console.error("Error fetching upcoming releases:", error);
      } finally {
        setLoading(false);
      }
    };
    
  useEffect(() => {
    fetchUpcomingReleases();
  }, []);

  return (
    <div className="upcoming ">
      {/* Trailer rendering section */}
      <div className="px-6  lg:px-24 py-20 overflow-hidden">
        <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
          <h1 className="text-2xl font-medium my-4 text-primary ">Upcoming Releases</h1>
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 mx-auto">
          <div className="relative mt-6">
            <ReactPlayer
              src={currentTrailer.videoUrl}
              controls={false}
              className="w-full mx-auto rounded-lg group-hover:opacity-50 hover:opacity-100 
                   hover:-translate-y-1"
              width="900px"
              height="540px"
            />
          </div>
          <div className="flex flex-col gap-4">
          {dummyTrailers.map((trailer) => (
            <div
              key={trailer.image}
              className="relative group-hover:opacity-50 hover:opacity-100 
                   hover:-translate-y-1 duration-300 transition 
                   max-md:h-60 md:max-h-60 cursor-pointer w-[200px] h-[120px] object-cover rounded-lg"
              onClick={() => setCurrentTrailer(trailer)}
            >
              <img
                src={trailer.image}
                alt="trailer"
                className="rounded-lg w-full h-full object-cover brightness-75"
              />
              <PlayCircleIcon
                strokeWidth={1.6}
                className="absolute top-1/2 left-1/2 w-5 md:w-8 h-5 md:h-12 
                     transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingReleases;
