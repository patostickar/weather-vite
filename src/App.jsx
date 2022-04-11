import "./App.css";

import { Route } from "react-router-dom";

import Nav from "./components/Nav.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Cards from "./components/Cards.jsx";
import Ciudad from "./components/Ciudad";
import About from "./components/About";

function App() {
  return (
    <div className="app">
      <Nav />
      <Route path="/" exact component={Cards} />
      <Route path="/ciudad/:ciudadId" exact component={Ciudad} />
      <Route path="/about" exact component={About} />
    </div>
  );
}

export default App;
