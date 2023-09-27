import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Form() {
  const [input, setInput] = useState("");
  const ctx = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5555/todo",
        { title: input },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        console.log(res);
        ctx.setTodos([...ctx.todos, res.data]);
        setInput("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        className="outline-none px-3 py-1.5 border rounded-md flex-grow"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-blue-500 px-3 py-1.5 text-white rounded-md">
        Create
      </button>
    </form>
  );
}

export default Form;
