interface ChildProps {
  color: string;
  onClick: () => void;
  children: any;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      COLOR is {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
