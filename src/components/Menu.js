import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>Menu</h3>
        <Link style={{ margin: "15px" }} to="/" className="btn btn-secondary">
          Home
        </Link>
        <Link
          style={{ margin: "15px" }}
          to="/contact"
          className="btn btn-secondary"
        >
          Contact
        </Link>
      </div>
    );
  }
}

export default Menu;
