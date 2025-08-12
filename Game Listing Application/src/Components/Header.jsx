import React, { useContext, useEffect, useState } from "react";
import logo from "./../assets/Images/Hyper.png";
import { IoSearch } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";
import { LuSun } from "react-icons/lu";
import { ThemeContext } from "../Context/ThemeContext";
function Header({ setSearchTerm }) {
  const [toggle, setToggle] = useState(true);
  const { theme, setTheme } = useContext(ThemeContext);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("Theme", theme);
  }, []);
  return (
    <div className="flex items-center p-3">
      <img src={logo} width={60} height={60} className="rounded-lg" />
      <div
        className="flex bg-slate-200 p-2 w-full 
      mx-5 rounded-full items-center"
      >
        <IoSearch className="text-black" />
        <input
          type="text"
          placeholder="Search games here..."
          className="px-2 bg-transparent outline-none text-black"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setSearchTerm(e.target.value); // 👈 Pass value up
          }}
        />
      </div>
      <div>
        {theme == "light" ? (
          <BsMoonStars
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <LuSun
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
