import { useState } from 'react'
import './Button.css'
import Alert from '../Bài3_Alert/Alert.jsx';

const Button = ({type, content}) => {
  const [showAlert, setShowAlert] = useState(false)
  const className = `btn btn-${type}`
  return (
    <>
      <button className={className} onClick={() => setShowAlert(true)}>{content}</button>
      {showAlert && <Alert type={type} onClose={() => {setShowAlert(false)}} />}
    </>
  );
  
}

export default Button
