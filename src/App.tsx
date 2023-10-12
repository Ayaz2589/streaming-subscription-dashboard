import { useEffect } from "react";
import {
  createPersonalInformation,
  createMovieDetailsInformation,
  createStreamingInformtion,
} from "./db/utils/dummyDataUtils/index";

function App() {
  useEffect(() => {
    // createPersonalInformation();
    // createMovieDetailsInformation();
    createStreamingInformtion();
  }, []);

  return <>Hello</>;
}

export default App;
