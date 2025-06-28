import React from 'react';
import 'boxicons/css/boxicons.min.css';


const Footer = () => {
    return (
       <footer className='flex justify-between items-center lg:mt-[15%] mt-[25%] py-8 px-8 md:px-16 lg:px-32
       border-t-[0.3px] border-[#babaff]'>
        <img className = 'h-10' src='/images/illu-text.png'/>
        <img className='h-16 md:inline hidden'  src='/images/illu-logo.png'/>

        <div className='flex gap-4'>
            <a className='text-2xl md:text-3xl  hover:text-violet-600 duration-300'  href='#'>
            <i className='bx bxl-twitter' ></i>
            
            </a> 
            <a className='text-2xl md:text-3xl  hover:text-violet-600 duration-300'  href='#'>
            <i className='bx bxl-linkedin' ></i> 
            
            </a>

            

        </div>
       </footer>
    )
}

export default Footer;

