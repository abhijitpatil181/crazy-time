import React, { JSX } from "react";
import "./Chip.css";

// Define interface for the Chip component props
interface ChipProps {
  id: string | string[];
  active: boolean | undefined;
}

class Chip extends React.Component<ChipProps> {
  render(): JSX.Element {
    if (this.props.active) {
      return (
        <div className="chip d-inline-block" id={this.props.id as string}>
          10
        </div>
      );
    } else {
      return <div>{this.props.id}</div>;
    }
  }
}

export default Chip;
