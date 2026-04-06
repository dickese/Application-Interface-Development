import React from 'react'
import { useRecoilState } from 'recoil'
import { themeStore } from './themeStore.js'

const ComponentC = () => {
    const [theme, setTheme] = useRecoilState(themeStore)
  return (
    <div >
      ComponentC: {theme}
      <button onClick={() => setTheme(prev => prev === "light" ? "dark" : "light")}>Change theme</button>
    </div>
  )
}

export default ComponentC
