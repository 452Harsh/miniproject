import React, { use, useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  MenuIcon,
  UserIcon,
} from "@heroicons/react/solid";
import UserPage from "./UserPage";
import DropdownIcon from "./DropdownIcon";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  function toggleLogin() {
  {setShowLogin(!showLogin);}
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5  md:px-10">
      <div className="relative flex items-centre h-10 cursor-pointer my-auto">
        <span className="text-4xl font-serif font-medium">Manzil</span>
      </div>
      <div className="flex items-center md:border-2 rounded-full py-2  shadow-sm">
        <input
          className="flex-grow pl-2 outline-none bg-transparent text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={"Search"}
        />
        <SearchIcon className="hidden md:inline  h-8 bg-gray-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        {/* <div className="mr-4 border rounded-full p-2"> */}
        <DropdownIcon/>
        {/* </div> */}
        
        <UserCircleIcon onClick={  toggleLogin  } className="h-10 cursor-pointer" />
        {showLogin && (<UserPage toggleLogin={toggleLogin} /> ) }
        
      </div>
    </header>
   
  );
};

export default Navbar;
