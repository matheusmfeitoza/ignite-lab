interface InputProps {
  type: string;
  placeholder: string;
  name?: string;
  id?: string;
}

export function Input(props: InputProps) {
  return (
    <input
      className="bg-gray-900 rounded px-5 h-14"
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      id={props.id}
    />
  );
}
