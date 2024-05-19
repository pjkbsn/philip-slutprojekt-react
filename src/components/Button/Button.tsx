import { ReactNode } from "react";
import "./Button.scss";

type ButtonProps = {
  buttonName: ReactNode;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  style: string;
};

export const Button = ({ handleClick, buttonName, style }: ButtonProps) => {
  return (
    <>
      <button onClick={handleClick} className={style}>
        {buttonName}
      </button>
    </>
  );
};
