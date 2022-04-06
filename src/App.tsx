import React from 'react';
import './App.css';
import Counter_renderProps from './components/Counter_renderProps';

// props
// hooks
// render props

const App = () => {
  return (
    <div className='App'>
      <Counter_renderProps>
        {(count, setCount) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter_renderProps>
    </div>
  );
};

export default App;
