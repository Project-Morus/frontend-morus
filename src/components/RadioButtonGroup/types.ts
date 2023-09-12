export interface IOptionGroupProps {
  label: string;
  options: IOptionProps[];
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface IOptionProps {
  label: string;
  name?: string;
  disabled?: boolean;
}
