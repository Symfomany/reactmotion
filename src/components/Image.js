import React, { Component } from "react";

import animations from "./animations";
class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    animations.show(this.img);
  }
  componentWillUnmount() {
    animations.hide(this.img);
  }
  render() {
    return (
      <div>
        <img
          ref={img => (this.img = img)}
          style={{ width: 500, height: 250 }}
          src="http://images.dinosaurpictures.org/velociraptor_12_c4fd.jpg"
        />
      </div>
    );
  }
}

export default Image;
