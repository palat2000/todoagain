import { useEffect, useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import axios from "axios";

function HomePage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const { data } = await axios.get("http://localhost:5555/todo", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setTodos(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetch();
  }, []);
  return (
    <section className="flex flex-col gap-4">
      <Form setTodos={setTodos} />
      <List todos={todos} />
    </section>
  );
}

export default HomePage;
