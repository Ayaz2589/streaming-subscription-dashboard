import {
  initialState,
  DashboardContextProvider,
} from "./context/DashboardContext";
import { Main } from "./Components";

function App() {
  return (
    <div style={{ margin: 0 }}>
      <DashboardContextProvider data={initialState.data}>
        <Main />
      </DashboardContextProvider>
    </div>
  );
}

export default App;
