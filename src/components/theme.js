import React from "react";

class Theme extends React.Component {
  render() {
    return <button onClick={this.props.click}>Mode</button>;
  }
}

export default Theme;
