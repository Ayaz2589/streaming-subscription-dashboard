import { useFetch } from "./hooks";

function App() {
  const { data } = useFetch();
  return <>Hello</>;
}

export default App;
