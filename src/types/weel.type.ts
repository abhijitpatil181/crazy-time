export interface WeelState {
  spinAngleStart: number;
  spinTimeTotal: number;
  startAngle: number;
  spinTime: number;
  arc: number;
  text: string;
}

export interface WeelProps {
  updateNum: (num: string) => void;
  isSpinning: (spinning: boolean) => void;
  arr: any[]; // Array of bets
}
