import React, { useEffect, useRef, useState } from 'react'
import MenuData from './MenuData';
import { Link } from 'react-router-dom';
import SingIn from '../Authetication/SingIn';


function Header() {
  const menu = ["Profile","SignIn","SignUp","LogOut"]
  const [open,setOpen] = useState(false);
  const [showSignInPopup, setShowSignInPopup] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const menuRef = useRef(null)
  const imgRef= useRef(null)
  const popUpRef = useRef(null)
 
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
          setShowSignInPopup(false)
        }
      }
    };
    document.addEventListener("click",handleCLickOutside)
    return () => {
      document.removeEventListener("click",handleCLickOutside)
    }   
  },[])

  return (
    <>
    {/**main div */}
    <div className=' w-screen h-20 bg-slate-100 shadow-md flex justify-end gap-36 py-6 items-center pr-10 sticky' >
      {/**the SeaachBar */}
      <form action='' className=''>
        <input type='text' 
        placeholder='Search'
        name='search'
        aria-label='Search'
        className=' w-80 px-3 py-2  placeholder-gray-500 text-black rounded-2xl border-non ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2'
        >
        </input>
    
      </form> 
      {/**the Profile rapper */}
      <div className='flex justify-center items-center gap-5'>
      <span className='relative pr-0 cursor-pointer'onClick={() => {setShowSignInPopup(!showSignInPopup)}} >SingIn</span>
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
                
                onClick={()=> {
                  setOpen(false)
                  setShowSignInPopup(false)
                  setSelectedItemIndex(index)
                }}
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

      {/**the popUpshow */}
      {showSignInPopup &&(
        <SingIn ref={popUpRef} ></SingIn>
      )}

      {/**showinh the popUp from the drop downmenu */}
      {selectedItemIndex === 0 &&(
        <SingIn ref={popUpRef} ></SingIn>
      )}
       
    </div>
   
    </>
  )
}

export default Header
