import React, { useState } from "react";

 

export default function App() {

  const [count, setCount] = useState(0);

 

  return (

    <div style={{ padding: 20 }}>

      <h1>Movement Routine App ✅</h1>

      <p>Your deployment is working!</p>

 

      <button onClick={() => setCount(count + 1)}>

        Click count: {count}

      </button>

    </div>

  );

}
