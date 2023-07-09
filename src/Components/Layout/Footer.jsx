import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=' bg-[#232536]  py-[56px] pt-[60px] px-4 md:px-20'>
            {/* navigation  footer ❤️‍🔥*/}
            <div className='md:flex flex-row items-center justify-between bg-[#232536]'>
                <div className='text-white font-bold text-[]'>
                    <img src="/Logo.png" alt="" />
                </div>
                <div className='md:flex flex-col mt-5 mb-5 md:flex-row text-white mx-2 items-center md:gap-6'>

                    <Link to='/'><div>Home</div></Link>
                    <Link to='/blog'><div>Blog</div></Link>
                    <Link to='/blogpost'><div>Blog-Post</div></Link>
                    <Link to='/about'><div>About Us</div></Link>
                    <Link to='/contact'><div>Contact Us</div></Link>
                    <Link to='/Author'><div>Author</div></Link>
                    <Link to='/privacy'><div>Privacy</div></Link>
                    <Link to='/category'><div>Category</div></Link>
                </div>
            </div>
            
            <div className='bg-white  bg-opacity-5 md:mt-[54px] md:px-16 md:py-20'>
                <div className='md:grid grid-cols-2  p-2   w-full gap-6'>
                    <p className='md:text-[36px] text-base text-white md:leading-[46px] font-bold font-[Sen]'>Subscribe to our news letter to get latest updates and news</p>

                    <div className='md:flex flex-col md:flex-row  mt-4 items-center  md:gap-6'>
                        <input style={{ background: 'none' }} className='outline-none rounded-md border border-[#4C4C4C] text-[#6D6E76] w-full py-[14px] px-6' type="text" name="" id="" placeholder='Enter Your Email' />
                        <button className='bg-[#FFD050] md:mt-0 mt-3  px-12 py-4 w-full rounded-md font-bold text-[#232536]'>Subscribe</button>
                    </div>
                </div>

            </div>

            <div className='md:flex flex-col md:flex-row gap-3 justify-between  mt-12'>
                <div>
                    <p className='text-white opacity-60 text-xs'>Finstreet 118 2561 Fintown</p>
                    <p className='text-white opacity-60 text-xs'>Hello@finsweet.com  020 7993 2905</p>
                </div>
                <div className='flex gap-[26px] mt-4 text-[16px] text-[#6D6E76]'>

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