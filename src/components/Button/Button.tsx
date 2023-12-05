export const Button = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <button className="btn" onClick={onClick}>
      {text}
    </button>
  );
};
