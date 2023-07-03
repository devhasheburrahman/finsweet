import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className='flex items-center justify-between bg-[#232536] h-20 px-20'>
                <div className='text-white font-bold text-[]'>
                    <img src="/Logo.png" alt="" />
                </div>
                <div className='text-white mx-2 flex items-center gap-6'>
                    <Link to='/'>Home</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/blogpost'>Blog-Post</Link>
                    <Link to='/about'>About Us</Link>
                    <Link to='/contact'>Contact Us</Link>
                    <Link to='/Author'>Author</Link>
                    <Link to='/privacy'>Privacy</Link>
                    <Link to='/category'>Category</Link>
                    <button className='bg-white px-12 py-4 ml-2 rounded-md text-[#232536]'>Subscribe</button>
                </div>
            </div>
        </>
    );
};

export default Header;