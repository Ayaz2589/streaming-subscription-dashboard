import { useEffect } from "react";
import { createPersonalInformation } from "./db/utils/dummyDataUtils/index";

function App() {
  useEffect(() => {
    createPersonalInformation();
  }, []);

  return <>Hello</>;
}

export default App;
