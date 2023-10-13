import { useEffect } from "react";
import { createDummyDataJSON } from "./db/utils/dummyDataUtils/index";

function App() {
  useEffect(() => {
    const getData = async () => {
      const response = await createDummyDataJSON();
      const data = JSON.parse(response);
      console.log(data);
    };
    getData();
  }, []);

  return <>Hello</>;
}

export default App;
