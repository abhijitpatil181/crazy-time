import React, { JSX } from "react";
import "./Roulette.css";
import Weel from "./weel/Weel";
// import RouletteTable from "./roulette_components/table/Table";
import { Container, Row, Col } from "react-bootstrap";
// import { GiDiamonds } from "react-icons/gi";
// import API from "../../../utils/API";

import { RouletteProps, RouletteState } from "../../types/roulette.type";
import {
  columnLeft,
  columnRight,
  fifthRow,
  firstBorder,
  firstRow,
  fourthRow,
  secondBorder,
  secondRow,
  thirdBorder,
  thirdRow,
} from "../../mock";
import RouletteTable from "./table/RouletteTable";
import { Row as RowType } from "../../types/row.type";

class Roulette extends React.Component<RouletteProps, RouletteState> {
  // Declaring combinations as class properties
  private twoByOneFirst: string[] = [
    "3",
    "6",
    "2",
    "12",
    "15",
    "18",
    "21",
    "24",
    "27",
    "30",
    "33",
    "36",
  ];
  private twoByOneSecond: string[] = [
    "2",
    "5",
    "8",
    "11",
    "14",
    "17",
    "20",
    "23",
    "26",
    "29",
    "32",
    "35",
  ];
  private twoByOneThird: string[] = [
    "1",
    "4",
    "7",
    "10",
    "13",
    "16",
    "19",
    "22",
    "25",
    "28",
    "31",
    "34",
  ];
  private firstTwelves: string[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  private secondTwelves: string[] = [
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
  ];
  private thirdTwelves: string[] = [
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
  ];
  private oneToEighteen: string[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
  ];
  private nineteenToThirtySix: string[] = [
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
  ];
  private black: string[] = [
    "2",
    "4",
    "6",
    "8",
    "10",
    "11",
    "13",
    "15",
    "17",
    "20",
    "22",
    "24",
    "26",
    "28",
    "29",
    "31",
    "33",
    "35",
  ];
  private red: string[] = [
    "1",
    "3",
    "5",
    "7",
    "9",
    "12",
    "14",
    "16",
    "18",
    "19",
    "21",
    "23",
    "25",
    "27",
    "30",
    "32",
    "34",
    "36",
  ];
  private even: string[] = [
    "2",
    "4",
    "6",
    "8",
    "10",
    "12",
    "14",
    "16",
    "18",
    "20",
    "22",
    "24",
    "26",
    "28",
    "30",
    "32",
    "34",
    "36",
  ];
  private odd: string[] = [
    "1",
    "3",
    "5",
    "7",
    "9",
    "11",
    "13",
    "15",
    "17",
    "19",
    "21",
    "23",
    "25",
    "27",
    "29",
    "31",
    "33",
    "35",
  ];

  constructor(props: RouletteProps) {
    super(props);
    this.state = {
      num: "", // winning number
      arr: [], // array of bets
      count: 0, // spins count
      wins: 0, // wins count
      chip: 10, // chip value
      coins: 0, // coins count
      losses: 0, // losses count
      spinning: false,
      message: "Put your bets and spin the weel!", // message
      extArr: [], // little trick: pushing number here if user win, so if it's empty, user loose
      // JSON rows with TypeScript casting
      firstRow: firstRow,
      firstBorder: firstBorder,
      secondRow: secondRow,
      secondBorder: secondBorder,
      thirdRow: thirdRow,
      thirdBorder: thirdBorder,
      fourthRow: fourthRow,
      fifthRow: fifthRow,
      columnLeft: columnLeft,
      columnRight: columnRight,
    };
  }

  componentDidMount(): void {
    // grab user data from database and set state with that data
    // API.getOnePlayer(this.props.user.email)
    //   .then((res) => {
    //     this.setState({
    //       count: res.data.wins.roulette.totalGames,
    //       wins: res.data.wins.roulette.wins,
    //       coins: res.data.earnings,
    //       losses: res.data.wins.roulette.losses,
    //     });
    //   })
    //   .catch((err) => console.log(err));
  }

  isSpinning = (isspinning: boolean): void => {
    this.setState({ spinning: isspinning });
  };

  // handling losing
  userLost = (): void => {
    // update state for message and losses
    this.setState(
      {
        message: `No luck this time!`,
        losses: this.state.losses + 1,
      },
      () => {
        // creating the object to send to mongodb and putting in callback to make sure the state is updated before sending data to database
        // const data: APIData = {
        //   "wins.roulette.totalGames": this.state.count,
        //   "wins.roulette.losses": this.state.losses,
        //   earnings: this.state.coins,
        // };
        // API.updatePlayer(this.props.user.email, data)
        //   .then((res) => {
        //     console.log(res.data);
        //   })
        //   .catch((err) => console.log(err));

        // and reseting the game
        this.resetGame();
      }
    );
  };

  // handling winning
  // passing multiplier to calculate how much our user win
  userWin = (multi: number): void => {
    // updating state for message, wins and coins
    this.setState(
      {
        message: `You win ${
          multi * parseInt(this.state.chip.toString())
        } coins!`,
        wins: this.state.wins + 1,
        coins: this.state.coins + multi * parseInt(this.state.chip.toString()),
      },
      () => {
        // creating the object to send to mongodb and putting in callback to make sure the state is updated before sending data to database
        // const data: APIData = {
        //   "wins.roulette.totalGames": this.state.count,
        //   "wins.roulette.wins": this.state.wins,
        //   earnings: this.state.coins,
        // };
        // sending my object to db
        // API.updatePlayer(this.props.user.email, data)
        //   .then((res) => {
        //     console.log(res.data);
        //   })
        //   .catch((err) => console.log(err));

        // and reseting the game
        this.resetGame();
      }
    );
  };

  // reset game function: emptying the array and setting all the chips to invisible state
  resetGame = (): void => {
    this.setState({
      arr: [],
      spinning: false,
      num: "",
      firstRow: this.state.firstRow.map((num) => {
        num.visible = false;
        return num;
      }),
      firstBorder: this.state.firstBorder.map((num) => {
        num.visible = false;
        return num;
      }),
      secondRow: this.state.secondRow.map((num) => {
        num.visible = false;
        return num;
      }),
      secondBorder: this.state.secondBorder.map((num) => {
        num.visible = false;
        return num;
      }),
      thirdRow: this.state.thirdRow.map((num) => {
        num.visible = false;
        return num;
      }),
      thirdBorder: this.state.thirdBorder.map((num) => {
        num.visible = false;
        return num;
      }),
      fourthRow: this.state.fourthRow.map((num) => {
        num.visible = false;
        return num;
      }),
      fifthRow: this.state.fifthRow.map((num) => {
        num.visible = false;
        return num;
      }),
      columnLeft: this.state.columnLeft.map((num) => {
        num.visible = false;
        return num;
      }),
      columnRight: this.state.columnRight.map((num) => {
        num.visible = false;
        return num;
      }),
    });
  };

  // finding out if winning number is in any of the arrays
  determineValidBets = (
    length: number,
    element: string[],
    num: string,
    multiplier: number
  ): void => {
    const extArr = [...this.state.extArr];
    const lunghezza = element.length;
    if (lunghezza === length) {
      const filtering = element.filter((isItMyNum) => isItMyNum == num);
      if (filtering.toString() == num) {
        extArr.push(num);
        this.setState({ extArr });
        this.userWin(multiplier);
        console.log(this.state.extArr);
      }
    }
  };

  // little different here, checking by name and not the length of the array
  determineValidBetsColFive = (
    name: string,
    element: string,
    arrName: string[],
    num: string,
    multiplier: number
  ): void => {
    const extArr = [...this.state.extArr];
    if (element === name) {
      const filtered = arrName.filter((item) => item == num);
      if (filtered.toString() == num) {
        extArr.push(num);
        this.setState({ extArr });
        this.userWin(multiplier);
        console.log(this.state.extArr);
      }
    }
  };

  // gonna pass this function as props to my Weel.js, so i can update it back with the winning number and determine if user won or loose
  updateNum = (num: string): void => {
    this.setState({ num, count: this.state.count + 1 }); // i'm getting number, that's one spin, updating state with this info

    // map the array of bets
    this.state.arr.forEach((item) => {
      if (item === num) {
        // if it's just a single number
        this.userWin(35); // multiplier is 35, user win a bunch of coins
      }

      // here gonna filter the mini-arrays (borders, columns etc.) and see if winner number is present in any of them
      // if item is not string, means it's an array, so i am going to map it in my determineValidBets function
      if (typeof item !== "string") {
        this.determineValidBets(2, item, num, 17);
        this.determineValidBets(3, item, num, 11);
        this.determineValidBets(4, item, num, 8);
        this.determineValidBets(6, item, num, 5);
        // otherwise it's a string (even, odd etc), so before mapping i have to check if the element name is in my array and then map that element
      } else {
        this.determineValidBetsColFive("Even", item, this.even, num, 1);
        this.determineValidBetsColFive("Odd", item, this.odd, num, 1);
        this.determineValidBetsColFive("Black", item, this.black, num, 1);
        this.determineValidBetsColFive("Red", item, this.red, num, 1);
        this.determineValidBetsColFive(
          "1 to 18",
          item,
          this.oneToEighteen,
          num,
          1
        );
        this.determineValidBetsColFive(
          "19 to 36",
          item,
          this.nineteenToThirtySix,
          num,
          1
        );
        this.determineValidBetsColFive(
          "3rd 12",
          item,
          this.thirdTwelves,
          num,
          1
        );
        this.determineValidBetsColFive(
          "2nd 12",
          item,
          this.secondTwelves,
          num,
          1
        );
        this.determineValidBetsColFive(
          "1st 12",
          item,
          this.firstTwelves,
          num,
          1
        );
        this.determineValidBetsColFive(
          "2:1:1",
          item,
          this.twoByOneFirst,
          num,
          2
        );
        this.determineValidBetsColFive(
          "2:1:2",
          item,
          this.twoByOneSecond,
          num,
          2
        );
        this.determineValidBetsColFive(
          "2:1:3",
          item,
          this.twoByOneThird,
          num,
          2
        );
      }
    });

    // if there is nothing in existing numbers array, means user lost, firing the respective function
    if (this.state.extArr.length === 0) {
      this.userLost();
    }
  };

  // gonna pass this function as props to my Table.js, so i can update it back
  updateArr = (arr: any[]): void => {
    this.setState({ arr });
  };

  // gonna pass this function as props to my Table.js, so i can update it back
  updateCoins = (coins: number): void => {
    this.setState({ coins });
  };

  // gonna pass this function as props to my Table.js, so i can update it back
  updateRow = (row: string, val: RowType[]): void => {
    this.setState({ [row]: val } as unknown as Pick<
      RouletteState,
      keyof RouletteState
    >);
  };

  render(): JSX.Element {
    return (
      <React.Fragment>
        <Row>
          <Container fluid className="table">
            <Row className="align-items-center justify-content-center ">
              <Col className="align-self-center mx-2">
                <Weel
                  isSpinning={this.isSpinning}
                  updateNum={this.updateNum}
                  arr={this.state.arr}
                />
              </Col>
              <Col className="mt-5" style={{ marginTop: "1.25rem" }}>
                <RouletteTable
                  //ROWS//
                  firstRow={this.state.firstRow}
                  firstBorder={this.state.firstBorder}
                  secondRow={this.state.secondRow}
                  secondBorder={this.state.secondBorder}
                  thirdRow={this.state.thirdRow}
                  thirdBorder={this.state.thirdBorder}
                  fourthRow={this.state.fourthRow}
                  fifthRow={this.state.fifthRow}
                  columnLeft={this.state.columnLeft}
                  columnRight={this.state.columnRight}
                  //END ROWS//
                  updateRow={this.updateRow}
                  updateArr={this.updateArr}
                  updateCoins={this.updateCoins}
                  num={this.state.num}
                  arr={this.state.arr}
                  count={this.state.count}
                  coins={this.state.coins}
                  chip={this.state.chip}
                  spinning={this.state.spinning}
                />
                {/* <Row className="bg-red bg-verdict align-items-center">
                  <Col
                  md={4}
                  className="d-flex align-items-center coins-col justify-content-center"
                  >
                  <h4 className="m-0">${this.state.coins}</h4>
                  </Col>
                  <Col md={8}>
                  <div className="text-center">
                    <h6 className="text-uppercase">{this.state.message}</h6>
                  </div>
                  <div className="text-center">
                    <div className="divider-line divider-line-center divider-line-linear-gradient w-100 mx-auto my-4">
                   
                    </div>
                    <ul className="list-inline">
                    <li className="list-inline-item">
                      Spins: {this.state.count}
                    </li>
                    <li className="list-inline-item">
                      Wins: {this.state.wins}
                    </li>
                    <li className="list-inline-item">
                      Losses: {this.state.losses}
                    </li>
                    </ul>
                  </div>
                  </Col>
                </Row> */}
              </Col>
            </Row>
          </Container>
          <Container fluid className="table">
            <Row>
              <Col className="text-light-gold">
                Your bets: {this.state.arr.join(", ")}
              </Col>
            </Row>
          </Container>
        </Row>
      </React.Fragment>
    );
  }
}

export default Roulette;
