import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handlePosition = () => {
      setPosition(document.documentElement.scrollTop);
    };
    document.addEventListener("scroll", handlePosition);

    return () => {
      document.removeEventListener("scroll", handlePosition);
    };
  }, [position]);

  console.log(position);

  return (
    <header className={` header ${position > 50 ? "changecolor" : ""}  `}>
      <div className='header__left'>
        <div className='logo'>
          <img
            src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
            alt='Netflix Logo'
          />
        </div>

        {/* <nav>
          <ul>
            <li>
              {" "}
              <a href='#'> </a>{" "}
            </li>
            <li>
              {" "}
              <a href='#'> </a>{" "}
            </li>
            <li>
              {" "}
              <a href='#'> </a>{" "}
            </li>
            <li>
              {" "}
              <a href='#'> </a>{" "}
            </li>
            <li>
              {" "}
              <a href='#'> </a>{" "}
            </li>
          </ul>
        </nav>
        */}
      </div>

      <div className='header__right'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
          alt='Netflix User'
          className='usericon'
        />
      </div>
    </header>
  );
}

export default Header;
