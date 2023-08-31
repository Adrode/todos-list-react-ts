import Form from "./Form";
import Tasks from "./Tasks";

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

      <section className="section">
        <header className="section__header">
          <h2 className="section__title">Add new task</h2>
        </header>
        <Form />
      </section>
      <section className="section">
        <header className="section__header">
          <h2 className="section__title">Tasks list</h2>
          <div className="buttons__container"></div>
        </header>
        <Tasks tasks={tasks} key={tasks.id} hideDoneTasks={hideDoneTasks} />
      </section>
    </div>
  );
}

export default App;
