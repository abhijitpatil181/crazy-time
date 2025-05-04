import { Row } from "./row.type";

// Table item definition for roulette cells
// export interface Row {
//   visible: boolean;
//   name: string;
//   id: string;
//   color?: string;
//   position?: string;
//   [key: string]: any; // For any additional properties
// }

// User type
export interface User {
  email: string;
  name?: string;
}

// API response for player data
export interface PlayerResponse {
  data: {
    wins: {
      roulette: {
        totalGames: number;
        wins: number;
        losses: number;
      };
    };
    earnings: number;
  };
}

// API data type for updates
export interface APIData {
  "wins.roulette.totalGames": number;
  "wins.roulette.wins"?: number;
  "wins.roulette.losses"?: number;
  earnings: number;
}

export interface RouletteTableProps {
  // Rows
  firstRow: Row[];
  firstBorder: Row[];
  secondRow: Row[];
  secondBorder: Row[];
  thirdRow: Row[];
  thirdBorder: Row[];
  fourthRow: Row[];
  fifthRow: Row[];
  columnLeft: Row[];
  columnRight: Row[];

  // Functions
  updateRow: (row: string, val: Row[]) => void;
  updateArr: (arr: any[]) => void;
  updateCoins: (coins: number) => void;

  // State props
  num: string;
  arr: any[];
  count: number;
  coins: number;
  chip: number;
  spinning: boolean;
}

// Props interface
export interface RouletteProps {
  user: User;
}

// State interface
export interface RouletteState {
  num: string; // winning number
  arr: any[]; // array of bets
  count: number; // spins count
  wins: number; // wins count
  chip: number; // chip value
  coins: number; // coins count
  losses: number; // losses count
  spinning: boolean;
  message: string; // message
  extArr: string[]; // little trick: pushing number here if user win, so if it's empty, user loose
  // JSON rows
  firstRow: Row[];
  firstBorder: Row[];
  secondRow: Row[];
  secondBorder: Row[];
  thirdRow: Row[];
  thirdBorder: Row[];
  fourthRow: Row[];
  fifthRow: Row[];
  columnLeft: Row[];
  columnRight: Row[];
}