import React, { Component } from "react";
import { BrowserRouter, StaticRouter, Route, Link } from "react-router-dom";
import axios from "axios";
import DailyPage from "./DailyPage";

axios.defaults.baseURL = "https://us-central1-dailies-f17d7.cloudfunctions.net";

const DailyPageWrapper = ({ match }) => {
  return <DailyPage dailyId={match.params.dailyId} />;
};

const Router = props => {
  if (typeof window !== "undefined") {
    return <BrowserRouter>{props.children}</BrowserRouter>;
  } else {
    return (
      <StaticRouter location={props.path} context={{}}>
        {props.children}
      </StaticRouter>
    );
  }
};

class App extends React.Component {
  render() {
    return (
      <Router path={this.props.path}>
        <div>
          <Route exact path="/" component={DailyPage} />
          <Route path="/:dailyId" component={DailyPageWrapper} />
        </div>
      </Router>
    );
  }
}

export default App;
