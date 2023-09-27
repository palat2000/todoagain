import { useContext } from "react";
import Item from "./Item";
import { AuthContext } from "../contexts/AuthContext";

function List() {
  const ctx = useContext(AuthContext);
  return (
    <ul className="flex flex-col gap-3">
      {ctx.todos.map((item) => (
        <Item title={item.title} key={item.id} />
      ))}
    </ul>
  );
}

export default List;
