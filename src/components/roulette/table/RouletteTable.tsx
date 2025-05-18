import React, { JSX } from "react";
import "./RouletteTable.css";
import Chip from "../chips/Chip";
// import { Overlay, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { RouletteTableProps } from "../../../types/roulette.type";
import { Row } from "../../../types/row.type";
import { store } from "../../../store/store";
import { setTableBlocks } from "../../../store/slices/tableBlock.slice";
import { setDisabled } from "../../../store/slices/rouletteGame.slice";
import { SelectedBets, setSelectedBets } from "../../../store/slices/bet.slice";

interface RouletteTableState {
  /* JSONS ROWS */
  // firstRow: Row[];
  // firstBorder: Row[];
  // secondRow: Row[];
  // secondBorder: Row[];
  // thirdRow: Row[];
  // thirdBorder: Row[];
  fourthRow: Row[];
  // fifthRow: Row[];
  // columnLeft: Row[];
  // columnRight: Row[];
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
      // firstRow: this.props.firstRow,
      // firstBorder: this.props.firstBorder,
      // secondRow: this.props.secondRow,
      // secondBorder: this.props.secondBorder,
      // thirdRow: this.props.thirdRow,
      // thirdBorder: this.props.thirdBorder,
      fourthRow: this.props.fourthRow,
      // fifthRow: this.props.fifthRow,
      // columnLeft: this.props.columnLeft,
      // columnRight: this.props.columnRight,
      disabled: false,
      tableBlocks: this.props.tableBlocks,
      /* END JSONS ROWS */
    };
  }

  disableTable = (): void => {
    if (store.getState().rouletterGame.spinning) {
      store.dispatch(setDisabled(true));
    } else {
      store.dispatch(setDisabled(false));
    }
  };

  //SELECTING BETS
  numsSelectionHandler = (num: string | string[]): void => {
    const currentSelectedBet = store.getState().bets.currentBet;
    //checking if my props.arr is empty, if it is, leave empty, if it is not, spread it
    const selectedBets: SelectedBets[] = [...store.getState().bets.selctedBets];

    //saving in a variable the row from state with that name
    const row = [...store.getState().tableBlocks.tableBlocks];

    //variable for coins
    let coins: number = this.props.coins;

    //checking if my winner number is presented in the array

    /* BETS DESELECT HANDLING STARTS */

    if (selectedBets.findIndex((betNumber) => betNumber.number === num) >= 0) {
      //if number is present in array, deselect and remove it from array
      // Remove all matching bets (in case there are duplicates)
      for (let i = selectedBets.length - 1; i >= 0; i--) {
        if (selectedBets[i].number === num) {
          selectedBets.splice(i, 1);
        }
      }

      //giving back coins i bet on this number
      coins = this.props.coins + currentSelectedBet;

      //tricky part: map each of the rows and check if chip is vivible, if it is, remove it

      const updatedRow = row.map((chip) => {
        if (chip.n == num) {
          // chip.visible = false; // remove the chip
          // chip.bet = 0; // remove the bet
          return { ...chip, visible: false, bet: 0 }; // create new object
        }
        return chip;
      });
      store.dispatch(setTableBlocks(updatedRow));
      // console.log("updatedRow", updatedRow);

      // this.props.updateRow(whichRow, updatedRow); //passing back to Roulette.js component updated props

      // this.setState({ [whichRow]: updatedRow } as unknown as Pick<
      //   RouletteTableState,
      //   keyof RouletteTableState
      // >); //setting the new state with removed chips from the rows

      /* BETS DESELECT HANDLING ENDS */

      /* BETS SELECT HANDLING START */
    } else if (
      selectedBets.findIndex((betNumber) => betNumber.number === num) === -1
    ) {
      //if number is NOT present in array, select it and put the chip on it
      //decrementing coins
      coins = this.props.coins - currentSelectedBet;

      selectedBets.push({
        number: String(num),
        betPlaced: currentSelectedBet,
      }); //adding selected number to the array of bets
      console.log("before ", row);

      //tricky part inverted: map each of the rows and check if chip is vivible, if it is NOT, add it
      const updatedRow = row.map((chip) => {
        if (chip.n == num) {
          return { ...chip, visible: true, bet: currentSelectedBet }; // create new object
        }
        return chip;
      });
      console.log("after", updatedRow);
      store.dispatch(setTableBlocks(updatedRow)); //passing back to Roulette.js component updated props
      // this.setState({ [whichRow]: updatedRow } as unknown as Pick<
      //   RouletteTableState,
      //   keyof RouletteTableState
      // >); //setting the new state with added chips to the rows
    }

    //passing back to Roulette.js the updated array
    // this.props.updateArr(nums);
    store.dispatch(setSelectedBets(selectedBets)); //passing back to Roulette.js the updated array of selected bets

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
              {store.getState().tableBlocks.tableBlocks.map((num, index) => (
                <React.Fragment key={`${num.n}-${index}-tb`}>
                  {index % 7 === 0 && index !== 0 && <br />}
                  <button
                    className={num.className}
                    value={num.n}
                    onMouseEnter={this.disableTable}
                    disabled={store.getState().rouletterGame.disabled}
                    onClick={() => this.numsSelectionHandler(num.n)}
                    //style={{ margin: "2px" }}
                  >
                    <Chip
                      id={num.n}
                      active={num.visible}
                      currentBet={num.bet}
                    />
                  </button>
                </React.Fragment>
              ))}
            </ul>

            {/* Fourth row */}
            <ul
              className="d-flex list-unstyled "
              style={{ paddingLeft: "0px" }}
            >
              {store.getState().bets.lowHeighBets.map((num, index) => (
                <button
                  key={`${num.n}-${index}-for`}
                  className={num.className}
                  value={num.n}
                  onMouseEnter={this.disableTable}
                  disabled={store.getState().rouletterGame.disabled}
                  onClick={() => this.numsSelectionHandler(num.n)}
                >
                  <Chip id={num.n} active={num.visible} currentBet={num.bet} />
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
