import React, { useEffect, useRef, useState } from 'react'
import MenuData from './MenuData';
import { Link } from 'react-router-dom';

function Header() {
  const menu = ["Profile","SignIn","SignUp","LogOut"]
  const [open,setOpen] = useState(false);
  const menuRef = useRef(null)
  const imgRef= useRef(null)

  useEffect(()=> {
    const handleCLickOutside = (e) => {
      console.log("CLick Event")
      if(menuRef.current && imgRef.current) {
        if(!menuRef.current.contains(e.target) && !imgRef.current.contains(e.target)){
          setOpen(false)
        }
      }
    };
    document.addEventListener("click",handleCLickOutside)
    return (
      document.removeEventListener("click", handleCLickOutside)
    )
  },[])

  return (
    <>
    <div className=' w-screen h-20 bg-slate-100 shadow-md flex justify-end gap-36 py-6 items-center relative pr-10'>

      <form action='' className=''>
        <input type='text' 
        placeholder='Search'
        name='search'
        aria-label='Search'
        className=' w-80 px-3 py-2  placeholder-gray-500 text-black rounded-2xl border-non ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2'
        >
        </input>
    
      </form> 

      <div className='flex justify-center items-center gap-5'>
      <span className='relative pr-0 cursor-pointer'>SingIn</span>
      <img 
        ref={imgRef}
        onClick={() => {setOpen(!open)}}
        src='assets/avatas/avatar1.png' alt='' 
        className=' cursor-pointer w-14 h-14 object-cover border-4 border-gray-500 rounded-full  relative'>
      </img>    
      </div>
    
      {open&&(
        <div className=' absolute top-24'  ref={menuRef}>
        <div className='w-40 h-40 bg-white shadow-lg absolute top-full right-0'>
          <ul className='flex flex-col gap-2 '>
            {MenuData.map((item, index) => (
              <>
              <li 
                ref={menuRef}
                onClick={()=> {setOpen(false)}}
                key={index} className='cursor-pointer hover:bg-slate-300'>
                  <Link to={item.path}>
                    <span>{item.title}</span>

                  </Link>
                </li>
              <hr/>
              </>
            ))}
          </ul>
        </div>
      </div>
      )}    
    </div>
   
    </>
  )
}

export default Header
