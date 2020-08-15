import React, { Component } from "react";

export class MyErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.hasError) {
      return <h1>Opps Something went wrong try afer a few hours</h1>;
    }
    return this.props.children;
  }
}

export default MyErrorBoundary;
