import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { counterStore } from './Store.js'
import { themeStore } from '../Bai2/themeStore.js'

const ComponentA = () => {
    const [counter, setCounter] = useRecoilState(counterStore)
    const theme = useRecoilValue(themeStore)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <h1 style={{ color: theme === 'light' ? 'black' : 'white' }}>
        Counter in ComponentA: {counter}
      </h1>
      <div
        className='btn'
        style={{
          backgroundColor: theme === 'light' ? 'black' : 'white',
          width: '200px',
          color: 'red',
        }}
        onClick={() => setCounter((prev) => prev + 1)}
      >
        +
      </div>
      <div
        className='btn'
        style={{
          backgroundColor: theme === 'light' ? 'black' : 'white',
          width: '200px',
          color: 'red',
        }}
        onClick={() => setCounter((prev) => prev - 1)}
      >
        -
      </div>
    </div>
  );
}

export default ComponentA;
