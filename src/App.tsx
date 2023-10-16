import { ResponsiveDrawer } from "./Components";

import { useFetch } from "./hooks";

function App() {
  // const { data, loading, error } = useFetch();

  return (
    <div style={{ margin: 0 }}>
      <ResponsiveDrawer />
    </div>
  );
}

export default App;

