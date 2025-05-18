import React, { JSX } from "react";
import { Button } from "react-bootstrap";
import "./weel.css";
import { WeelState } from "../../../types/weel.type";
import { setSpinning } from "../../../store/slices/rouletteGame.slice";
import { store } from "../../../store/store";

// Define interfaces for props and state

interface WeelProps {
  updateNum: (num: string) => void;
}

class Weel extends React.Component<WeelProps, WeelState> {
  private spinTimer: NodeJS.Timeout | null;
  private baseSize: number;
  private canvasRef: React.RefObject<HTMLCanvasElement | null>; // New ref object

  constructor(props: WeelProps) {
    super(props);
    this.state = {
      spinAngleStart: Math.random() * 10 + 10,
      spinTimeTotal: (Math.random() * 3 + 4) * 1000,
      startAngle: 0,
      spinTime: 0,
      arc: Math.PI / (store.getState().blocks.blocks.length / 2),
      text: "",
    };
    this.spinTimer = null;
    this.baseSize = 200;
    this.canvasRef = React.createRef<HTMLCanvasElement>();
    this.handleOnClick = this.handleOnClick.bind(this);
    this.spin = this.spin.bind(this);
    this.rotate = this.rotate.bind(this);
  }

  componentDidMount(): void {
    this.drawRouletteWheel();
  }

  componentWillUnmount(): void {
    console.log("componentWillUnmount");
    this.stopRotateWheel();
  }

  drawRouletteWheel(): void {
    const baseSize = this.baseSize;
    const { startAngle, arc } = this.state;
    let ctx: CanvasRenderingContext2D | null;
    const canvas = this.canvasRef.current; // Use .current to access the ref value

    if (canvas && canvas.getContext) {
      const outsideRadius = baseSize - 25;
      const textRadius = baseSize - 45;
      const insideRadius = baseSize - 85;
      // const innderOutline = baseSize - 125; // Note: unused variable

      ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.font = "14px Helvetica, Arial";
      for (let i = 0; i < store.getState().blocks.blocks.length; i++) {
        const angle = startAngle + i * arc;
        ctx.fillStyle = store.getState().blocks.blocks[i].blockColor;
        ctx.beginPath();
        ctx.arc(baseSize, baseSize, outsideRadius, angle, angle + arc, false);
        ctx.arc(baseSize, baseSize, insideRadius, angle + arc, angle, true);
        ctx.fill();
        ctx.save();
        ctx.fillStyle = "white";
        ctx.translate(
          baseSize + Math.cos(angle + arc / 2) * textRadius,
          baseSize + Math.sin(angle + arc / 2) * textRadius
        );
        ctx.rotate(angle + arc / 2 + Math.PI / 2);
        const text = store.getState().blocks.blocks[i].blockDisplayValue;
        ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
        ctx.restore();
      }
      //Arrow
      ctx.strokeStyle = "yellow"; //arrow
      ctx.lineWidth = 2; //arrow
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.lineTo(baseSize + 10, baseSize - (outsideRadius + 20));
      ctx.lineTo(baseSize + 0, baseSize - (outsideRadius - 5));
      ctx.lineTo(baseSize - 10, baseSize - (outsideRadius + 20));
      ctx.fill();
      ctx.stroke();
    }
  }

  spin(): void {
    this.spinTimer = null;
    this.setState({ spinTime: 0 }, () => this.rotate());
  }

  rotate(): void {
    const { spinAngleStart, spinTime, startAngle, spinTimeTotal } = this.state;
    if (spinTime > 2800) {
      if (this.spinTimer) clearTimeout(this.spinTimer);
      this.stopRotateWheel();
    } else {
      const spinAngle =
        spinAngleStart -
        this.easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
      this.setState(
        {
          startAngle: startAngle + (spinAngle * Math.PI) / 180,
          spinTime: spinTime + 10,
        },
        () => {
          this.drawRouletteWheel();
          if (this.spinTimer) clearTimeout(this.spinTimer);
          this.spinTimer = setTimeout(() => this.rotate(), 30);
        }
      );
    }
  }

  stopRotateWheel(): void {
    const { startAngle, arc } = this.state;
    const canvas = this.canvasRef.current; // Use .current to access the ref value

    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const degrees = (startAngle * 180) / Math.PI + 90;
    const arcd = (arc * 180) / Math.PI;
    const index = Math.floor((360 - (degrees % 360)) / arcd);
    ctx.save();
    const text = store.getState().blocks.blocks[index].blockDisplayValue;
    console.log("setting text", text);
    console.log("spiinning", store.getState().rouletterGame.spinning);
    if (store.getState().rouletterGame.spinning) {
      this.setState({ text });
      store.dispatch(setSpinning(false));
    }

    ctx.restore();
    this.props.updateNum(this.state.text);
  }

  easeOut(t: number, b: number, c: number, d: number): number {
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
  }

  handleOnClick(): void {
    this.spin();
    console.log("clicked");
    store.dispatch(setSpinning(true));
    // this.props.isSpinning(true);
  }

  SpinButton(): JSX.Element {
    return (
      <div>
        <input
          type="button"
          value="spin"
          className="btn btn-primary p-2 m-2"
          id="spin"
          onClick={this.handleOnClick}
        />
      </div>
    );
  }

  renderNumber = (): JSX.Element => {
    return (
      <h1 className="blinky-number display-4 pt-1 m-0">{this.state.text}</h1>
    );
  };

  renderBtnText = (): JSX.Element => {
    if (this.state.text !== "") {
      return <div>{this.renderNumber()}</div>;
    } else {
      return (
        <h6 className="blink text-uppercase m-0">
          Put your bets and spin the weel!
        </h6>
      );
    }
  };

  render(): JSX.Element {
    console.log("renderNumber", this.state.text);

    return (
      <React.Fragment>
        <div className="roulette-container align-self-start">
          <canvas
            ref={this.canvasRef} // Use the ref object here instead of string ref
            width={this.baseSize * 2}
            height={this.baseSize * 2}
            className="roulette-canvas"
          ></canvas>
          {store.getState().bets.selctedBets.length !== 0 ? (
            <div className="d-grid gap-2">
              <Button
                onClick={this.handleOnClick}
                className="m-2 spin-button"
                size="lg"
                variant="danger"
              >
                <h5 className="blink text-uppercase m-0">Spin the weel!</h5>
              </Button>
            </div>
          ) : (
            <div className="d-grid gap-2">
              <Button
                className="m-2 spin-button text-small"
                size="lg"
                variant="dark"
              >
                {this.renderBtnText()}
              </Button>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

// export default Weel;

// Map Redux state to component props
export default Weel;
