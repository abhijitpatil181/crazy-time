import React, { JSX } from "react";
import "./RouletteTable.css";
import Chip from "../chips/Chip";
// import { Overlay, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { RouletteTableProps } from "../../../types/roulette.type";
import { Row } from "../../../types/row.type";
import { store } from "../../../store/store";

interface RouletteTableState {
  /* JSONS ROWS */
  firstRow: Row[];
  firstBorder: Row[];
  secondRow: Row[];
  secondBorder: Row[];
  thirdRow: Row[];
  thirdBorder: Row[];
  fourthRow: Row[];
  // fifthRow: Row[];
  columnLeft: Row[];
  columnRight: Row[];
  /* END JSONS ROWS */
  disabled: boolean;
  coins?: number;
  tableBlocks: Row[];
}

class RouletteTable extends React.Component<
  RouletteTableProps,
  RouletteTableState
> {
  constructor(props: RouletteTableProps) {
    super(props);
    this.state = {
      /* JSONS ROWS */
      firstRow: this.props.firstRow,
      firstBorder: this.props.firstBorder,
      secondRow: this.props.secondRow,
      secondBorder: this.props.secondBorder,
      thirdRow: this.props.thirdRow,
      thirdBorder: this.props.thirdBorder,
      fourthRow: this.props.fourthRow,
      // fifthRow: this.props.fifthRow,
      columnLeft: this.props.columnLeft,
      columnRight: this.props.columnRight,
      disabled: false,
      /* END JSONS ROWS */
      tableBlocks: store.getState().tableBlocks.tableBlocks,
    };
  }

  disableTable = (): void => {
    if (this.props.spinning) {
      this.setState({ disabled: true });
    } else {
      this.setState({ disabled: false });
    }
  };

  //SELECTING BETS
  numsSelectionHandler = (
    num: string | string[],
    whichRow: keyof RouletteTableState
  ): void => {
    const currentSelectedBet = store.getState().bets.currentBet;
    //checking if my props.arr is empty, if it is, leave empty, if it is not, spread it
    const nums = this.props.arr.length === 0 ? [] : [...this.props.arr];

    //saving in a variable the row from state with that name
    const row = [...(this.state[whichRow] as Row[])];

    //variable for coins
    let coins: number = this.props.coins;

    //checking if my winner number is presented in the array

    /* BETS DESELECT HANDLING STARTS */

    if (nums.indexOf(num) >= 0) {
      //if number is present in array, deselect and remove it from array
      nums.splice(nums.indexOf(num), 1);

      //giving back coins i bet on this number
      coins = this.props.coins + this.props.chip;

      //tricky part: map each of the rows and check if chip is vivible, if it is, remove it
      const updatedRow = row.map((chip) => {
        if (chip.n == num) {
          // chip.visible = false; // remove the chip
          // chip.bet = 0; // remove the bet
          return { ...chip, visible: false, bet: 0 }; // create new object
        }
        return chip;
      });

      this.props.updateRow(whichRow, updatedRow); //passing back to Roulette.js component updated props

      this.setState({ [whichRow]: updatedRow } as unknown as Pick<
        RouletteTableState,
        keyof RouletteTableState
      >); //setting the new state with removed chips from the rows

      /* BETS DESELECT HANDLING ENDS */

      /* BETS SELECT HANDLING START */
    } else if (nums.indexOf(num) === -1) {
      //if number is NOT present in array, select it and put the chip on it
      //decrementing coins
      coins = this.props.coins - this.props.chip;

      nums.push(num); //adding selected number to the array of bets

      //tricky part inverted: map each of the rows and check if chip is vivible, if it is NOT, add it
      const updatedRow = row.map((chip) => {
        if (chip.n == num) {
          return { ...chip, visible: true, bet: currentSelectedBet }; // create new object
        }
        return chip;
      });
      this.setState({ [whichRow]: updatedRow } as unknown as Pick<
        RouletteTableState,
        keyof RouletteTableState
      >); //setting the new state with added chips to the rows
    }

    //passing back to Roulette.js the updated array
    this.props.updateArr(nums);

    //passing back to Roulette.js updated coins count
    this.setState({ coins: coins }, () => {
      this.props.updateCoins(coins);
    });
  };

  render(): JSX.Element {
    //designing the whole table in pure CSS mapping JSON objects with numbers, borders etc.

    return (
      <React.Fragment>
        <div className="d-flex flex-row align-items-center roulette-table hidden">
          <div className="align-self-start">
            <div className="table-divider"></div>
            {/* First row */}
            {/* <ul className="d-flex list-unstyled" style={{ paddingLeft: "0px" }}>
              {this.state.firstRow.map((num, index) => (
                <button
                  key={`${num.n}-${index}-fr`}
                  className={num.className}
                  value={num.n}
                  onMouseEnter={this.disableTable}
                  disabled={this.state.disabled}
                  onClick={() => this.numsSelectionHandler(num.n, "firstRow")}
                >
                  <Chip id={num.n} active={num.visible} currentBet={num.bet} />
                </button>
              ))}
            </ul> */}

            {/* Second row */}
            {/* <ul
              className="d-flex justify-content-center list-unstyled"
              // style={{ paddingLeft: "110px" }}
              style={{ paddingLeft: "90px" }}
            >
              {this.state.secondRow.map((num, index) => (
                <button
                  key={`${num.n}-${index}-sr`}
                  className={num.className}
                  value={num.n}
                  onMouseEnter={this.disableTable}
                  disabled={this.state.disabled}
                  onClick={() => this.numsSelectionHandler(num.n, "secondRow")}
                >
                  <Chip id={num.n} active={num.visible} currentBet={num.bet} />
                </button>
              ))}
            </ul> */}

            {/* Third row */}
            <ul className="d-flex flex-wrap list-unstyled">
              {this.state.tableBlocks.map((num, index) => (
                <React.Fragment key={`${num.n}-${index}-tb`}>
                  {index % 7 === 0 && index !== 0 && <br />}
                  <button
                    className={num.className}
                    value={num.n}
                    onMouseEnter={this.disableTable}
                    disabled={this.state.disabled}
                    onClick={() => this.numsSelectionHandler(num.n, "tableBlocks")}
                    //style={{ margin: "2px" }}
                  >
                    <Chip id={num.n} active={num.visible} currentBet={num.bet} />
                  </button>
                </React.Fragment>
              ))}
            </ul>

            {/* Fourth row */}
            <ul
              className="d-flex list-unstyled "
              style={{ paddingLeft: "0px" }}
            >
              {this.state.fourthRow.map((num, index) => (
                <button
                  key={`${num.n}-${index}-for`}
                  className={num.className}
                  value={num.n}
                  onMouseEnter={this.disableTable}
                  disabled={this.state.disabled}
                  onClick={() => this.numsSelectionHandler(num.n, "fourthRow")}
                >
                  <Chip id={num.n} active={num.visible} currentBet={num.bet}/>
                </button>
              ))}
            </ul>
            <div className="table-divider"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RouletteTable;
