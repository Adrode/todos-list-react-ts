import "./style.css";

const Buttons = (props) => {
    if (props.tasks.length === 0) {
        return null;
    }

    return (
        <div className="buttons__container">
            <button
                className="buttons__featureButton"
                onClick={props.toggleHideDone}
            >
                {props.hideDone ? "Show" : "Hide"} done tasks
            </button>
            <button
                className="buttons__featureButton"
                disabled={props.tasks.every(({ done }) => done) ? "disabled" : ""}
                onClick={props.toggleAllDone}
            >
                Mark all tasks as done
            </button>
        </div>
    );
};

export default Buttons;