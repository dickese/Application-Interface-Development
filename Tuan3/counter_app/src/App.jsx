import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=''>
        <h1>Counter App</h1>
        <h1 style={count > 10 ? { color: 'red' } : {}}>{count}</h1>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button
            style={{
              backgroundColor: 'blue',
              color: 'white',
              padding: '8px 24px',
            }}
            onClick={() => {
              setCount((prev) => {
                const value = prev + 1;
                console.log(`Chọn + : ${prev} + 1 = ${value}`);
                return value;
              });
            }}
          >
            +
          </button>
          <button
            style={{
              backgroundColor: 'red',
              color: 'white',
              padding: '8px 24px',
            }}
            onClick={() => {
              if (count > 0) {
                {
                  setCount((prev) => {
                    const value = prev - 1;
                    console.log(`Chọn - : ${prev} - 1 = ${value}`);
                    return value;
                  });
                }
              }
            }}
          >
            -
          </button>
          <button
            style={{
              backgroundColor: 'green',
              color: 'white',
              padding: '8px 24px',
            }}
            onClick={() => {
              setCount(0);
              console.log('Chọn reset');
              return 0;
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
