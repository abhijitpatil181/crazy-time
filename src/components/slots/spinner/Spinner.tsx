import { Component } from "react";
import { SpinnerProps, SpinnerState } from "../../../types/spinner.type";
import { Images } from "../../../constants/images";

export default class Spinner extends Component<SpinnerProps, SpinnerState> {
  private images: string[] = [...Images];
  private isSpinning: NodeJS.Timeout | undefined;
  state: SpinnerState = {
    spinning: false,
    wheels: [],
  };

  componentDidMount(): void {
    this.setState({
      wheels: [this.randomImage(), this.randomImage(), this.randomImage()],
    });
  }

  componentDidUpdate(prevProps: SpinnerProps, prevState: SpinnerState): void {
    const { spinning } = this.state;

    if (spinning && spinning !== prevState.spinning) {
      this.tick();
    }

    if (!spinning && spinning !== prevState.spinning) {
      clearInterval(this.isSpinning);
      this.props.onStop(this.state.wheels);
    }
  }

  randomImage(): string {
    return this.images[Math.floor(Math.random() * this.images.length)];
  }

  spin(): void {
    this.setState({
      wheels: [this.randomImage(), this.randomImage(), this.randomImage()],
    });
  }

  tick(): void {
    this.isSpinning = setInterval(this.spin, 75);
  }
}
