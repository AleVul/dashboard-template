import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Layout from "../Layout";
import AboutPage from "../About";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <Layout>
          <Switch>
            <Route path="/about" component={AboutPage} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
