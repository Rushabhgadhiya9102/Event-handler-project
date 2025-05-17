import React from 'react'
import Logo from '../assets/react.svg'

const Navigation = ({handleToggleTheme, BtnMode}) => {
  
  return (
    <>
      <section className='navigation w-full shadow-sky-300 shadow-lg'>

        <div className='py-3 px-20 bg-gra-200 flex items-center gap-5'>
          <div className='logo'>
            <img src={Logo} className='size-7' alt="React logo" />
          </div>

          <div className='secrch-section'>
            <form>
              <input 
              type="search"
              className='bg-white border mx-5 rounded-2xl py-1 px-3 w-200'
              placeholder='Search'
            />
            </form>
          </div>

          <ul className='ms-auto flex gap-5'>
            <li className='nav-item'>
              <a href="#" className='nav-link hover:text-sky-400 duration-200'>
                Learn
              </a>
            </li>
            <li className='nav-item'>
              <a href="#" className='nav-link hover:text-sky-400 duration-200'>
                Reference
              </a>
            </li>
            <li className='nav-item'>
              <a href="#" className='nav-link hover:text-sky-400 duration-200'>
                Community
              </a>
            </li>
            <li className='nav-item'>
              <a href="#" className='nav-link hover:text-sky-400 duration-200'>
                Blog
              </a>
            </li>
            <li className='nav-item'>
              <a href="#" className='nav-link border-l-1 px-2 py-1' ref={BtnMode} onClick={handleToggleTheme}>
                Dark Mode
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Navigation
