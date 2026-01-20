import { useState } from 'react'
import './LoginForm.css'
const LoginForm = (props) => {
    const formType = `form form-${props.type}`
  return (
    <div className={formType}>
            <div className="wrapper-close">
                <span className='close'>X</span>
            </div>
            <div className="wrapper-info">
                <div className="line-info">
                    <span className='label'>
                        Username: 
                    </span>
                    <input type="text" />
                </div>
                <div className="line-info">
                    <span className='label'>
                        Password: 
                    </span>
                    <input type="text" />
                </div>

            </div>
            <div className="wrapper-btn">
                <button className='btn'>
                    Login
                </button>
            </div>
    </div>
  )
}
export {isOpen, setOpen}
export default LoginForm
