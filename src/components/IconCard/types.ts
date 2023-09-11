
import { IBaseProps } from "../../types";
import { IconNamesTypes, StrokeType } from "../Icon/types";

export interface IIconCardProps extends IBaseProps {
  icon: IconNamesTypes,
  stroke?: StrokeType,
  variant?: VariantsCardTypes,
}

export type VariantsCardTypes = 'primary' | 'white'