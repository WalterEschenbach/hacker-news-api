import React from "react";
import Theme from "./theme";

class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.click}>New</button>
        <button onClick={this.props.click}>Top</button>
        <Theme />
      </React.Fragment>
    );
  }
}

export default Nav;
