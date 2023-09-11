
import { IBaseProps } from '../../types';
import PhosphorIconsMap from './parts/phosphorIconsMap';

export interface IIconProps extends IIconBaseProps {
  color?: string,
  onClick?: () => void,
}

interface IIconBaseProps extends IBaseProps {
  name: IconNamesTypes,
  size?: string,
  stroke?: StrokeType,
}


export type PhosphorIconsTypes = keyof typeof PhosphorIconsMap

export type IconNamesTypes = PhosphorIconsTypes

export type StrokeType = 'thin' | 'light' | 'regular' | 'bold'