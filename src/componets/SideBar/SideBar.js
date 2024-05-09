import React,{ useState }  from 'react'
import './SideBar.css'
import SideBarData from './SideBarData'
import { Link } from 'react-router-dom'

function SideBar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLinkClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-1/5 h-screen bg-transparent fixed rounded-r-lg">
      <nav className="bg-gray-800 h-full">
      <img src="assets/logo.png" alt="" className=" w-48 h-auto pl-4 pt-4" />
      <hr className="border-t border-gray-600 mb-4" />
        <ul className="flex flex-col">
          {SideBarData.map((item, index) => (
            <li
            key={index}
            className={`h-12 flex items-center pl-4 ${
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
    </div>
  );
}

export default SideBar;