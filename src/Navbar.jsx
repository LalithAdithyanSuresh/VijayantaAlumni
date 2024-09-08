function Navbar(){
    return(
        <div class="flex justify-between h-16 px-3 m-auto max-w-6xl border-b-slate-500 border-b-2">
            <div class="flex items-center">
                <a href="#" class="flex-shrink-0 font-bold ">
                    VIJAYANTA ALUMNI
                </a>
            </div>
            <div class="flex items-center space-x-4">
                <a href="#" class="text-gray-700  bg-white p-4 hover:text-white hover:bg-[#3572EF] hover:font-bold">Home</a>
                <a href="#" class="text-gray-700  bg-white p-4 hover:text-white hover:bg-[#3572EF] hover:font-bold">Events</a>
                <a href="#" class="text-gray-700  bg-white p-4 hover:text-white hover:bg-[#3572EF] hover:font-bold">Gallery</a>
                <a href="#" class="text-gray-700  bg-white p-4 hover:text-white hover:bg-[#3572EF] hover:font-bold">Sign Up</a>
            </div>
        </div>
    )
}

export default Navbar;