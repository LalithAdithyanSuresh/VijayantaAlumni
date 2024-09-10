function NavLinks({text,code,c,setPage,handleNav}) {
    return ( 
        <a onClick={() => {setPage(code);if(handleNav){handleNav();}}} className={c==1 ? "bg-white  p-2 m-2  text-[#3572EF] font-medium cursor-pointer" : "text-gray-700  bg-white p-2 m-2 hover:text-[#3572EF] font-medium cursor-pointer"}>{text}</a>
     );
}

export default NavLinks;