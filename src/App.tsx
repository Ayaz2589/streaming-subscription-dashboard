import { Box, CircularProgress } from "@mui/material";

import { useFetch } from "./hooks";

function App() {
  const { data, loading, error } = useFetch();
  console.log({ data, loading, error });
  return loading ? <CircularProgress /> : <Box>Hello World</Box>;
}

export default App;
