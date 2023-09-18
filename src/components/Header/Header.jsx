/* eslint-disable react/prop-types */
import { useEffect,useState } from 'react';
import { IoMoonOutline } from 'react-icons/io5'; 

const Header = () => {
    //localStorage.getItem("theme") || "light" OR
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")


  const handleToggle = () => {
    const newTheme = theme === "black" ? "light" : "black";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);


  return (
    <div className='header'>
        <div className='font-bold md:px-[3rem]'>Where in the world?</div>
        <div className='font-semibold md:px-[3rem] flex flex-row gap-2 items-center' onClick={()=> {handleToggle()}}> <IoMoonOutline /> Dark Mode</div>
    </div>
  )
}

export default Header;
