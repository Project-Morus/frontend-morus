export interface IOptionGroupProps {
  label: string;
  name: string;
  options: IOptionProps[];
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface IOptionProps {
  label: string;
  disabled?: boolean;
}
