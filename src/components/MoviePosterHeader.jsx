import AnimatedBackGround from "./AnimatedBackGround";

const MoviePosterHeader = ({
  posterUrl,
  title,
  year,
  rating,
  duration,
  ageRestriction,
  country,
}) => {
  return (
    <div
      className="relative w-full overflow-hidden rounded-b-lg
                   min-h-[50vh] max-h-[70vh] sm:min-h-[45vh] sm:max-h-[60vh] md:min-h-[40vh] md:max-h-[55vh] lg:min-h-[35vh] lg:max-h-[50vh]
                   flex flex-col justify-end"
    >
      <AnimatedBackGround imageUrl={posterUrl} />

      <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end text-white z-10">
        <div className="flex flex-col md:flex-row items-center md:items-end md:justify-start md:gap-x-6">
          <img
            src={posterUrl}
            className="w-36 h-auto mb-5 md:mb-0 md:w-48 lg:w-56 rounded-md shadow-lg"
            alt={title}
          />
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-x-2 text-sm sm:text-base font-semibold mb-2">
              <span className="bg-yellow-500 text-white px-2 py-0.5 rounded-md">
                IMDb {rating}
              </span>
              <span>{ageRestriction}</span>
              <span>{duration}</span>
              <span>{country}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-2 sm:mb-3">
              {title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100">
              {year}
            </p>
          </div>
        </div>

        <button className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base py-2 px-3 sm:px-4 rounded-full shadow-md transition duration-300">
          
        </button>
      </div>
    </div>
  );
};

export default MoviePosterHeader;
