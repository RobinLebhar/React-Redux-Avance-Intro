import Header from '../containers/header';
import React, { Component } from 'react'
import TodoApp from "./todo-app"
require("../style.css");
export default class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <div className="container body_content">
          <TodoApp />
        </div>
      </div >
    )
  }
}