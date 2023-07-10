import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react'


const MobileHeader = () => {
    const [isOpen, setOpen] = useState(false)

    return (

        <div className='relative'>
            <div className='bg-[#232536] py-2 fixed w-full top-0 left-0 z-50 flex justify-between items-center px-4'>
                <div className='font-bold '>
                    <img src="/Logo.png" alt="ccc" />
                </div>
                <div className='text-white'>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>

            </div>
            <div className={`transition-all duration-700 text-white fixed w-full ${isOpen ? 'top-0' : '-top-[500px]'} flex flex-col bg-[#232536] pt-4  px-8 gap-6`}>
                <Link to='/'> <div className='border-b border-[#5a5e8a] pb-2'>Home</div></Link>
                <Link to='/blog'><div className='border-b border-[#5a5e8a] pb-2'> Blog</div></Link>
                <Link to='/blogpost'> <div className='border-b border-[#5a5e8a] pb-2'>Blog-Post</div></Link>
                <Link to='/about'> <div className='border-b border-[#5a5e8a] pb-2'>About Us</div></Link>
                <Link to='/contact'> <div className='border-b border-[#5a5e8a] pb-2'>Contact Us</div></Link>
                <Link to='/Author'> <div className='border-b border-[#5a5e8a] pb-2'>Author</div></Link>
                <Link to='/privacy'> <div className='border-b border-[#5a5e8a] pb-2'>Privacy</div></Link>
                <Link to='/category'> <div className='border-b border-[#5a5e8a] pb-2'>Category</div></Link>
                <button className='bg-white w-full mb-5 pb-10 py-4 ml-2 rounded-md text-[#5a5e8a]  '>Subscribe</button>




            </div>
        </div>
    );
};

export default MobileHeader;