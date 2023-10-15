import { useFetch } from "./hooks";

function App() {
  const { data, loading, error } = useFetch();
  console.log({ data, loading, error });
  return <>Hello</>;
}

export default App;
