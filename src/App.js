import "./App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import { Grid } from "@mui/material";
function App() {
  return (
    <div className="App">
      <Header />
      <Grid className="container">
        <LandingPage />
      </Grid>
    </div>
  );
}

export default App;
