import React, { Component } from "react";
import { Fade } from "../styled/Fade";
import { TransitionGroup } from "react-transition-group";
import AppBar from "@material-ui/core/AppBar";
// Example: https://stackblitz.com/edit/01-styled-transition-group?file=index.js
// Example: https://stackblitz.com/edit/03-styled-transition-group?file=index.js
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      items: [
        "Je suis le premier",
        "Je suis le second",
        "Je suis le troisième",
        "Je suis le quatrieme"
      ]
    };
    this.changer = this.changer.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }
  onRemove(i) {
    const items = this.state.items.slice();
    items.splice(i, 1);
    this.setState({ items });
  }
  onAdd() {
    console.log("laa");
    const items = [...this.state.items];
    items.push("Laaaaa");
    this.setState({ items });
  }
  changer() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.changer}>Cliquer moi</button>
        <TransitionGroup>
          {this.state.items.map((id, i) => (
            <Fade key={id} in={this.state.show} onClick={this.onRemove(i)}>
              Click to remove
            </Fade>
          ))}
        </TransitionGroup>
        <button onClick={this.onAdd}>Add an Item</button>
      </div>
    );
  }
}

export default App;
