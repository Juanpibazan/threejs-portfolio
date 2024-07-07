import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import {jplogo, menu, close} from '../assets'

const Navbar = () => {

  const [active, setActive] = useState();
  const [toggle, setToggle] = useState(false);

  return (
    <header className={`${styles.paddingX} w-full`}>
      <nav className='flex justify-between items-center'>
        <Link className='flex justify-start items-center gap-5'>
          <div>
            <img
            src={jplogo}
            alt='logo'
            width={70}
            height={70}
            className='object-contain'
            onClick={()=>{
            setActive('');
            window.scrollTo(0,0);
          }}
            />
          </div>
          <h2 className='font-bold'>Juan Pablo <span className='text-[#6ee2f5]'>Bazán Davezies</span></h2>
        </Link>
        <ul className='flex justify-evenly items-center gap-5 max-sm:hidden list-none'>
          {navLinks.map((link)=>(
            <li key={link.id}>
              <Link id={link.id} to={`/${link.id}`}
              className={`${active===link.id
                ?'text-white font-bold'
                :'text-slate-500'
              } hover:text-white`}
              onClick={()=>{
                setActive(link.title)
              }}
              >{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className='sm:hidden cursor-pointer'>
          <img
          src={toggle ? close :menu}
          alt='burger menu'
          onClick={()=>setToggle(!toggle)}
          />
          {toggle && (
            <ul className='flex flex-col justify-start items-end gap-2 absolute right-3 mt-4 list-none bg-gradient-to-r from-slate-700 to-black w-[100px] rounded-md px-3 py-3' >
            {navLinks.map((link)=>(
              <li key={link.id}>
                <Link id={link.id} to={`/${link.id}`}
                className={`${active===link.id
                  ?'text-white font-bold'
                  :'text-slate-500'
                } hover:text-white`}
                onClick={()=>{
                  setActive(link.title)
                }}
                >{link.title}</Link>
              </li>
            ))}
          </ul>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar