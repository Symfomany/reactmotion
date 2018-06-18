import React, { Component } from "react";
import { Transition, animated } from "react-spring";
import { Bounce } from "gsap/EasePack";
import "./Liste.css";
class Liste extends Component {
  constructor(props) {
    super(props);
    this.state = { items: ["item1", "item2", "item3"], index: 0 };
    this.add = this.add.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    this.setState(state => ({
      index: state.index === 2 ? 0 : state.index + 1
    }));
  }

  add() {
    this.setState({
      items: [...this.state.items, ...[Math.floor(Math.random() * 1000)]]
    });
  }

  removeItem(item) {
    const tab = [...this.state.items].filter(elt => elt !== item);
    this.setState({
      items: tab
    });
  }

  componentDidMount() {}

  render() {
    const defaultStyles = {
      overflow: "hidden",
      width: "100%",
      backgroundColor: "#247BA0",
      color: "white",
      display: "flex",
      justifyContent: "center",
      fontSize: "4em"
    };

    const style = {
      cursor: "pointer",
      position: "absolute",
      width: "100%",
      height: "500px",
      display: "flex",
      alignItems: "center",
      color: "white",
      willChange: "transform, opacity"
    };

    const pages = [
      style => (
        <animated.div style={{ ...style, background: "#247BA0" }}>
          A
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style, background: "#B2DBBF" }}>
          B
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style, background: "#12DBBF" }}>
          C
        </animated.div>
      )
    ];

    return (
      <div>
        <Transition
          native
          keys={this.state.items}
          from={{ opacity: 0, height: 0 }}
          enter={{ opacity: 1, height: 100 }}
          leave={{ opacity: 0, height: 0 }}
        >
          {this.state.items.map((item, index) => styles => (
            <animated.li style={{ ...defaultStyles, ...styles }}>
              <div>
                {item}
                <button onClick={() => this.removeItem(item)}>X</button>
              </div>
            </animated.li>
          ))}
        </Transition>

        <button onClick={this.add}>Ajouter 1</button>

        <div className="main" onClick={this.toggle}>
          <Transition
            native
            from={{ opacity: 0, transform: "translate3d(100%,0,0)" }}
            enter={{ opacity: 1, transform: "translate3d(0%,0,0)" }}
            leave={{ opacity: 0, transform: "translate3d(-50%,0,0)" }}
          >
            {pages[this.state.index]}
          </Transition>
        </div>
      </div>
    );
  }
}

export default Liste;
