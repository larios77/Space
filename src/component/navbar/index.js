import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/shared/logo.svg'
import Menu from '../../assets/shared/icon-hamburger.svg'
import closeMenu from '../../assets/shared/icon-close.svg'
import './style.css'

function Navbar() {
  const [menu, setMenu] = useState(false)
  const NavbarMenu = mode => {
    if (mode === 'active') {
      setMenu(true)
    } else if (mode === 'nav__menu') {
      setMenu(false)
    }
  }
  const handleClick = () => {
    setMenu(false)
  }
  return (
    <>
      <nav className="container__navbar">
        <div className="nav__menu-icon">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <div className="nav__toggle">
            {menu ? (
              <img
                src={closeMenu}
                alt="closeMenu"
                onClick={() => NavbarMenu('nav__menu')}
              />
            ) : (
              <img src={Menu} alt="Menu" onClick={() => NavbarMenu('active')} />
            )}
          </div>
        </div>
        <div className={menu ? 'active' : 'nav__menu'}>
          <ul>
            <li className={menu ? 'nav__item' : 'nav__menu'}>
              <Link to="/" className="nav__link" onClick={handleClick}>
                <span>00</span> HOME
              </Link>
            </li>
            <li className={menu ? 'nav__item' : 'nav__menu'}>
              <Link
                to="/destination"
                className="nav__link"
                onClick={handleClick}
              >
                <span>01</span> DESTINATION
              </Link>
            </li>
            <li className={menu ? 'nav__item' : 'nav__menu'}>
              <Link to="/crew" className="nav__link" onClick={handleClick}>
                <span>02</span> CREW
              </Link>
            </li>
            <li className={menu ? 'nav__item' : 'nav__menu'}>
              <Link
                to="/technology"
                className="nav__link"
                onClick={handleClick}
              >
                <span>03</span> TECHNOLOGY
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
export default Navbar
