import React from 'react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import logo from "../assets/logo.jpeg"
import "../CSS/Navbar.css"
import { Link } from 'react-bootstrap/lib/Navbar'
import Links from './Links'
import { SelectedPage } from '../Types/Enum'
import useMediaQuery from '../Hooks/UseMediaQuery'
import { useState } from 'react'

type Props = {


  setSelectedPage: (value: SelectedPage) => void;
  selectedPage: SelectedPage;

}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {

  const flexBetween = "container-fluid justify-content-center"
  const flexy = "justify-content-around"
  const [isMenuToggled, SetMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)")
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-100 p-3`}>

        <div className={`${flexy} mx-auto col-8`}>
          <div className={`d-flex justify-content-start w-100 gap-16`}>
            <div className='col-1'>
              <img alt="logo" src={logo} className='logo' />
            </div>
            {isAboveMediumScreen ? (
              <div className="d-flex mx-auto justify-content-around col-10">
                <Links
                  className='link'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  page='Home'
                />
                <Links
                  className='link'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  page='About us'
                />
                <Links
                  className='link'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  page='Contact us'
                />
                <Links
                  className='link'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  page='New'
                />
                <div className='col-2 m-auto d-flex justify-content-end d-inline-block'>
                  <button className='Sign_in'>Sign in</button>
                </div>
              </div>

            ) : (
              <div className='col-10 m-auto d-flex justify-content-end'>
                <button
                  onClick={() => SetMenuToggled(!isMenuToggled)}
                  className='btn-floating'
                >
                  test
                  <Bars3Icon className='h-5 w-5 text-black' />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/*Ma khasa bel page hayde lside bar bel small screens */}
      {!isAboveMediumScreen && isMenuToggled && (
        <div className='panel container-fluid fixed z-40 h-100 col-3 d-flex flex-column justify-content-end'>
          <div className='d-flex justify-content-end m-3 p-3'>
            <button onClick={() => SetMenuToggled(!isMenuToggled)}>
              x
              <XMarkIcon />
            </button>
          </div>
          <div className="d-flex flex-column justify-content-end">
            <Links
              className='link'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page='Home'
            />
            <Links
              className='link'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page='About us'
            />
            <Links
              className='link'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page='Contact us'
            />
            <Links
              className='link'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page='New'
            />
            <div className='mb-4 d-flex justify-content-center'>
              <button className='Sign_in'>Sign in</button>
            </div>
          </div>
        </div>

      )}
    </nav >
  )
}

export default Navbar