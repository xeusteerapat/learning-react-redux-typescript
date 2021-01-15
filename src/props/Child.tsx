interface ChildProps {
  color: string;
}

const Child = ({ color }: ChildProps) => {
  return (
    <div>
      <h1>{color}</h1>
    </div>
  );
};

export default Child;
