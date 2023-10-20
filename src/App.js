import { useState } from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const [tasks, setTasks] = useState([
    { id: 1, content: "learn React", done: false },
    { id: 2, content: "eat breakfast", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if(task.id === id) {
        return {...task, done: !task.done,};
      }

      return task;
    }));
  };

  const toggleAllDone = () => {
    setTasks(tasks => tasks.map(task => ({...task, done: true})));
  };

  return (
    <Container>
      <Header title="Tasks list" />

      <Section
        title="Add new task"
        body={<Form />}
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
