import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=' bg-[#232536] py-[56px] pt-[60px] px-20'>
            {/* navigation  footer*/}
            <div className='flex items-center justify-between bg-[#232536]'>
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
                </div>
            </div>
            <div className='bg-white bg-opacity-5 mt-[54px] px-16 py-20'>
                <div className='flex gap-6'>
                    <p className='text-[36px] text-white leading-[46px] font-bold font-[Sen]'>Subscribe to our news letter to get latest updates and news</p>

                    <div className='flex items-center gap-6'>
                        <input style={{ background: 'none' }} className='outline-none rounded-md border border-[#4C4C4C] text-[#6D6E76] py-[14px] px-6' type="text" name="" id="" placeholder='Enter Your Email' />
                        <button className='bg-[#FFD050]  px-12 py-4  rounded-md font-bold text-[#232536]'>Subscribe</button>
                    </div>
                </div>

            </div>
            <div className='flex justify-between mt-12'>
                <div>
                    <p className='text-white opacity-60 text-xs'>Finstreet 118 2561 Fintown</p>
                    <p className='text-white opacity-60 text-xs'>Hello@finsweet.com  020 7993 2905</p>
                </div>
                <div className='flex gap-[26px] text-[16px] text-[#6D6E76]'>

                    <p ><FaFacebook /></p>
                    <p><FaTwitter /></p>
                    <p><FaInstagram /></p>
                    <p><FaLinkedin /></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;