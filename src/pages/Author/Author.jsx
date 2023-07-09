import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Author = () => {
    return (
        <section>

            <div className='md:h-[550px] bg-[#F4F0F8]'>
                <div className='md:flex justify-center items-center px-5 md:px-[208px] gap-9 pt-32'>
                    <div >
                        <img className='w-[551px]' src="authorimg-1.png" alt="" />
                    </div>
                    <div >
                        <h1 className='md:tracking-[-2px] font-[Sen] md:text-5xl mt-4 text-2xl font-bold mb-6 '>Hey there, I’m Andrew Jonhson and welcome to my Blog</h1>

                        <p className='font-[Inter] text-base text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
                        <div className='flex gap-4 mt-6 text-[#232536] '>
                            <p><FaFacebook /></p>
                            <p><FaTwitter /></p>
                            <p><FaInstagram /></p>
                            <p><FaLinkedin /></p>
                        </div>
                    </div>
                </div>

                <div className='flex px-5 md:px-[208px] pt-5 md:pt-[118px] items-center rounded'>
                    <div className='bg-[#FFD050] w-[813px]'>
                        <p className='text-[#FFD050]'>c</p>
                    </div>
                    <div className='bg-[#592EA9] w-[271px]'>
                        <p className='text-[#592EA9]'>a</p>
                    </div>
                </div>
            </div>

            {/* post section ❤️‍🔥 */}
            <div className='md:px-52 px-5'>
                <h1 className='md:leading-[64px] md:tracking-[-2px] md:text-5xl text-2xl font-bold text-[Sen] text-[#232536] mt-32'>My Post</h1>
                <div className='md:flex gap-8 mt-16'>
                    <div>
                        <img src="apost-1.png" alt="" />
                    </div>
                    <div>
                        <p className='font-[Inter] text-base mt-4  text-[#592EA9]'>BUSINESS</p>
                        <h1 className='md:leading-[48px] md:tracking-[-2px] font-bold font-[Sen] md:text-4xl text-2xl text-[#232536]'>Font sizes in UI design: The complete guide to follow</h1>
                        <p className='text-base mt-4 text-[#6D6E76] font-[Inter]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className='md:flex gap-8 mb-32 mt-16'>
                    <div>
                        <img src="apost-2.png" alt="" />
                    </div>
                    <div>
                        <p className='font-[Inter] text-base mt-4  text-[#592EA9]'>ECONOMY</p>
                        <h1 className='md:leading-[48px] md:tracking-[-2px] font-bold font-[Sen] md:text-4xl text-2xl text-[#232536] mt-4' >How to build rapport with your web design clients</h1>
                        <p className='mt-4 text-base text-[#6D6E76] font-[Inter]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Author;