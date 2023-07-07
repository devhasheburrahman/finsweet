import React from 'react';
import Team from '../Team/Team';
import { FaArrowRight, FaArrowLeft, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaAngleRight } from 'react-icons/fa';


const Home = () => {
    return (
        <div>
            {/* header  */}
            <div className='px-10 md:px-20 pt-16 md:pt-32  md:h-[720px] hero-section '>
                <div className='relative z-10 pb-8'>
                    <h1 className=' tracking-[3px] leading-[48px] text-white text-base font-[Inter] '>POSTED ON <span className='font-bold'>STARTUP</span></h1>


                    <h1 className='tracking-[-2px] leading-[ 64px] md:text-[56px] font-bold text-[28px] font-[Sen] text-white md:mt-6 '>Step-by-step guide to choosing <br /> great font pairs </h1>

                    <p className='text-sm text-[Inter] text-white md:mt-6 mt-3 md:mb-4' >By <span className='text-[#FFD050]'>James West </span>  l   May 23, 2021 </p>

                    <p className='text-sm text-[Inter] mt-4  text-white'>Duis aute irure dolor in reprehenderit in voluptate velit  esse cillum dolore eu fugiat nulla pariatur <br /> Excepteur sint occaecat cupidatat non proident.</p>

                    <button className='flex items-center px-6 md:px-12 bg-[#FFD050] py-4 text-lg font-bold font-[Sen] mt-6 md:mt-12'>  Read More <FaAngleRight /> </button>
                </div>

            </div>

            <div className='md:mx-20 mx-8'>

                {/* featurePost  */}
                <section>
                    <div className='md:flex flex-cols gap-8'>
                        <div>
                            <h1 className=' md:tracking-[-2px] md:leading-[48px]  text-2xl md:text-4xl font-[Sen] md:mt-32 mt-8 mb-8 font-bold'>Feature Post</h1>

                            <div className='bg-[#F4F0F8] bg-opacity-10 md:p-8'>
                                <img src="home.png" alt="" />
                                <p className='text-sm text-[Inter] text-[#592EA9] mt-4 mb-4' >By <span className='text-[#592EA9]'>John Doe </span>  l   Aug 23, 2021 </p>


                                <h1 className='text-lg md:text-[28px] tracking-[-1px] md:leading-[48px]  font-bold font-[Sen] text-[#161722] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor. </h1>

                                <p className='text-sm mt-4 text-[Inter] text-[#6D6E76]'>Duis aute irure dolor in reprehenderit in voluptate velit  esse cillum dolore eu fugiat nulla pariatur <br /> Excepteur sint occaecat cupidatat non proident.</p>

                                <button className='flex items-center px-4 md:px-12 bg-[#FFD050] py-4 text-lg font-bold font-[Sen] mt-8'>  Read More <FaAngleRight /> </button>
                            </div>

                        </div>

                        <div className='md:pl-[78px]'>
                            <h1 className='  text-2xl md:text-4xl mt-32 font-bold font-[Sen] '> All Post  <span className='text-base  font-[Inter] ml-20 md:mx-[200px] font-normal'>View All</span></h1>

                            <div className='md:p-8 '>
                                <p className='text-sm text-[Inter] text-[#592EA9] mt-4 mb-4' >By John Doe l   Aug 23, 2021 </p>
                                <h1 className='md:text-[28px] text-lg font-bold font-[Sen] text-[#161722] '>8 Figma design systems that you can download for free today.</h1>
                            </div>
                            <div className='md:p-8 px-3 bg-[#FBF6EA]'>
                                <p className='text-sm text-[Inter] text-[#592EA9] mt-4 mb-4' >By   John Doe  l   Aug 23, 2021 </p>
                                <h1 className=' md:text-[28px] text-lg font-bold font-[Sen] text-[#161722] '>8 Figma design systems that you can download for free today.</h1>
                            </div>
                            <div className='md:p-8'>
                                <p className='text-sm text-[Inter] text-[#592EA9] mt-4 mb-4' >By <span className='text-[#592EA9]'>John Doe </span>  l   Aug 23, 2021 </p>
                                <h1 className='md:text-[28px] text-lg font-bold font-[Sen] text-[#161722] '>8 Figma design systems that you can download for free today.</h1>
                            </div>
                            <div className='md:p-8'>
                                <p className='text-sm text-[Inter] text-[#592EA9] mt-4 mb-4' >By <span className='text-[#592EA9]'>John Doe </span>  l   Aug 23, 2021 </p>
                                <h1 className=' md:text-[28px] text-lg font-bold font-[Sen] text-[#232536] '>8 Figma design systems that you can download for free today.</h1>
                            </div>
                        </div>
                    </div>

                </section>

                {/* colors */}
                <div className='flex  pt-20 md:pt-[118px] justify-end rounded'>
                    <div className='bg-[#FFD050] w-[813px]'>

                        <p className='text-[#FFD050]'>c</p>
                    </div>
                    <div className='bg-[#592EA9] w-[271px]'>
                        <p className='text-[#592EA9]'>a</p>
                    </div>
                </div>

                {/* about us */}
                <section className='md:h-[464px] bg-[#F4F0F8] mb-32'>

                    <div className='md:flex gap-[61px]  pt-12 md:pt-[92px]'>
                        <div className='md:pl-20 pl-5  ' >

                            <p className='font-[Inter] text-base  tracking-[3px] leading-[20px]  text-[#232536]'>ABOUT US</p>

                            <h1 className='text-xl md:text-4xl font-[Sen] font-bold mt-3 md:tracking-[-2px] md:leading-[48px]  '>We are a community of content writers who share their learnings</h1>

                            <p className='text-[Inter] text-base mt-4 text-[#232536] font-normal'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <button className='flex gap-3 items-center font-[Sen] font-bold text-lg text-[#592EA9] mt-4'> Read More <FaAngleRight />  </button>
                        </div>
                        <div className='md:p-10 p-5'>
                            <p className='font-[Inter] text-base tracking-[3px] leading-[20px]  text-[#232536]'>Our mision</p>


                            <h1 className='text-xl md:text-4xl font-[Sen] font-bold mt-3 md:tracking-[-2px]  md:leading-[48px]  '>Creating valuable content for creatives all around the world</h1>

                            <p className='text-[Inter] text-base mt-4 text-[#232536] font-normal'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        </div>
                    </div>

                </section>


                {/* choose our category  */}
                <section className='md:mt-16 mt-8 mb-3'>
                    <h1 className=' mt-16 md:text-4xl text-2xl md:tracking-[-2px] leading-[48px]  font-bold font-[Sen] mb-12  flex justify-center '> Choose A Categories</h1>

                    <div className='md:grid md:grid-cols-4    justify-center gap-8' >

                        <div className=' w-[296px] h-[228px] mb-8 border border-[#6D6E76] p-8'>
                            <img src="icon1.svg" alt="" />
                            <h1 className=' font-bold font-[Sen] text-[28px] mt-2'>Business </h1>
                            <p className='text-base text-[#6D6E76] font-[Inter] mt-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>
                        <div className=' w-[296px] h-[228px] mb-8  border border-[#6D6E76] p-8 bg-[#FFD050]'>
                            <img className='bg-[#FBF6EA] p-3 rounded-xl' src="icon2.svg" alt="" />
                            <h1 className=' font-bold font-[Sen] text-[28px] mt-2'>Startup </h1>
                            <p className='text-base text-[#6D6E76] font-[Inter] mt-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>
                        <div className=' w-[296px] h-[228px] mb-8  border border-[#6D6E76] p-8'>
                            <img className='bg-[#FBF6EA] p-3 rounded-xl' src="icon3.svg" alt="" />
                            <h1 className=' font-bold font-[Sen] text-[28px] mt-2'>Startup </h1>
                            <p className='text-base text-[#6D6E76] font-[Inter] mt-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>
                        <div className=' w-[296px] h-[228px] mb-8  border border-[#6D6E76] p-8'>
                            <img className='bg-[#FBF6EA] p-3 rounded-xl' src="icon4.svg" alt="" />
                            <h1 className=' font-bold font-[Sen] text-[28px] mt-2'>Technology </h1>
                            <p className='text-base text-[#6D6E76] font-[Inter] mt-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>


                    </div>

                </section>

                {/* story */}
                <section>

                    <div className='md:flex md:relative mt-32 mb-12 '>
                        <div>
                            <img src="friend.png" alt="" />
                        </div>

                        <div className='md:p-20 md:h-[584px] w=[706px] md:absolute md:bottom-0 md:left-[50%] md:bg-white'>
                            <p className='md:tracking-[3px] leading-[20px]  text-sm text-[Inter]   mt-4 mb-4' > WHY WE STARTED</p>


                            <h1 className=' md:tracking-[-1px] md:leading-[48px] text-lg   md:text-[28px] font-bold font-[Sen] text-[#161722] '>It started out as a simple idea and evolved into our passion </h1>
                            <p className='text-sm md:mt-8 mt-4 text-[Inter] text-[#6D6E76]'>Duis aute irure dolor in reprehenderit in voluptate velit  esse cillum dolore eu fugiat nulla pariatur  Excepteur sint occaecat cupidatat non proident.</p>

                            <button className='flex items-center px-12 bg-[#FFD050] py-4 md:text-lg font-bold font-[Sen] mt-8'> Discover our story <FaAngleRight /> </button>
                        </div>
                    </div>

                </section>

                {/* List of Authors */}
                <section className=' md:mt-32 mt:16 mb-16'>
                    <h1 className=' md:tracking-[-2px] md:leading-[48px]  text-center  text-2xl md:text-4xl font-bold font-[Sen] '>List of Authors</h1>

                    <div className=' grid md:grid-cols-4 gap-8 mt-12'>

                        <div className='bg-[#F4F4F4] h-[324px]   text-center'>
                            <div className='flex justify-center pt-10'>
                                <img src="user1.png" alt="" /></div>
                            <p style={{ letterSpacing: '-1px', lineHeight: '40px' }} className='mt-5 text-[28px] font-bold   font-[Sen] text-[#232536]'>Floyd Miles</p>
                            <p className='text-sm text-[Inter] text-[#6D6E76]'>Content Writer @Company</p>

                            <div className='flex justify-center gap-4 mt-4 text-[16px] text-[#6D6E76]'>
                                <p ><FaFacebook /></p>
                                <p><FaTwitter /></p>
                                <p><FaInstagram /></p>
                                <p><FaLinkedin /></p>
                            </div>
                        </div>



                        <div className='bg-[#FBF6EA] h-[324px] text-center'>
                            <div className='flex justify-center pt-10'>
                                <img src="user7.png" alt="" /></div>
                            <p style={{ letterSpacing: '-1px', lineHeight: '40px' }} className='mt-5 text-[28px] font-bold   font-[Sen] text-[#232536]'>Leslie Alexander</p>
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
                            <p style={{ letterSpacing: '-1px', lineHeight: '40px' }} className='mt-5 text-[28px] font-bold   font-[Sen] text-[#232536]'>Floyd Miles</p>
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
                            <p style={{ letterSpacing: '-1px', lineHeight: '40px' }} className='mt-5 text-[28px] font-bold   font-[Sen] text-[#232536]'>Eleanor Pena</p>
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
                {/* ❤️‍🔥Featured in   */}
                <section className='mt-32 mb-[108px]'>
                    <div className='md:flex items-center justify-between'>

                        <div>
                            <p className='text-[Inter] text-sm text-[#6D6E76] opacity-60'>we are</p>
                            <h1 className='text-2xl text-[#6D6E76] font-bold '>Featured in</h1>
                        </div>
                        <img className='mt-10' src="Logo 1.svg" alt="" />
                        <img className='mt-10' src="Logo 2.svg" alt="" />
                        <img className='mt-10' src="Logo 3.svg" alt="" />
                        <img className='mt-10' src="Logo 4.svg" alt="" />
                        <img className='mt-10' src="Logo 5.svg" alt="" />
                    </div>
                </section>
                {/* ❤️‍🔥 TESTIMONIALS */}

                <section className='md:h-[464px] bg-[#FBF6EA] mb-10'>

                    <div className='md:flex md:gap-[84px] md:pt-[92px] md:p-5 p-3'>
                        <div className='md:px-[112px] md:border-r-2  ' >

                            <p className='font-[Inter] md:tracking-[3px] md:leading-[20px]  text-base  text-[#232536]'>TESTIMONIALS</p>
                            <h1 className='md:text-4xl text-2xl font-[Sen] font-bold mt-3 md:tracking-[-2px] md:leading-[48px]  '>What people say about our blog</h1>
                            <p className='text-[Inter] text-base mt-4 text-[#232536] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                        <div className='md:px-[96px]'>
                            <h1 className='text-xl mt-5 md:text-2xl font-bold font-[Sen] text-[#232536] mb-10 md:mb-[121px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </h1>

                            <div className='flex items-center justify-between '>

                                <div className='flex items-center gap-7'>
                                    <img className='md:h-20' src="Image.png" alt="" />

                                    <div>
                                        <h1 className='md:text-[28px]  md:tracking-[-2px] md:leading-[64px] text-[#232536] font-bold font-[Sen] '>Jonathan Vallem</h1>
                                        <p className='text-base  text-[Inter] text-[#6D6E76]'>New york, USA</p>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <FaArrowRight className='bg-[#FFFFFF] md:h-14 md:w-14 md:p-2 rounded-full' />
                                    <FaArrowLeft className='bg-[#232536]  md:h-14 md:w-14 md:p-2 rounded-full text-white' />

                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <Team />
            </div>
        </div>
    );
};

export default Home;