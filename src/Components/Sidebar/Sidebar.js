import React, { useState } from 'react';
import { MdHome ,MdProductionQuantityLimits,MdOutlineContactPhone ,MdModeComment} from "react-icons/md";
import { RiCharacterRecognitionFill } from "react-icons/ri";

import './Sidebar.css'

function Sidebar() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (

    <div className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
      
      <div className="toggle-button" onClick={toggleSidebar}>
        <span>&#x2261;</span>
      </div>
        <ul>
        <li>
          <a href="#home" className="page-scroll"><MdHome className='sidebarIcon'/>
          </a>
        </li>
        <li>
          <a href="#about" className="page-scroll"><RiCharacterRecognitionFill className='sidebarIcon'/>
          </a>
        </li>
        <li>
          <a href="#product" className="page-scroll"><MdProductionQuantityLimits className='sidebarIcon'/>
            
          </a>
        </li>
        <li>
          <a href="#contact" className="page-scroll"><MdOutlineContactPhone className='sidebarIcon'/>
            
          </a>
        </li>
        <li>
          <a href="#testimonials" className="page-scroll"><MdModeComment className='sidebarIcon'/>
            
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar