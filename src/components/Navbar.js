import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {MdFingerprint} from 'react-icons/md'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import {Button} from './Button'
import './Navbar.css'
function Navbar() {
  const [click,setClick] = useState(false)
  const [button,setButton] = useState(true)
  const handleClick = () => {
    setClick(!click)
  }
  const closeMobileMenu = () => setClick(false)
  const showButton = () =>{
    if(window.innerWidth <= 960){
      setButton(false)
    }else{
      setButton(true)
    }
  }
  window.addEventListener('resize', showButton)
    return (
        <>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <MdFingerprint className="navbar-icon"/>
              LAVIS
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <AiOutlineClose className="fa-times"/> : <FaBars className="fa-bars"/>}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-links" onClick={closeMobileMenu}>Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-links" onClick={closeMobileMenu}>Products</Link>
              </li>
              <li className="nav-btn">
                {button ? (<Link to="/sign-up" className="btn-link" >
                  <Button buttonStyle="btn--outline">SIGN UP</Button>
                </Link>) : (<Link to="/sign-up" className="btn-link" onClick={closeMobileMenu}>
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    SIGN UP
                  </Button>
                </Link>)}
              </li>
            </ul>
          </div>
        </div>
        
            
        </>
    )
}

export default Navbar

