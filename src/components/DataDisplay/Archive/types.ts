import { IBaseProps } from "../../../types";

export interface IArchiveProps extends IBaseProps {
  variant?: VariantsTypes;
}

export type VariantsTypes = "small" | "large";
