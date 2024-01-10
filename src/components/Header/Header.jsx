import React, { useState } from 'react';
import "./Header.css"
import { MdKeyboardArrowDown } from 'react-icons/md'; // Import the arrow icon from react-icons

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="all-header">
      <div className="magical-logo"></div>
      <div className="header-info">
        <div className="services">
          <p>Services</p>
          <div className="all-dropdown">
            <MdKeyboardArrowDown className="arrow" onClick={toggleDropdown} />
            {isOpen && (
                <div className="dropdown-menu" >
                    <div>IT Consulting</div>
                    <hr />
                    <div>Web Development</div>
                    <hr />
                    <div>Mobile Development</div>
                    <hr />
                    <div>QA & Testing</div>
                    <hr />
                    <div>UI/UX Design</div>
                </div>
            )}
          </div>
        </div>
        <div className="header-text">
            <p>Portfolio</p>
            <p>About Us</p>
            <p>Courses</p>
            <p>Contacts</p>
        </div>
      </div>
      <div className="get-started">
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default Header;