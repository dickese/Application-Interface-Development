import './Button.css'
import Button from './Button.jsx';
const ButtonComponents = () => {
  
  return (
    <div className='btn-wrapper'>
      <h1 className='title'>Bài 2: Button Components</h1>
      <div className='group'>
        <Button type={'danger'} content={'Default'} />
        <Button type={'warning'} content={'Danger'} />
        <Button type={'success'} content={'Success'} />
      </div>
    </div>
  );
}

export default ButtonComponents
