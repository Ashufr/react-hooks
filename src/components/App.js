import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);

  var now = new Date().toLocaleTimeString();
  const [time, setCount] = useState(now);

  function updateTime() {
    var now = new Date().toLocaleTimeString();
    setCount(now);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
