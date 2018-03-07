import React, { Component } from "react";
import "./index.css";

export class ContentContainer extends Component {
  render() {
    return (
      <div className="TextImageContainer">
        <div className="SubContainer">{this.props.leftContent}</div>
        <div className="Separator" />
        <div className="SubContainer">{this.props.rightContent}</div>
      </div>
    );
  }
}
