import React,{ useState } from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import { FaBars, FaTimes } from 'react-icons/fa'
function Navbar() {
    const[click,setClick] = useState(false);
    const[color,setColor] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }
    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener("scroll",changeColor)
  return (
    <div className={color ? 'navlist navlist-bg' : 'navlist'}>
        <Link to = '/'>
        <h1>Ramya S</h1>
        </Link>
        <ul className={click ? 'list-items active': 'list-items'}>
            <li>
                <Link to = '/portfolio'>
                Home 
                </Link>
            </li>
            <li>
                <Link to = '/about'>
                About 
                </Link>
            </li>
            <li>
                <Link to = '/projects'>
                Projects 
                </Link>
            </li>
            <li>
                <Link to = '/contact'>
                Contact 
                </Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {
                click ? ( <FaTimes/>) : ( <FaBars/>)
            }
        </div>
        
    </div>
  )
}

export default Navbar