function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">Tasks list</h1>
      </header>

      <section className="section">
        <header className="section__header">
          <h2 className="section__title">Add new task</h2>
        </header>
        <form className="form js-form">
          <input className="form__textInput js-newTask" placeholder="What is there to do?" />
          <button className="form__submitButton js-addNewTask">Add task</button>
        </form>
      </section>
      <section className="section">
        <header className="section__header">
          <h2 className="section__title">Tasks list</h2>
          <div className="buttons__container js-featureButtons"></div>
        </header>
        <ul className="list__tasksList js-tasks">
        </ul>
      </section>
    </div>
  );
}

export default App;
