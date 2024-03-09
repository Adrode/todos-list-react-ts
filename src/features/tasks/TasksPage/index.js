import { useSelector } from "react-redux";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { selectTasks } from "../tasksSlice";

function TasksPage() {
  const tasks = useSelector(selectTasks);

  return (
    <>
      <Header title="Tasks list" />

      <Section
        title="Add new task"
        body={<Form />}
      />

      <Section
        title="Tasks list"
        extraHeaderContent={<Buttons key={tasks.id} />}
        body={<TasksList key={tasks.id} />}
      />
    </>
  );
}

export default TasksPage;