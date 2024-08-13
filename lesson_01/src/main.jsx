import { createRoot } from 'react-dom/client'
import './style.css';

const animal = `cat`;

const heading_1 = <h1 className="heading heading--success">Hello, world!</h1>;

const heading_2 = <><h2>Heading <b>2</b></h2><em>!!!</em></>;

const list = <ul>
    <li>Hello</li>
    <li>Anna</li>
    <li>{30+20}</li>
    <li>{animal}</li>
</ul>

const TextCard = ({text, color}) => {
    const paragraphStyle = {color, fontWeight: 700, margin: `10px`}

    return <p style={ paragraphStyle }>{text}</p>
}

createRoot(document.getElementById('root')).render(<>
    {/* {heading_1}
    {heading_2}
    {list} */}

    <TextCard text="first" color="red"  />
    <TextCard text="second" color="green" />
    <TextCard />
</>)