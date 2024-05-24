import React, { useEffect, useRef, useState } from 'react'
import MenuData from './MenuData';
import { NavLink,Navigate,useNavigate } from 'react-router-dom';
import SingIn from '../Authetication/SingIn';


function Header() {
  const menu = ["Profile","SignIn","SignUp","LogOut"]
  const [open,setOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const menuRef = useRef(null)
  const imgRef= useRef(null)
  const navigate = useNavigate();
 
  {/**useEffect to close the popup and the drop downmenu when one clicks outsdie it */}
  useEffect(()=> {
    const handleCLickOutside = (e) => {
      console.log("CLick Event")
      console.log("Click outside detected");
      if(menuRef.current && imgRef.current ) {
        if(!menuRef.current.contains(e.target) &&
         !imgRef.current.contains(e.target)
         ){
          setOpen(false)
        }
      }
    };
    document.addEventListener("click",handleCLickOutside)
    return () => {
      document.removeEventListener("click",handleCLickOutside)
    }   
  },[])

  const handleMenuItemClick = (index) => {
    setOpen(false);
    setSelectedItemIndex(index);
    if (index === 0) {
      navigate('/ProfilePage')
    } else if(index === 1) {
      navigate('/LoginPage'); 
    } else if(index === 2) {
      navigate('/SignupPage');  
    }
  };

  return (
    <>
    {/**main div */}
    <div className=' w-screen h-20 bg-slate-100 shadow-md flex justify-end gap-36 py-6 items-center pr-10 ' >
      {/**the SeaachBar */}
      
      {/**the Profile rapper */}
      <div className='flex justify-center items-center gap-5 z-10'>
        <NavLink to='/LoginPage'>
          <span className='relative pr-0 cursor-pointer' >SignIn</span>
        </NavLink>
      <img 
        ref={imgRef}
        onClick={() => {setOpen(!open)}}
        src='assets/avatas/avatar1.png' alt='' 
        className=' cursor-pointer w-14 h-14 object-cover border-4 border-gray-500 rounded-full  relative'>
      </img>    
      </div>   
    {/**the dropDown Menu */}
      {open&&(
        <div className=' absolute top-24 z-10'>
        <div className='w-40 h-40 bg-white shadow-2xl absolute top-full right-0'>
          <ul className='flex flex-col gap-2 '>
            {MenuData.map((item, index) => (
              <>
              <li 
                ref={menuRef}               
                onClick={() => handleMenuItemClick(index)}
                key={index} className='cursor-pointer hover:bg-slate-300 h-6 rounded-md'>                
                    <span>{item.title}</span>                  
                </li>
                <hr></hr>
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
