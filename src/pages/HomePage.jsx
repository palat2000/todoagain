import Form from "../components/Form";
import List from "../components/List";

function HomePage() {
  return (
    <section className="flex flex-col gap-4">
      <Form />
      <List />
    </section>
  );
}

export default HomePage;
