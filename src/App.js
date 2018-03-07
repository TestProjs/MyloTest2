import React, { Component } from "react";
import logo from "./assets/mylo-logo.png";
import topBG from "./assets/top-bg.jpg";
import ImageBrain from "./assets/brain.svg";
import ImageShield from "./assets/shield.svg";
import styled from "styled-components";

import "./App.css";
import "./index.css";

class ContentContainer extends Component {
  render() {
    return (
      <div className="TextImageContainer">
        <div className="ContainerTest">{this.props.leftContent}</div>
        <div className="Separator" />
        <div className="ContainerTest">{this.props.rightContent}</div>
      </div>
    );
  }
}

class App extends Component {
  createFirstText = () => {
    return (
      <div className="FirstText">
        <div className="TextTitle">Achieve more. Live more.</div>
        <p className="TextContent">
          Mylo AI provides personalized insights so you can make better
          financial decisions. Plug in, sit back and relax. It’s time to
          download Mylo.
        </p>
      </div>
    );
  };

  createSecondText = () => {
    return (
      <div className="SecondText">
        <div className="TextTitle">Security by design</div>
        <p className="TextContent">
          We've implemented the same security measures as all major Canadian
          banks. We use 256-bit encryption, secure SSL connections and
          bank-level security protocols so that your information is never at
          risk. Your peace of mind is our priority.
        </p>
      </div>
    );
  };

  render() {
    return (
      <div className="App">
        <div className="LogoContainer">
          <img className="MyloLogo" src={logo} alt="logo" />
        </div>
        <div>
          <div className="ImgTopBackground" />
          <img className="TopImage" src={topBG} alt="logo" />
          <div className="TextContainer">
            <p className="TitleText">
              Achieving your financial goals is possible
            </p>
          </div>
        </div>

        <div className="TestCont">
          <ContentContainer
            leftContent={this.createFirstText()}
            rightContent={<img className="ImgBrain" src={ImageBrain} />}
          />
        </div>
        <div className="TestCont">
          <ContentContainer
            leftContent={<img className="ImgShield" src={ImageShield} />}
            rightContent={this.createSecondText()}
          />
        </div>
      </div>
    );
  }
}

export default App;
