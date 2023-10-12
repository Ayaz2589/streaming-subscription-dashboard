import { MovieAPIRequest, Movie } from "./types";

const url =
  "https://moviesdatabase.p.rapidapi.com/titles?list=top_rated_lowest_100&startYear=2000&endYear=2023&limit=30";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "pMOBWm9PU0mshtIJr3GSvm0K3xS4p1fI5AcjsnrbdPHbr5XSsI",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

const lorumIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";

const createMovie = (movie: MovieAPIRequest): Movie => {
  return {
    id: movie._id,
    title: movie.titleText.text,
    releaseYear: movie.releaseYear.year,
    releaseDate: `${movie.releaseDate.day}/${movie.releaseDate.month}/${movie.releaseDate.year}`,
    primaryImage: movie.primaryImage.url,
    originalTitle: movie.originalTitleText.text,
    description: lorumIpsum,
    runtimeMinutes: generateRandomRuntimeMinutes(),
    streaming_information: generateStreamingInformation(),
    isFavorite: randomBool(),
  };
};

const generateRandomRuntimeMinutes = (min = 100, max = 180) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateStreamingInformation = () => {
  const hasStarted = randomBool();
  let hasEnded;

  hasStarted ? (hasEnded = randomBool()) : (hasEnded = false);

  return { hasStarted, hasEnded };
};

const randomBool = () => Math.random() > 0.5 ? true : false;

const createMovieDetailsInformation = async () => {
  try {
    const response = await fetch(url, options);
    const { results } = await response.json();
    if (results?.length) {
      const formattedMovieObject: Movie = results.map(
        (movie: MovieAPIRequest) => createMovie(movie)
      );
      console.log(formattedMovieObject);
      return formattedMovieObject;
    }
  } catch (error) {
    console.log(error);
  }
};

export default createMovieDetailsInformation;
