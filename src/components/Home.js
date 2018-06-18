import React, { Component } from "react";
import Box from "./Box";
import Liste from "./Liste";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.handleVisible = this.handleVisible.bind(this);
  }

  handleVisible() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <div>
        <h3>Page Home</h3>
        <p>Hello Wilders ReactJS 🤩</p>
        <button onClick={this.handleVisible}>Cliquez-moi</button>
        {this.state.visible ? <Box /> : null}
        <Liste />
      </div>
    );
  }
}

export default Home;
