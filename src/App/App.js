import { useState, useEffect } from 'react';
import Form from "./Container/Section/Form/index";
import Tasks from "./Container/Section/Tasks/index";
import Buttons from "./Container/Section/Buttons/index";
import Section from "./Container/Section/index";
import Header from "./Container/Header/index";
import Container from "./Container/index";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done, };
      }

      return task;
    }));
  };

  const toggleAllDone = () => {
    setTasks(tasks => tasks.map(task => ({ ...task, done: true })));
  };

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        content,
        done: false,
      },
    ]);
  };

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
