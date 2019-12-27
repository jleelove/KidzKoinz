import React, { Component } from "react";

class BackgroundComponent extends Component {
  render() {
    const bgStyle = {
      top: "0",
      left: "0",
      zIndex: "-1",
      backgroundImage: `url(${this.props.imageUrl})`,
      backgroundPosition: "50% 50%",
      backgroundSize: "cover",
      width: "100%",
      height: "100%",
      position: "absolute"
    };
    return <div style={bgStyle}></div>;
  }
}

export default BackgroundComponent;
