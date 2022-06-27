import { DiscordLogo, Lightning, Info } from "phosphor-react";
interface ButtonProps {
  variant: "primary" | "secundary" | "default";
  text: string;
  iconSize?: number;
  type?: string;
}
export function Button(props: ButtonProps) {
  return props.variant === "primary" ? (
    <a
      href="#"
      className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
    >
      <DiscordLogo size={props.iconSize} />
      {props.text}
    </a>
  ) : props.variant === "secundary" ? (
    <a
      href="#"
      className="p-4 text-sm text-blue-500 border border-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
    >
      <Lightning size={props.iconSize} />
      {props.text}
    </a>
  ) : props.variant === "default" ? (
    <a
      href="#"
      className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
    >
      {props.text}
    </a>
  ) : null;
}
