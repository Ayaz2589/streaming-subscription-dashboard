import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Header } from "./Components";

import { useFetch } from "./hooks";

function App() {
  // const { data, loading, error } = useFetch();

  return (
    <div style={{ margin: 0 }}>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <SideNave />
        </Grid>
        <Grid item xs={10}>
          <Content />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

const SideNave = () => (
  <Box sx={{ width: "100%", height: "91vh", backgroundColor: "pink" }}></Box>
);

const Content = () => (
  <Box
    sx={{ width: "100%", height: "91vh", backgroundColor: "lightblue" }}
  ></Box>
);

