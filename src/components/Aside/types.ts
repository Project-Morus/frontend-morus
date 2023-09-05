import { ReactNode } from "react";
import { IBaseProps } from "../../types";

export interface IAsideProps extends IBaseProps {
  children: ReactNode,
  position?: PositionsAsideTypes
}

export type PositionsAsideTypes = 'left' | 'right'