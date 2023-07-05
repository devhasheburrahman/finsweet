import React from 'react';
import Team from '../Team/Team';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Home = () => {
    return (
        <div className='mx-20'>
            <section className='h-[464px] bg-[#FBF6EA]'>

                <div className='flex gap-[84px] pt-[92px]'>
                    <div className='px-[112px] border-r-2  ' >

                        <p style={{ letterSpacing: '3px', lineHeight: '20px' }} className='font-[Inter] text-base  text-[#232536]'>TESTIMONIALS</p>
                        <h1 style={{ letterSpacing: '-2px', lineHeight: '48px' }} className='text-4xl font-[Sen] font-bold mt-3 '>What people say about our blog</h1>
                        <p className='text-[Inter] text-base mt-4 text-[#232536] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div className='px-[96px]'>
                        <h1 className='text-2xl font-bold font-[Sen] text-[#232536] mb-[121px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </h1>

                        <div className='flex items-center gap-36 '>

                            <div className='flex items-center gap-4  '>

                                <img className='h-20' src="Image.png" alt="" />

                                <div>
                                    <h1 style={{ letterSpacing: '-2px', lineHeight: '64px' }} className=' mt-6 text-[28px] text-[#232536] font-bold font-[Sen] '>Jonathan Vallem</h1>
                                    <p className='text-base  text-[Inter] text-[#6D6E76]'>New york, USA</p>
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <FaArrowRight className='bg-[#FFFFFF] h-14 w-14 p-2 rounded-full' />
                                <FaArrowLeft className='bg-[#232536]  h-14 w-14 p-2 rounded-full text-white' />

                            </div>
                        </div>
                    </div>
                </div>

            </section>








            <Team />
        </div>
    );
};

export default Home;