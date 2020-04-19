import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./template/Header";
import Footer from "./template/Footer";
import Mainpage from "./pages/Mainpage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Api from "./pages/Api";
import Conditional from "./pages/Conditional";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

export default function App() {
  return (
    <div>
      {/* <Header />
      <Mainpage />      
      <Footer /> */}

      <Router history={history}>
        <div>
          <Header />

          <Switch>
            <Route exact path="/" component={Mainpage} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Api" component={Api} />
            <Route exact path="/Conditional" component={Conditional} />
          </Switch>
          <Footer name={"satheesh_data_probs"} />
        </div>
      </Router>
    </div>
  );
}
