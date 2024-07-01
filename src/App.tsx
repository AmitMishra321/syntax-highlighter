import React from "react";
import "./App.css";
import CodeEditor from "./components/CodeEditor";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Code Editor</h1>
      </header>
      <CodeEditor />
    </div>
  );
};

export default App;
