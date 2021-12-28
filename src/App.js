import { useState } from 'react';

function App() {
  // init will be 0 
  const [clicked, setclicked] = useState(0);
  // increment by 1
  function didclicked(){
    setclicked(clicked+1)
  }
  return (
    <div>
      <button onClick={didclicked}>click me</button>
      <p>
        counter : {clicked}
      </p>
    </div>
  );
}

export default App;
