import { Routes, Route } from "react-router-dom";
import "./App.css";

import Guess from "./routes/guess/guess";
import Rules from "./routes/guess-rules/rules";
import Navigation from "./routes/navigation/navigation";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Guess />} />
          <Route path="rules" element={<Rules />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
