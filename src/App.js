import React from "react";
import { HashRouter, Route } from "react-router-dom"; //react-router-dom에 있는 라우터 중에 hashRaoute, Route를 사용
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    //exact 이 url만 허용한다. /about은 X.  Link가 있는 component는 라우터안에서 사용.
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
