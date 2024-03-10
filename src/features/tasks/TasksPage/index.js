import { useSelector } from "react-redux";
import { selectTasks } from "../tasksSlice";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Search from "./Search";

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
        title="Search engine"
        body={<Search />}
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