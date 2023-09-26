function Item() {
  return (
    <li className="flex justify-between bg-white px-3 py-4 border border-zinc-200 items-center rounded-md">
      <span className="flex-grow">TodoTodo</span>
      <div className="flex gap-2">
        <button className="bg-blue-500 px-3 py-1.5 text-white rounded-md">
          Edit
        </button>
        <button className="bg-red-500 px-3 py-1.5 text-white rounded-md">
          Del
        </button>
      </div>
    </li>
  );
}

export default Item;
