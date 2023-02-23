interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <>
      <h1>I am a child</h1>
      <h2>My Color Is {color}</h2>
      <button onClick={onClick}>Click Me</button>
    </>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({color,onClick}) => {
    return <div>
        <p>Heres My Color : {color}</p>
        <button onClick={onClick}>Click Me</button>
        </div>
};