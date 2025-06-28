import 'boxicons/css/boxicons.min.css';

const Header = () => {
    // toggle mobile menu

    const toggleMenu = () => {
        const mobileMenu = document.getElementById('mobileMenu');
        const menuIcon = document.getElementById('menuIcon');
        if(mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
           menuIcon.classList.remove('bx-menu');
           menuIcon.classList.add('bx-x');
            
            
        } else {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('bx-x');
            menuIcon.classList.add('bx-menu');
        }
        
    }

 

    return (
        <header className="py-1 px-7 flex items-center justify-between sticky top-0 w-full z-50 border-b-[0.3px] border-[#babaff] bg-black">
            {/* Left Side */}
            <div className="flex items-center lg:gap-14 gap-4">
                <img className="w-12 md:w-16" src="/images/logo.png" alt="logo" />

                {/* buttons */}
                <div className="md:flex gap-5 hidden items-center">
                    <button className="bg-gradient-to-r from-purple-500 to-indigo-600 cursor-pointer h-8 px-6 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300">
                        PLAY NOW
                    </button>
                    <button className="bg-gradient-to-r from-gray-600 to-gray-400 cursor-pointer h-8 px-6 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300">
                        PLAY NOW
                    </button>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
                {/* Desktop Nav */}
                <nav className='hidden md:flex lg:gap-8 md:gap-4'>
                    <a href="#" className='relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 text-nowrap'>
                        <i className='bx bx-user-circle'></i> Avatar
                    </a>
                    <a href="#" className='relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 text-nowrap'>
                        <i className='bx bx-diamond'></i> Arena
                    </a>
                    <a href="#" className='relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 text-nowrap'>
                        <i className='bx bx-chevrons-up'></i> Beyond
                    </a>
                    <a href="#" className='relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 text-nowrap'>
                        <i className='bx bx-shopping-bag'></i> Shop
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button onClick = {toggleMenu} className='text-3xl p-2 md:hidden'>
                    <i className='bx bx-menu' id='menuIcon'></i>
                    
                </button>

                {/* <button className='text-3xl p-2 md:hidden'>
                <i className='bx bx-x hidden'></i>
                    
                </button> */}

               



                {/* side menu by default hidden*/}

                <div id='mobileMenu' className='fixed top-14 right-0 left-0 bg-black p-5 hidden'>
                    <nav className='flex flex-col gap-4 items-center md:hidden'>
                        <a href="#" className='relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 text-nowrap'>
                            <i className='bx bx-user-circle'></i> Avatar
                        </a>
                        <a href="#" className='relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 text-nowrap'>
                            <i className='bx bx-diamond'></i> Arena
                        </a>
                        <a href="#" className='relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 text-nowrap'>
                            <i className='bx bx-chevrons-up'></i> Beyond
                        </a>
                        <a href="#" className='relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 text-nowrap'>
                            <i className='bx bx-shopping-bag'></i> Shop
                        </a>
                    </nav>

                    <div className='flex flex-col w-full gap-3 mt-4'>
                        <button className='bg-purple-700 py-2 rounded '>
                            Play Now
                        </button>

                        <button className='bg-gray-500 py-2 rounded '>
                            NFT STORE
                        </button>

                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header;
