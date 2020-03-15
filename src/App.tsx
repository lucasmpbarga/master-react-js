import React from "react";
import "./App.css";
import Person from "./Components/Person/Person";

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <Person name="Max" age={20}>
        My Hobbies racing.
      </Person>
      <Person name="Axm" age={21} />
      <Person name="Xam" age={22} />
    </div>
  );
}

export default App;
