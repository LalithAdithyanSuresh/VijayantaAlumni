import { NavLink } from 'react-router-dom';
function NavLinks({text,code,c,setPage,handleNav,route}) {
    return ( 
        <NavLink to={route} className={c==1 ? "bg-white  p-2 m-2  text-[#3572EF] font-medium cursor-pointer" : "text-gray-700  bg-white p-2 m-2 hover:text-[#3572EF] font-medium cursor-pointer"} >
            {text}
        </NavLink>
     );
}

export default NavLinks;