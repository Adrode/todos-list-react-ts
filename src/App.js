import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";

const tasks = [
  { id: 1, content: "learn React", done: false },
  { id: 2, content: "eat dinner", done: true },
];
const hideDoneTasks = false;

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">Tasks list</h1>
      </header>

      <Section
      title="Add new task"
      body={<Form />}
      />

      <Section
      title="Tasks list"
      extraHeaderContent={<Buttons tasks={tasks} key={tasks.id} hideDoneTasks={hideDoneTasks} />}
      body={<Tasks tasks={tasks} key={tasks.id} hideDoneTasks={hideDoneTasks} />}
      />
    </div>
  );
}

export default App;
