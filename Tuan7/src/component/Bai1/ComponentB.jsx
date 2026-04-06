import React from 'react'
import { useRecoilValue } from 'recoil'
import { counterStore } from './Store.js'
import { themeStore } from '../Bai2/themeStore.js'

const ComponentB = () => {
    const counter = useRecoilValue(counterStore)
    const theme = useRecoilValue(themeStore)
  return (
    <h1 style={{ color: theme === 'light' ? 'black' : 'white' }}>
      Counter in componentB: {counter}
    </h1>
  );
}

export default ComponentB
