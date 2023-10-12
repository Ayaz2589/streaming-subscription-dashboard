import { useEffect } from "react";
import {
  createPersonalInformation,
  createMovieDetailsInformation,
} from "./db/utils/dummyDataUtils/index";

function App() {
  useEffect(() => {
    // createPersonalInformation();
    createMovieDetailsInformation();
  }, []);

  return <>Hello</>;
}

export default App;
