import React, { Component } from "react";

import "./Model.css";
import ThreeJsEntry from "./ThreeJs/ThreeJsEntry";

export default class SkeletonBVH extends Component {
  componentDidMount() {
    ThreeJsEntry(this.threeRootElement);
  }

  render() {
    return <div ref={element => (this.threeRootElement = element)} />;
  }
}
