import { useState } from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const tasks = [
    { id: 1, content: "learn React", done: false },
    { id: 2, content: "eat breakfast", done: true },
  ];

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
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
        />}
        body={
        <Tasks
          tasks={tasks}
          key={tasks.id}
          hideDone={hideDone}
        />}
      />
    </Container>
  );
}

export default App;
