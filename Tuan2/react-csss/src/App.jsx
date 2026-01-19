import './App.css'
import LoginForm from './components/LoginForm/LoginForm.jsx'
function App() {
  const [showPrimary, setShowPrimary] = useState(true)
  const [showSecondary, setShowSecondary] = useState(true)
  const [showThird, setShowThird] = useState(true)
  return <>
    (showPrimary && <LoginForm type="primary" onClose = {() => setShowPrimary(false)}/>)
    (showSecondary && <LoginForm type="secondary" onClose = {() => setShowSecondary(false)}/>)
    (showThird && <LoginForm type="third" onClose = {() => setShowThird(false)}/>)
  </>
}

export default App
