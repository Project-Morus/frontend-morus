export interface IOptionGroupProps {
  label: string;
  options: IOptionProps[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface IOptionProps {
  label: string;
  name?: string;
  disabled?: boolean;
}
