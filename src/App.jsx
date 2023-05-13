import AppContext from "./context/AppContext";
import Route from "./routes/Route";
function App() {
  return (
    <AppContext>
      <Route />
    </AppContext>
  );
}

export default App;
