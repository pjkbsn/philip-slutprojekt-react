type ButtonProps = {
  buttonName: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ handleClick, buttonName }: ButtonProps) => {
  return (
    <>
      <button onClick={handleClick}>{buttonName}</button>
    </>
  );
};
