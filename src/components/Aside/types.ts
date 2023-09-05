import { ReactNode } from "react";

export interface IAsideProps {
  children: ReactNode,
  position?: PositionsAsideTypes
}

export type PositionsAsideTypes = 'left' | 'right'