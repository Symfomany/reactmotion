import React, { Component } from "react";
import { TweenMax, TweenLite, Elastic } from "gsap/TweenMax";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    TweenMax.to(this.box, 3, {
      x: 100,
      opacity: 1,
      delay: 1,
      ease: Elastic.easeOut
    });
  }

  componentWillUnmount() {
    TweenMax.from(this.box, 3, {
      x: 100,
      opacity: 1,
      delay: 1,
      ease: Elastic.easeOut
    });
  }

  render() {
    return (
      <div
        ref={box => (this.box = box)}
        style={{
          opacity: 0,
          background: "purple",
          padding: 10,
          width: "30%",
          height: 200
        }}
      />
    );
  }
}

export default Box;
