export type SpinnerState={
  spinning:boolean;
  wheels:string[]
}

export interface SpinnerProps {
  spin: boolean;
  onStop: (wheels: string[]) => void;
}
