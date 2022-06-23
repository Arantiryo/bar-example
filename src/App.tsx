import React, { useState } from 'react';
import BarChart from './BarChart';

export const StateContext = React.createContext({ activeState: 0 });

function App() {
  const [state, setState] = useState(0);

  return (
    <StateContext.Provider value={{ activeState: state }}>
      <BarChart />
      <button onClick={() => setState(state + 1)}>Increment</button>
    </StateContext.Provider>
  );
}

export default App;
