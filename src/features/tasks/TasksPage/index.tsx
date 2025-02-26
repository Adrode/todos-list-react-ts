import { Container } from "../../../common/Container";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Search from "./Search";
import LoadingButton from "./LoadingButton";

const TasksPage = () => (
  <Container>
    <Header title="Tasks list" />

    <Section
      title="Add new task"
      extraHeaderContent={<LoadingButton />}
      body={<Form />}
    />

    <Section
      title="Search"
      body={<Search />}
    />

    <Section
      title="Tasks list"
      extraHeaderContent={<Buttons />}
      body={<TasksList />}
    />
  </Container>
);

export default TasksPage;