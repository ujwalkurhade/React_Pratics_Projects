import { useState } from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Input />
    </div>
  );
}

export default App;
