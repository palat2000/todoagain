import Item from "./Item";

function List({ todos }) {
  return (
    <ul className="flex flex-col gap-3">
      {todos.map((item) => (
        <Item title={item.title} key={item.id} />
      ))}
    </ul>
  );
}

export default List;
