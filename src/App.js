import React, {useState, useEffect} from "react";




function App() {
  const [count, setCount] = useState(1)

  return (
    <div className="test">
      <input onChange={count} type="number" min="1" value={count}></input>
      <button onClick={()=> setCount(count + 1)}>Add</button>
      <button onClick={()=> setCount(count > 1 ? count -1 : count)}>Minus</button>
    </div>
  );
}

export default App;
