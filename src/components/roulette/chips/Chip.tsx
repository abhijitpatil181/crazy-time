import React, { JSX } from "react";
import "./Chip.css";

// Define interface for the Chip component props
interface ChipProps {
  id: string | string[];
  active: boolean | undefined;
  currentBet: number | undefined;
}

class Chip extends React.Component<ChipProps> {
  componentDidUpdate() {
    console.log("Chip props", this.props);
  }
  render(): JSX.Element {
    if (this.props.active) {
      return (
        <div className="chip d-inline-block" id={this.props.id as string}>
          {this.props.currentBet}
        </div>
      );
    } else {
      return <div>{this.props.id}</div>;
    }
  }
}

export default Chip;
