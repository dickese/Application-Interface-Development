import { useRecoilValue } from "recoil"
import ComponentA from "./component/Bai1/ComponentA.jsx"
import ComponentB from "./component/Bai1/ComponentB.jsx"
import { themeStore } from "./component/Bai2/themeStore.js"
import ComponentC from "./component/Bai2/ComponentC.jsx"


function App() {
  const theme = useRecoilValue(themeStore)
  return (
    <div className="" style={{backgroundColor : theme === "light" ? "white" : "black" }}>
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
    </div>
  )
}

export default App
