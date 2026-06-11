import { useState } from "react";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [count, setCount] =
    useState<number>(0);

  return (
    <div className="container">
      <h1 className="heading">
        React + TypeScript Demo
      </h1>

      <UserCard
        name="Arun"
        age={22}
      />

      <UserCard
        name="Priya"
        age={24}
      />

      <h2>Counter: {count}</h2>

      <button
        className="btn"
        onClick={() =>
          setCount(count + 1)
        }
      >
        Increment
      </button>
    </div>
  );
}

export default App;