import "./style.css";

const Form = () => (
    <form className="form">
        <input className="form__textInput" placeholder="What is there to do?" />
        <button className="form__submitButton">Add task</button>
    </form>
);

export default Form;