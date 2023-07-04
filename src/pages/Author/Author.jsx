import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Author = () => {
    return (
        <section>
            <div className='h-[550px] bg-[#F4F0F8]'>
                <div className='flex justify-center items-center px-[208px] gap-9 pt-32'>
                    <div>
                        <img className='w-[551px]' src="authorimg-1.png" alt="" />
                    </div>
                    <div>
                        <h1 style={{ letterSpacing: '-2px' }} className='font-[Sen] text-5xl font-bold mb-6 '>Hey there, I’m Andrew Jonhson and welcome to my Blog</h1>

                        <p className='font-[Inter] text-base text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
                        <div className='flex gap-4 mt-6 text-[#232536] '>
                            <p><FaFacebook /></p>
                            <p><FaTwitter /></p>
                            <p><FaInstagram /></p>
                            <p><FaLinkedin /></p>
                        </div>
                    </div>
                </div>

                <div className='flex px-[208px] pt-[118px] items-center'>
                    <div className='bg-[#FFD050] w-[813px]'>
                        c
                    </div>
                    <div className='bg-[#592EA9] w-[271px]'>
                        x
                    </div>
                </div>
            </div>
            {/* post section */}
            <div className='px-52'>
                <h1 style={{ letterSpacing: '-2px', lineHeight: '64px' }} className='text-5xl font-bold text-[Sen] text-[#232536] mt-32'>My Post</h1>
                <div className='flex gap-8 mt-16'>
                    <div>
                        <img src="apost-1.png" alt="" />
                    </div>
                    <div>
                        <p className='font-[Inter] text-base  text-[#592EA9]'>BUSINESS</p>
                        <h1 style={{ letterSpacing: '-2px', lineHeight: '48px' }} className='font-bold font-[Sen] text-4xl text-[#232536]'>Font sizes in UI design: The complete guide to follow</h1>
                        <p className='text-base text-[#6D6E76] font-[Inter]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className='flex gap-8 mb-32 mt-16'>
                    <div>
                        <img src="apost-2.png" alt="" />
                    </div>
                    <div>
                        <p className='font-[Inter] text-base  text-[#592EA9]'>ECONOMY</p>
                        <h1 style={{ letterSpacing: '-2px', lineHeight: '48px' }} className='font-bold font-[Sen] text-4xl text-[#232536]' >How to build rapport with your web design clients</h1>
                        <p className='text-base text-[#6D6E76] font-[Inter]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Author;