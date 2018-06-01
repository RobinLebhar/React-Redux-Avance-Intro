import Header from '../containers/header';
import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Home from "../components/home";
import TodoApp from "./todo-app"
import requireAuth from '../helpers/require-authentification';
require("../style.css");
export default class App extends Component {
  render() {
    return (
      <div>
        < Header />
        <div className="container body_content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ressources" component={requireAuth(TodoApp)} />
          </Switch>
        </div>
      </div>
    );
  }
}

