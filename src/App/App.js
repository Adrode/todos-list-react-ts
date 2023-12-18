import { useTasks } from "./useTasks";
import Form from "./Container/Section/Form";
import Tasks from "./Container/Section/Tasks";
import Buttons from "./Container/Section/Buttons";
import Section from "./Container/Section";
import Header from "./Container/Header";
import Container from "./Container";

function App() {
  const {
    tasks,
    hideDone,
    removeTask,
    toggleTaskDone,
    toggleAllDone,
    addNewTask,
    toggleHideDone,
  } = useTasks();

  return (
    <Container>
      <Header title="Tasks list" />

      <Section
        title="Add new task"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Tasks list"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            key={tasks.id}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            toggleAllDone={toggleAllDone}
          />}
        body={
          <Tasks
            tasks={tasks}
            key={tasks.id}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}
      />
    </Container>
  );
}

export default App;