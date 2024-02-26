import React from "react";
import Typed from "typed.js";

class Typing extends React.Component {
  private typed: Typed | undefined;

  componentDidMount() {
    this.typed = new Typed(".typing", {
      strings: ["Front-End Developer", "Programmer", "Mechanical Engineer"],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    });
  }

  componentWillUnmount() {
    if (this.typed) {
      this.typed.destroy();
    }
  }

  render() {
    return <span className="typing text-skin-color">...</span>;
  }
}

export default Typing;
