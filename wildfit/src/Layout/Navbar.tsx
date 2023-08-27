import React from 'react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import logo from "../assets/logo.jpeg"
import "../CSS/Navbar.css"
import { Link } from 'react-bootstrap/lib/Navbar'
import Links from './Links'
import { SelectedPage } from '../Types/Enum'
type Props = {


setSelectedPage : (value:SelectedPage)=> void;
selectedPage : SelectedPage;

}

const Navbar = ({ selectedPage, setSelectedPage}: Props) => {

  const flexBetween = "container-fluid justify-content-center"
  const flexy = "justify-content-around"

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-100 p-3`}>

        <div className={`${flexy} mx-auto col-8`}>
          <div className={`d-flex justify-content-start w-100 gap-16`}>
            <div className='col-1'>
            <img alt="logo" src={logo} className='logo' />
            </div>
            <div className="d-flex mx-auto justify-content-around col-8 ">
              <Links  className='link' selectedPage={selectedPage} setSelectedPage={setSelectedPage} page='Home'/>
              <Links className='link' selectedPage={selectedPage} setSelectedPage={setSelectedPage} page='About us'/>
              <Links className='link' selectedPage={selectedPage} setSelectedPage={setSelectedPage} page='Contact us'/>
              <Links className='link' selectedPage={selectedPage} setSelectedPage={setSelectedPage} page='New'/>
            </div>
            <div className='col-1 m-auto d-inline-block'>
              <button className='Sign_in '>Sign in</button>
            </div>
          </div>
        </div>
      


      </div>
    </nav >
  )
}

export default Navbar