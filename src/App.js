import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import * as hello from "./utils/hello";

hello.hello();
console.log(hello.name);

const tasks = [
  { id: 1, content: "learn React", done: false },
  { id: 2, content: "eat breakfast", done: true },
];
const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Header title="Tasks list" />

      <Section
        title="Add new task"
        body={<Form />}
      />

      <Section
        title="Tasks list"
        extraHeaderContent={<Buttons tasks={tasks} key={tasks.id} hideDoneTasks={hideDoneTasks} />}
        body={<Tasks tasks={tasks} key={tasks.id} hideDoneTasks={hideDoneTasks} />}
      />
    </Container>
  );
}

export default App;
