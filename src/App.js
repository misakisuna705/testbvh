import React, { Component } from "react";

import "./App.css";
import SkeletonBVH from "./App/Model/Model";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <SkeletonBVH />
      </div>
    );
  }
}
