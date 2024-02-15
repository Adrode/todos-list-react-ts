import { useTasks } from "./useTasks";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";

function Tasks() {
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
    <>
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
          <TasksList
            tasks={tasks}
            key={tasks.id}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}
      />
    </>
  );
}

export default Tasks;