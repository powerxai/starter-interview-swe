import React from "react";
import logo from "./logo.gif";
import { Note } from "./Note";
import "./App.css";

function useLog(): [string, (x: string) => void] {
  const [logs, setLogs] = React.useState<string[]>([]);
  const log = React.useCallback(
    (x: string) => setLogs((ls) => [x].concat(ls)),
    []
  );
  const output = logs.slice(0, 10).join("\n");
  return [output, log];
}

function App() {
  const [serverState, setServerState] = React.useState("Default Note");
  const [logs, log] = useLog();

  const persist = React.useCallback(
    async (newNote: string) => {
      const delay = Math.random() * 1000;
      log(`${new Date().toISOString()}: Submitting '${newNote}'...`);
      await new Promise<void>((resolve, reject) =>
        setTimeout(() => resolve(), delay)
      );
      setServerState(newNote);
      log(`${new Date().toISOString()}: Saved '${newNote}'`);
      return newNote;
    },
    [setServerState, log]
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Note saveNote={persist} initialValue={serverState} />
      <p>
        <strong>Server value</strong>: <code>{serverState}</code>
      </p>
      {logs.length > 0 ? (
        <p style={{ maxWidth: 400, textAlign: "left", margin: "auto" }}>
          <strong>Server Logs:</strong>
          <pre>{logs}</pre>
        </p>
      ) : null}
    </div>
  );
}

export default App;
