import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { BrowserRouter, Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { Header, Footer, Sidebar, Page } from "./components";
import { BasicLayout } from "./containers";
import { fetchSchoolData } from './actions/schoolsActions';

import "./styles/styles.scss";

const store = configureStore();

const nodeToMount = document.getElementById("app");

const history = createHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <BrowserRouter>
            <BasicLayout />
          </BrowserRouter>
        </Router>
      </Provider>      
    );
  }
}

ReactDOM.render(<App />, nodeToMount);

store.dispatch(fetchSchoolData())