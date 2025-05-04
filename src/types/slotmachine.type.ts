export type SlotMachineState = {
  isRunning: boolean;
  winner: boolean;
  lose?: boolean;
  bet: number;
  prize: number;
  balance: number;
};
