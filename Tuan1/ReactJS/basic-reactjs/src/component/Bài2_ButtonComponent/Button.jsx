import './Button.css'
const Button = ({type, content}) => {
    const className = `btn btn-${type}`
    console.log(className)
  return <button className={className}>{content}</button>;
}

export default Button
