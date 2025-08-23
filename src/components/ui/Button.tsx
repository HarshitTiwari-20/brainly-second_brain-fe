import type { ReactElement } from "react";
import { IconColor } from "../../icons";
type Variant = "primary" | "secondary";
interface ButtonProps {
    variant: Variant;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick: () => void;
}

//easy way to write a button component
// export const Button = (props: {
//     variant: Variant;
//     size: "sm" | "md" | "lg";
//     text: string;
//     startIcon?: ReactElement;
//     endIcon?: ReactElement;
//     onClick: () => void;
// }) => {
//     return <button></button>
// }

//use maps

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600",
}

const sizeStyles = {
    "sm": "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-3 px-6",
}


const defaultStyles = "rounded-md flex"

// export const Button = (props: ButtonProps) => {
//     return <button className={'${varientStyles[props.]} ${defaultStyles} ${sizeStyles[props.size]}'}>{ props.text}</button>
// }

// export const Button = (props: ButtonProps) => {
//   return (
//     <button className={ "bg-purple-600 text-white"}>
     
//     </button>
//   );
// };

//  `${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`

export const Button = (props: ButtonProps) => {
    return (
      <button
        onClick={props.onClick}
        className={
          ` ${defaultStyles} ${sizeStyles[props.size] } ${IconColor[props.color]}`
        }
        >
            {props.startIcon ? <div className="pr-2">{props.startIcon}</div>  : null}
        {props.text}
      </button>
    );
}

<Button variant="primary" size="md" onClick={() => {}} text="asd" />