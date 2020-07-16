/** @jsx jsx */
import React from "react";
import { jsx, Box } from "theme-ui";
import Output from "./PatternOutput";
import Illustration from "./PatternIllustration";
import { calculateHeight } from "../helpers/calculateHeight";
import { calculateWidth } from "../helpers/calculateWidth";

export default class Canvas extends React.Component {
  render() {
    const dimensions = {
      height: calculateHeight({
        allowance: this.props.allowance,
        closure: this.props.closure,
        height: this.props.height,
        webbing: this.props.webbing,
      }),
      width: calculateWidth({
        allowance: this.props.allowance,
        fold: this.props.fold,
        width: this.props.width,
      }),
    };

    return (
      <React.Fragment>
        <Illustration
          allowance={this.props.allowance}
          closure={this.props.closure}
          fold={this.props.fold}
          height={dimensions.height}
          webbing={this.props.webbing}
          width={dimensions.width}
        />
        <Output
          allowance={this.props.allowance}
          closure={this.props.closure}
          fold={this.props.fold}
          height={dimensions.height}
          webbing={this.props.webbing}
          width={dimensions.width}
        />
      </React.Fragment>
    );
  }
}
