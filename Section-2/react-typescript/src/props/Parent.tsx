import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="Orange!" onClick={() => console.log("Clicked!")}>
        Nasief
    </ChildAsFC>
  );
};

export default Parent;
