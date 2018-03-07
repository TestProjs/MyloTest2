import React, { Component } from "react";
import logo from "./assets/mylo-logo.png";
import topBG from "./assets/top-bg.jpg";
import ImageBrain from "./assets/brain.svg";
import ImageShield from "./assets/shield.svg";
import { ContentContainer } from "./ContentContainer";

import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: window.screen.width };
  }
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.screen.width });
  };

  createFirstText = shouldRenderFullText => {
    var extraText = "";
    if (shouldRenderFullText) {
      extraText = "Plug in, sit back and relax. It’s time to download Mylo.";
    }
    return (
      <div className="FirstText">
        <div className="TextTitle">Achieve more. Live more.</div>
        <p className="TextContent">
          Mylo AI provides personalized insights so you can make better
          financial decisions. {extraText}
        </p>
      </div>
    );
  };

  createSecondText = shouldRenderFullText => {
    var extraText = "";
    if (shouldRenderFullText) {
      extraText = "Your peace of mind is our priority.";
    }
    return (
      <div className="SecondText">
        <div className="TextTitle">Security by design</div>
        <p className="TextContent">
          We've implemented the same security measures as all major Canadian
          banks. We use 256-bit encryption, secure SSL connections and
          bank-level security protocols so that your information is never at
          risk. {extraText}
        </p>
      </div>
    );
  };

  render() {
    const width = this.state.width != undefined ? this.state.width : 0;
    const isSmallerDevice = width <= 375;
    return (
      <div>
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

        <div className="BottomContainer">
          <div className="BottomSubContainer">
            <ContentContainer
              leftContent={this.createFirstText(!isSmallerDevice)}
              rightContent={<img className="ImgBrain" src={ImageBrain} />}
            />
          </div>
          <div className="SeparatorHorizontal" />
          <div className="BottomSubContainer">
            <ContentContainer
              leftContent={<img className="ImgShield" src={ImageShield} />}
              rightContent={this.createSecondText(!isSmallerDevice)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
