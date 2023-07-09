import React from 'react';
import Team from '../Team/Team';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaAngleRight } from 'react-icons/fa';

const About = () => {
    return (
        <div>
            {/* about us ❤️‍🔥 */}

            <section className='md:mx-20 mx-10'>

                <div className='md:flex justify-center items-center gap-[61px]  pt-[92px]'>
                    <div className='md:p-16 p-8 bg-white md:relative z-10 md:ml-20 -bottom-[63px] shadow md:h-[256px] md:w-[624px]' >

                        <p className='md:leading-[20px] md:tracking-[3px]  font-[Inter] text-base  text-[#232536]'>ABOUT US</p>

                        <h1  className=' md:text-4xl text-2xl md:leading-[48px] md:tracking-[-2px] font-[Sen] font-bold mt-3 '>We are a community of content writers who share their learnings</h1>
                    </div>
                    <div className='md:w-2/4 p-4'>
                        <p className='text-[Inter] text-base mt-4 text-[#232536] font-normal'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </div>
                </div>

             </section>

            {/* img section ❤️‍🔥 */}

            <section className='md:mx-20 mx-10'>
                <div className='md:flex flex-col justify-end  md:h-[444px] bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(/friend.png)` }} >
                    <div className='flex '>
                        <div className='md:flex md:mx-20 bg-yellow-300 gap-[86px] md:h-[156px]  md:pt-8  md:px-12 mx-5  px-5 '>
                            <div>
                                <h1 className=' md:text-[56px] font-bold font-[Sen] leading-[64px] -tracking-2'>12+</h1>
                                <p className='md:text-base font-[Inter] leading-7 text-[#232536]'>Blogs Published </p>
                            </div>
                            <div>
                                <h1 className='md:text-[56px] font-bold font-[Sen] leading-[64px] -tracking-2'>18k+</h1>
                                <p className='md:text-base font-[Inter] leading-7 text-[#232536]'> View on Finsweet</p>
                            </div>
                            <div>
                                <h1 className='md:text-[56px] font-bold font-[Sen] leading-[64px] -tracking-2'>30k+</h1>
                                <p className='md:text-base font-[Inter] leading-7 text-[#232536]'> Total Active User</p>
                            </div>
                        </div>
                    </div>

                    <div className='md:ml-20 '>
                        <div className='flex   items-center'>
                            <div className='bg-[#592EA9] h-5 w-[310px]'>

                            </div>
                            <div className='bg-[#FFD050] h-5 w-[550px]'>

                            </div>

                        </div>


                    </div>
                </div>
            </section>

            {/* mission vs  vision section ❤️‍🔥 */}
            <section className='md:h-[464px] md:mx-20 mx-10 bg-[#F4F0F8]  mb-8 md:mb-32'>

                <div className='md:flex gap-[61px]  pt-16  md:pt-[92px]'>
                    <div className='md:pl-20 pl-5 md:w-2/4' >

                        <p className='md:leading-[20px] md:tracking-[3px] font-[Inter] text-base  text-[#232536]'>OUR MISION</p>

                        <h1 className='md:leading-[48px] md:tracking-[-2px]  md:text-4xl text-2xl font-[Sen] font-bold mt-3 '>Creating valuable content for creatives all around the world </h1>

                        <p className='text-[Inter] text-base mt-4 text-[#232536] font-normal'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    </div>
                    <div className='md:pl-20 pl-5 pb-6 md:w-2/4'>
                        <p className='md:leading-[20px] md:tracking-[3px]  font-[Inter] text-base  text-[#232536]'>OUR VISION</p>


                        <h1 className=' md:leading-[48px] md:tracking-[-2px] md:text-4xl text-2xl font-[Sen] font-bold mt-3 '>A platform that empowers individuals to improve</h1>

                        <p className='text-[Inter] text-base mt-4 text-[#232536] font-normal'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </div>
                </div>

            </section>

            {/* our team ❤️‍🔥 */}
            <section className='md:px-20 px-10 '>
                <div className='md:flex gap-[137px] justify-center items-center  mt-16 md:mt-32   ' >


                    <div className='md:w-2/4'>
                        <h1 className='md:leading-[48px] md:tracking-[-2px] md:text-4xl text-2xl font-bold font-[Sen] mt-8 '>Our team of creatives</h1>
                        <p className='md:text-2xl text-xl font-[Sen] mt-8 font-bold '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <p className='font-[Inter] text-base mt-8 text-[#232536]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                    </div>
                    <div>
                        <img className='w-[800px] mb-10 mt-10' src="about1.png" alt="" />
                    </div>

                </div>
                <div className=' md:flex gap-[137px] justify-center mb-4 items-center mt-8 ' >
                    <div>
                        <img src="about2.png" alt="" />

                    </div>
                    <div className='md:w-2/4'>
                        <h1 className=' md:leading-[48px] md:tracking-[-2px] md:text-4xl text-2xl font-bold font-[Sen] mt-8 '>Why we started this Blog</h1>
                        <p className='md:text-2xl text-xl font-[Sen] font-bold mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <p className='font-[Inter] text-base mt-8 text-[#232536]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                    </div>

                </div>
            </section>

            {/* List of Authors ❤️‍🔥 */}
            <section className='md:mx-20 mx-10 mb-16 mt-16 md:mt-32'>
                <h1 className=' md:leading-[48px] md:tracking-[-2px] mt-5 text-center  text-2xl md:text-4xl font-bold font-[Sen] '>List of Authors</h1>

                <div className='grid md:grid-cols-4  gap-8 mt-12'>

                    <div className='bg-[#F4F4F4] h-[324px]   text-center'>
                        <div className='flex justify-center pt-10'>
                            <img src="user1.png" alt="" /></div>
                        <p className='md:leading-[40px] md:tracking-[-1px] mt-5 text-[28px] font-bold   font-[Sen] text-[#232536]'>Floyd Miles</p>
                        <p className='text-sm text-[Inter] text-[#6D6E76]'>Content Writer @Company</p>

                        <div className='flex justify-center gap-4 mt-4 text-[16px] text-[#6D6E76]'>
                            <p ><FaFacebook /></p>
                            <p><FaTwitter /></p>
                            <p><FaInstagram /></p>
                            <p><FaLinkedin /></p>
                        </div>
                    </div>
                    <div className='bg-[#FBF6EA] h-[324px]    text-center'>
                        <div className='flex justify-center pt-10'>
                            <img src="user3.png" alt="" /></div>
                        <p className='md:leading-[40px] md:tracking-[-1px] mt-5 text-[28px] font-bold   font-[Sen] text-[#232536]'>Dianne Russell</p>
                        <p className='text-sm text-[Inter] text-[#6D6E76]'>Content Writer @Company</p>

                        <div className='flex justify-center gap-4 mt-4 text-[16px] text-[#6D6E76]'>
                            <p ><FaFacebook /></p>
                            <p><FaTwitter /></p>
                            <p><FaInstagram /></p>
                            <p><FaLinkedin /></p>
                        </div>
                    </div>
                    <div className='bg-[#F4F4F4] h-[324px] text-center'>
                        <div className='flex justify-center pt-10'>
                            <img src="user6.png" alt="" /></div>
                        <p className='md:leading-[40px] md:tracking-[-1px] mt-5 text-[28px] font-bold   font-[Sen] text-[#232536]'>Guy Hawkins</p>
                        <p className='text-sm text-[Inter] text-[#6D6E76]'>Content Writer @Company</p>

                        <div className='flex justify-center gap-4 mt-4 text-[16px] text-[#6D6E76]'>
                            <p ><FaFacebook /></p>
                            <p><FaTwitter /></p>
                            <p><FaInstagram /></p>
                            <p><FaLinkedin /></p>
                        </div>
                    </div>
                    <div className='bg-[#F4F4F4] h-[324px]   text-center'>
                        <div className='flex justify-center pt-10'>
                            <img src="user5.png" alt="" /></div>
                        <p className='md:leading-[40px] md:tracking-[-1px] mt-5 text-[28px] font-bold   font-[Sen] text-[#232536]'>Guy Hawkins</p>
                        <p className='text-sm text-[Inter] text-[#6D6E76]'>Content Writer @Company</p>

                        <div className='flex justify-center gap-4 mt-4 text-[16px] text-[#6D6E76]'>
                            <p ><FaFacebook /></p>
                            <p><FaTwitter /></p>
                            <p><FaInstagram /></p>
                            <p><FaLinkedin /></p>
                        </div>
                    </div>
                    <div className='bg-[#F4F4F4] h-[324px] text-center'>
                        <div className='flex justify-center pt-10'>
                            <img src="user7.png" alt="" /></div>
                        <p className=' md:leading-[40px] md:tracking-[-1px] mt-5 text-[28px] font-bold   font-[Sen] text-[#232536]'>Leslie Alexander</p>
                        <p className='text-sm text-[Inter] text-[#6D6E76]'>Content Writer @Company</p>

                        <div className='flex justify-center gap-4 mt-4 text-[16px] text-[#6D6E76]'>
                            <p ><FaFacebook /></p>
                            <p><FaTwitter /></p>
                            <p><FaInstagram /></p>
                            <p><FaLinkedin /></p>
                        </div>
                    </div>
                    <div className='bg-[#F4F4F4] h-[324px] text-center'>
                        <div className='flex justify-center pt-10'>
                            <img src="user4.png" alt="" /></div>
                        <p className='md:leading-[40px] md:tracking-[-1px] mt-5 text-[28px] font-bold   font-[Sen] text-[#232536]'>Floyd Miles</p>
                        <p className='text-sm text-[Inter] text-[#6D6E76]'>Content Writer @Company</p>

                        <div className='flex justify-center gap-4 mt-4 text-[16px] text-[#6D6E76]'>
                            <p ><FaFacebook /></p>
                            <p><FaTwitter /></p>
                            <p><FaInstagram /></p>
                            <p><FaLinkedin /></p>
                        </div>
                    </div>
                    <div className='bg-[#F4F4F4] h-[324px] text-center'>
                        <div className='flex justify-center pt-10'>
                            <img src="user8.png" alt="" /></div>
                        <p className='md:leading-[40px] md:tracking-[-1px] mt-5 text-[28px] font-bold   font-[Sen] text-[#232536]'>Eleanor Pena</p>
                        <p className='text-sm text-[Inter] text-[#6D6E76]'>Content Writer @Company</p>

                        <div className='flex justify-center gap-4 mt-4 text-[16px] text-[#6D6E76]'>
                            <p ><FaFacebook /></p>
                            <p><FaTwitter /></p>
                            <p><FaInstagram /></p>
                            <p><FaLinkedin /></p>
                        </div>
                    </div>
                    <div className='bg-[#F4F4F4] h-[324px] text-center'>
                        <div className='flex justify-center pt-10'>
                            <img src="user2.png" alt="" /></div>
                        <p className='md:leading-[40px] md:tracking-[-1px] mt-5 text-[28px] font-bold   font-[Sen] text-[#232536]'>Leslie Alexander</p>
                        <p className='text-sm text-[Inter] text-[#6D6E76]'>Content Writer @Company</p>

                        <div className='flex justify-center gap-4 mt-4 text-[16px] text-[#6D6E76]'>
                            <p ><FaFacebook /></p>
                            <p><FaTwitter /></p>
                            <p><FaInstagram /></p>
                            <p><FaLinkedin /></p>
                        </div>
                    </div>
                </div>
            </section>

            <Team />
        </div>
    );
};

export default About;