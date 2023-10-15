import { useFetch } from "./hooks";

function App() {
  const { data } = useFetch();
  console.log(data);
  return <>Hello</>;
}

export default App;
