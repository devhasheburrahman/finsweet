import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const Category = () => {
    return (
        <section>
            {/* category header ❤️‍🔥 */}

            <div className='md:h-[348px] bg-[#F4F0F8]'>
                <div className='text-center px-5 pb-5 md:px-[462px]'>
                    <h1 className='text-3xl md:text-[56px] md:leading-[64px] md:tracking-[-2px] font-[Sen] font-bold pt-20'>Business</h1>
                    <p className='text-[#6D6E76] font-[Inter] text-base mt-4' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>

                    <p className='md:leading-[20px] md:tracking-[-2px] md:text-2xl mt-8 flex items-center justify-center'>BLOG  <FaAngleRight /> BUSINESS </p>
                </div>

            </div>

            {/* category ❤️‍🔥 */}

            <div className='md:flex gap-36 md:px-20 px-5 pt-32 pb-32'>
                <div className='md:w-3/4'>
                    <div className='md:flex gap-8  justify-between '>
                        <div>
                            <img src="category.png" alt="" />
                        </div>
                        <div>
                            <p className='font-[Inter] text-base mt-5  text-[#592EA9]'>BUSINESS</p>
                            <h1 className='md:leading-[48px] md:tracking-[-2px] font-bold font-[Sen] md:text-4xl text-2xl mt-5 text-[#232536]'>Top 6 free website mockup tools 2022</h1>
                            <p className='text-base mt-5 text-[#6D6E76] font-[Inter]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className='md:flex gap-8 mt-8 justify-between '>
                        <div>
                            <img src="category.png" alt="" />
                        </div>
                        <div>
                            <p className='font-[Inter] text-base mt-5  text-[#592EA9]'>BUSINESS</p>
                            <h1 className='md:leading-[48px] mt-5 md:tracking-[-2px] font-bold font-[Sen] text-2xl md:text-4xl text-[#232536]'>Step-by-step guide to choosing great font pairs</h1>
                            <p className='text-base mt-5 text-[#6D6E76] font-[Inter]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className='md:flex mt-8 gap-8 justify-between '>
                        <div>
                            <img src="category.png" alt="" />
                        </div>
                        <div>
                            <p className='font-[Inter] text-base mt-5  text-[#592EA9]'>BUSINESS</p>
                            <h1 className='font-bold font-[Sen] mt-5 text-2xl md:text-4xl text-[#232536]'>Ten free foogle fonts that you should use</h1>
                            <p className='text-base text-[#6D6E76] font-[Inter]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className='md:flex mt-8 gap-8 justify-between '>
                        <div>
                            <img src="category.png" alt="" />
                        </div>
                        <div>
                            <p className='font-[Inter] text-base mt-5 text-[#592EA9]'>BUSINESS</p>
                            <h1 className='font-bold font-[Sen] mt-5 md:leading-[48px] md:tracking-[-2px] text-2xl md:text-4xl text-[#232536]'>What did I learn from doing 50+ design sprints?</h1>
                            <p className='text-base mt-5 text-[#6D6E76] font-[Inter]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>

                </div>

                {/* category button  ❤️‍🔥*/}

                <div className='md:w-1/4'>

                    <div>
                        <h1 className='md:leading-[48px] md:tracking-[-2px] text-2xl md:text-4xl font-bold text-[Sen] text-[#232536] mt-16 mb-16 ' >Categories</h1>

                        <button className='font-bold font-[Sen] text-[28px] py-5 md:py-7 flex items-center gap-3   justify-center bg-[#FFD050] w-full md:w-[296px] mt-6'>

                            <img className='bg-[#FBF6EA] p-3 rounded-xl' src="icon2.svg" alt="" /> Startup </button>

                        <button className='md:py-7 py-5 border border-[#C1C1C3] font-bold font-[Sen] text-[28px] outline-none flex items-center gap-3   justify-center w-full md:w-[296px] mt-6'> <img src="icon1.svg" alt="" />  Business </button>

                        <button className='md:py-7 py-5 border flex items-center gap-3   justify-center border-[#C1C1C3] font-bold font-[Sen] text-[28px] outline-none w-full md:w-[296px] mt-6'> <img className='bg-[#FBF6EA] p-3 rounded-xl' src="icon3.svg" alt="" />  Economy </button>

                        <button className='md:py-7 py-5 border border-[#C1C1C3] flex items-center gap-3   justify-center font-bold font-[Sen] text-[28px] outline-none w-full md:w-[296px] mt-6'> <img className='bg-[#FBF6EA] p-3 rounded-xl' src="icon4.svg" alt="" /> Technology </button>
                    </div>


                    {/* ALl tag section  ❤️‍🔥*/}
                    <h1 className='md:leading-[48px] md:tracking-[-2px] text-2xl md:text-4xl font-bold text-[Sen] text-[#232536] mb-6 mt-12' >All Tags</h1>

                    <div>
                        <button className='border border-[#232536] rounded-[25px]  text-sm px-[37px] text-[#232536] font-[Sen] py-2'> Business</button>
                        <button className='border border-[#232536] rounded-[25px] ml-3 text-sm px-[37px] text-[#232536] font-[Sen] py-2'> Experience</button>
                        <button className='border border-[#232536] rounded-[25px] text-sm px-[37px] mt-4 text-[#232536] font-[Sen] py-2'> Screen</button>
                        <button className='border border-[#232536] rounded-[25px] ml-4 text-sm px-[37px] text-[#232536] font-[Sen] py-2'> Technology</button>
                        <button className='border border-[#232536] rounded-[25px] mt-4 text-sm px-[37px] text-[#232536] font-[Sen] py-2'> Marketing</button>
                        <button className='border border-[#232536] ml-4 rounded-[25px] text-sm px-[37px] text-[#232536] font-[Sen] py-2'> Life</button>
                    </div>


                </div>

            </div>
        </section>
    );
};

export default Category;