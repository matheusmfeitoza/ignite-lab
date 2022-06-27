import { ChangeEvent, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  name?: string;
  id?: string;
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Input(props: InputProps) {
  return (
    <input
      className="bg-gray-900 rounded px-5 h-14"
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
    />
  );
}
