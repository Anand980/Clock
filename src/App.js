import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    });
  }, []);

  return (
    <div className="App">
      <div className="clock"> {time}</div>
    </div>
  );
}
