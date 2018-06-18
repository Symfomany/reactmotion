import React, { Component } from "react";
import { TweenMax, TweenLite, Elastic } from "gsap/TweenMax";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    TweenMax.to(this.box, 2, {
      x: 100,
      opacity: 1,
      delay: 2,
      ease: Elastic.easeOut
    });
  }

  render() {
    return (
      <div>
        <h3>Page Home</h3>
        <p>Hello Wilders ReactJS 🤩</p>
        <div
          ref={box => (this.box = box)}
          style={{
            opacity: 0,
            background: "purple",
            padding: 10,
            width: 300,
            height: 300
          }}
        />
      </div>
    );
  }
}

export default Home;
