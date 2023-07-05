import React from 'react';
import Team from '../Team/Team';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Blog = () => {
    return (
        <div>
            <section className='h-[519px] bg-[#F4F0F8]'>
                <div className='flex gap-36 px-20 pt-24'>
                    <div>
                        <p style={{ letterSpacing: '3px', lineHeight: '20px' }} className='font-[Sen] text-base font-medium mb-5 ' >FEATURED POST</p>


                        <h1 style={{ letterSpacing: '-1px', lineHeight: '48px' }} className=' text-[28px] font-bold font-[Sen] text-[#161722] '>A UX Case Study Creating a Studious Environment for Students: </h1>
                        <p className='text-sm text-[Inter] text-[#592EA9] mt-4 mb-4' >By John Doe   l   Aug 23, 2021 </p>
                        <p className='text-sm text-[Inter] text-[#6D6E76]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

                        <button className='flex items-center px-12 bg-[#FFD050] py-4 text-lg font-bold font-[Sen] mt-8'>  Read More <FaAngleRight /> </button>
                    </div>

                    <img src="blog1.png" alt="" />
                </div>

                {/* post section */}
            </section>

            <section className='px-20 mr-40'>

                <h1 style={{ letterSpacing: '-2px', lineHeight: '48px' }} className=' mt-16 text-4xl font-bold font-[Sen] '> All Post</h1>

                <hr className='h-1 text-[#6D6E76] mt-8 mb-16' />

                <div className='flex gap-8 justify-center items-center mt-16 '>
                    <div>
                        <img className='w-[490px]' src="category.png" alt="" />
                    </div>
                    <div >
                        <p style={{ letterSpacing: '3px' }} className='font-[Inter] text-base  text-[#592EA9]'>STARTUP</p>
                        <h1 style={{ letterSpacing: '-2px', lineHeight: '48px' }} className='font-bold font-[Sen] text-4xl text-[#232536]'>Design tips for designers that cover everything you need</h1>
                        <p className='text-base text-[#6D6E76] font-[Inter] mt-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                </div>
                <div className='flex gap-8 justify-center items-center mt-16'>
                    <div>
                        <img className='w-[490px]' src="client2.png" alt="" />
                    </div>
                    <div >
                        <p style={{ letterSpacing: '3px' }} className='font-[Inter] text-base  text-[#592EA9]'>BUSINESS</p>
                        <h1 style={{ letterSpacing: '-2px', lineHeight: '48px' }} className='font-bold font-[Sen] text-4xl text-[#232536]'>How to build rapport with your web design clients</h1>
                        <p className='text-base text-[#6D6E76] font-[Inter] mt-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                </div>
                <div className='flex gap-8 justify-center items-center mt-16 '>
                    <div>
                        <img className='w-[490px]' src=" client1.png" alt="" />
                    </div>
                    <div >
                        <p style={{ letterSpacing: '3px' }} className='font-[Inter] text-base  text-[#592EA9]'>BUSINESS</p>
                        <h1 style={{ letterSpacing: '-2px', lineHeight: '48px' }} className='font-bold font-[Sen] text-4xl text-[#232536]'>Logo design trends to avoid in 2022</h1>
                        <p className='text-base text-[#6D6E76] font-[Inter] mt-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                </div>
                <div className='flex gap-8 justify-center items-center mt-16 '>
                    <div>
                        <img className='w-[490px]' src="about2.png" alt="" />
                    </div>
                    <div >
                        <p style={{ letterSpacing: '3px' }} className='font-[Inter] text-base  text-[#592EA9]'>TECHNOLOGY</p>
                        <h1 style={{ letterSpacing: '-2px', lineHeight: '48px' }} className='font-bold font-[Sen] text-4xl text-[#232536]'>8 Figma design systems you can download for free today</h1>
                        <p className='text-base text-[#6D6E76] font-[Inter] mt-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                </div>
                <div className='flex gap-8 justify-center items-center mt-16'>
                    <div>
                        <img className='w-[490px]' src="apost-2.png" alt="" />
                    </div>
                    <div >
                        <p style={{ letterSpacing: '3px' }} className='font-[Inter] text-base  text-[#592EA9]'>ECONOMY</p>
                        <h1 style={{ letterSpacing: '-2px', lineHeight: '48px' }} className='font-bold font-[Sen] text-4xl text-[#232536]'>Font sizes in UI design: The complete guide to follow</h1>
                        <p className='text-base text-[#6D6E76] font-[Inter] mt-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                </div>



            </section>

            <div className='mt-[69px] text-center flex  justify-center items-center gap-4 text-2xl font-bold'>
                <FaAngleLeft className='text-[#6D6E76]' /><span className='text-[#6D6E76]'>Per</span> <span>Next</span> <FaAngleRight />
            </div>

            <section className='px-20 mt-16'>
                <h1 style={{ letterSpacing: '-2px', lineHeight: '48px' }} className=' mt-16 text-4xl font-bold font-[Sen] mb-12 '>All Categories</h1>

                <div className='flex gap-8' >

                    <div className=' w-[296px] h-[228px] border border-[#6D6E76] p-8'>
                        <img src="icon1.svg" alt="" />
                        <h1 className=' font-bold font-[Sen] text-[28px] mt-2'>Business </h1>
                        <p className='text-base text-[#6D6E76] font-[Inter] mt-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    </div>
                    <div className=' w-[296px] h-[228px] border border-[#6D6E76] p-8 bg-[#FFD050]'>
                        <img className='bg-[#FBF6EA] p-3 rounded-xl' src="icon2.svg" alt="" />
                        <h1 className=' font-bold font-[Sen] text-[28px] mt-2'>Startup </h1>
                        <p className='text-base text-[#6D6E76] font-[Inter] mt-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    </div>
                    <div className=' w-[296px] h-[228px] border border-[#6D6E76] p-8'>
                        <img className='bg-[#FBF6EA] p-3 rounded-xl' src="icon3.svg" alt="" />
                        <h1 className=' font-bold font-[Sen] text-[28px] mt-2'>Startup </h1>
                        <p className='text-base text-[#6D6E76] font-[Inter] mt-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    </div>
                    <div className=' w-[296px] h-[228px] border border-[#6D6E76] p-8'>
                        <img className='bg-[#FBF6EA] p-3 rounded-xl' src="icon4.svg" alt="" />
                        <h1 className=' font-bold font-[Sen] text-[28px] mt-2'>Technology </h1>
                        <p className='text-base text-[#6D6E76] font-[Inter] mt-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    </div>


                </div>

            </section>
            <Team />
        </div>
    );
};

export default Blog;