import React,{ useState }  from 'react'
import SideBarData from './SideBarData'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'

function SideBar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLinkClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Header></Header>
      <nav className="w-1/5 h-screen fixed  bg-slate-500 top-0 z-10">
      <img src="assets/logo.png" alt="" className=" w-52 h-auto pl-10  pt-8 pb-4" />
      <hr className="border-t border-gray-600 mb-4" />
        <ul className="flex flex-col">
          {SideBarData.map((item, index) => (
            <li
            key={index}
            className={`h-12 flex items-center pl-10 ${
              index === activeIndex ? "bg-blue-500" : ""
            }`}           
            >
              <Link
                to={item.path}
                className="w-full h-full flex items-center px-4 text-white"
                onClick={() => handleLinkClick(index)}
              >
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
     </>
  );
}

export default SideBar;