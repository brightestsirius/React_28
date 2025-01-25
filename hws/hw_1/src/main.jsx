import { createRoot } from 'react-dom/client'

const Heading = ({text, color}) => {
  return <h1 style={{color}}>{text}</h1>
}
const Description  = ({textStyle}) => {
  const userName = prompt();
  return <h2 style={{fontStyle: textStyle}}>{userName}'s first React application.</h2>
}

createRoot(document.getElementById('root')).render(<><Heading text="Hello, world!" color="crimson" /><Description textStyle="italic" /></>);