import React, { ReactElement } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import "./theme/app.scss";

class App extends React.Component {
  render(): ReactElement {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/:forestId" component={DetailPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
