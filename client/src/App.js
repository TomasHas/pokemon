import "./App.css";
import Home from "./views/home/Home";
import { Route, useLocation } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Landing from "./views/landing/Landing";
import Detail from "./views/detail/Detail";
import Form from "./views/form/Form";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/landing" && <Navbar />}

      <Route exact path="/landing" render={() => <Landing />} />
      <Route exact path="/" render={() => <Home />} />
      <Route path="/pokemons/:id" render={() => <Detail />} />
      <Route path="/form" render={() => <Form />} />
    </div>
  );
}

export default App;
