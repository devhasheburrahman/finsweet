import React from 'react';
import Team from '../Team/Team';
import { FaArrowRight, FaArrowLeft, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaAngleRight } from 'react-icons/fa';


const Home = () => {
    return (
        <div>
            {/* header  */}
            <div className='px-20 pt-32 h-[720px] bg-black '>
                <h1 style={{ letterSpacing: '3px', lineHeight: '48px' }} className='text-white text-base font-[Inter] '>POSTED ON <span className='font-bold'>STARTUP</span></h1>


                <h1 style={{ letterSpacing: '-2px', lineHeight: ' 64px' }} className=' text-[56px] font-bold font-[Sen] text-white mt-6 '>Step-by-step guide to choosing <br /> great font pairs </h1>

                <p className='text-sm text-[Inter] text-white mt-6 mb-4' >By <span className='text-[#FFD050]'>James West </span>  l   May 23, 2021 </p>

                <p className='text-sm text-[Inter] mt-4  text-white'>Duis aute irure dolor in reprehenderit in voluptate velit  esse cillum dolore eu fugiat nulla pariatur <br /> Excepteur sint occaecat cupidatat non proident.</p>

                <button className='flex items-center px-12 bg-[#FFD050] py-4 text-lg font-bold font-[Sen] mt-12'>  Read More <FaAngleRight /> </button>

            </div>

            <div className='mx-20'>

                {/* featurePost  */}
                <section>
                    <div className='flex  gap-8'>
                        <div>
                            <h1 style={{ letterSpacing: '-2px', lineHeight: '48px' }} className='text-4xl font-[Sen] mt-32 mb-8 font-bold'>Feature Post</h1>

                            <div className='bg-[#F4F0F8] opacity-12 p-8'>
                                <img src="home.png" alt="" />
                                <p className='text-sm text-[Inter] text-[#592EA9] mt-4 mb-4' >By <span className='text-[#592EA9]'>John Doe </span>  l   Aug 23, 2021 </p>


                                <h1 style={{ letterSpacing: '-1px', lineHeight: '48px' }} className=' text-[28px] font-bold font-[Sen] text-[#161722] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor. </h1>
                                <p className='text-sm text-[Inter] text-[#6D6E76]'>Duis aute irure dolor in reprehenderit in voluptate velit  esse cillum dolore eu fugiat nulla pariatur <br /> Excepteur sint occaecat cupidatat non proident.</p>

                                <button className='flex items-center px-12 bg-[#FFD050] py-4 text-lg font-bold font-[Sen] mt-8'>  Read More <FaAngleRight /> </button>
                            </div>

                        </div>

                        <div className='pl-[78px]'>
                            <h1 className='  text-4xl mt-32 font-bold font-[Sen] '> All Post  <span className='text-base  font-[Inter] mx-[200px] font-normal'>View All</span></h1>

                            <div className='p-8'>
                                <p className='text-sm text-[Inter] text-[#592EA9] mt-4 mb-4' >By John Doe l   Aug 23, 2021 </p>
                                <h1 className=' text-[28px] font-bold font-[Sen] text-[#161722] '>8 Figma design systems that you can download for free today.</h1>
                            </div>
                            <div className='p-8 bg-[#FBF6EA]'>
                                <p className='text-sm text-[Inter] text-[#592EA9] mt-4 mb-4' >By   John Doe  l   Aug 23, 2021 </p>
                                <h1 className=' text-[28px] font-bold font-[Sen] text-[#161722] '>8 Figma design systems that you can download for free today.</h1>
                            </div>
                            <div className='p-8'>
                                <p className='text-sm text-[Inter] text-[#592EA9] mt-4 mb-4' >By <span className='text-[#592EA9]'>John Doe </span>  l   Aug 23, 2021 </p>
                                <h1 className=' text-[28px] font-bold font-[Sen] text-[#161722] '>8 Figma design systems that you can download for free today.</h1>
                            </div>
                            <div className='p-8'>
                                <p className='text-sm text-[Inter] text-[#592EA9] mt-4 mb-4' >By <span className='text-[#592EA9]'>John Doe </span>  l   Aug 23, 2021 </p>
                                <h1 className=' text-[28px] font-bold font-[Sen] text-[#232536] '>8 Figma design systems that you can download for free today.</h1>
                            </div>
                        </div>
                    </div>

                </section>

                <div className='flex  pt-[118px] justify-end rounded'>
                    <div className='bg-[#FFD050] w-[813px]'>

                        <p className='text-[#FFD050]'>c</p>
                    </div>
                    <div className='bg-[#592EA9] w-[271px]'>
                        <p className='text-[#592EA9]'>a</p>
                    </div>
                </div>

                {/* about us */}
                <section className='h-[464px] bg-[#F4F0F8] mb-32'>

                    <div className='flex gap-[61px]  pt-[92px]'>
                        <div className='pl-20   ' >

                            <p style={{ letterSpacing: '3px', lineHeight: '20px' }} className='font-[Inter] text-base  text-[#232536]'>ABOUT US</p>

                            <h1 style={{ letterSpacing: '-2px', lineHeight: '48px' }} className='text-4xl font-[Sen] font-bold mt-3 '>We are a community of content writers who share their learnings</h1>

                            <p className='text-[Inter] text-base mt-4 text-[#232536] font-normal'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <button className='flex gap-3 items-center font-[Sen] font-bold text-lg text-[#592EA9] mt-4'> Read More <FaAngleRight />  </button>
                        </div>
                        <div>
                            <p style={{ letterSpacing: '3px', lineHeight: '20px' }} className='font-[Inter] text-base  text-[#232536]'>Our mision</p>


                            <h1 style={{ letterSpacing: '-2px', lineHeight: '48px' }} className='text-4xl font-[Sen] font-bold mt-3 '>Creating valuable content for creatives all around the world</h1>

                            <p className='text-[Inter] text-base mt-4 text-[#232536] font-normal'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        </div>
                    </div>

                </section>


                {/* choose our category  */}
                <section className='mt-16 mb-3'>
                    <h1 style={{ letterSpacing: '-2px', lineHeight: '48px' }} className=' mt-16 text-4xl font-bold font-[Sen] mb-12  flex justify-center '> Choose A Categories</h1>

                    <div className='flex justify-center gap-8' >

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

                {/* story */}
                <section>

                    <div className=' relative mt-32 '>
                        <div>
                            <img src="friend.png" alt="" />
                        </div>

                        <div className='p-20 h-[584px] w=[706px] absolute bottom-0 left-[50%] bg-white'>
                            <p style={{ letterSpacing: '3px', lineHeight: '20px' }} className='text-sm text-[Inter]   mt-4 mb-4' > WHY WE STARTED</p>


                            <h1 style={{ letterSpacing: '-1px', lineHeight: '48px' }} className=' text-[28px] font-bold font-[Sen] text-[#161722] '>It started out as a simple idea and evolved into our passion </h1>
                            <p className='text-sm mt-8 text-[Inter] text-[#6D6E76]'>Duis aute irure dolor in reprehenderit in voluptate velit  esse cillum dolore eu fugiat nulla pariatur  Excepteur sint occaecat cupidatat non proident.</p>

                            <button className='flex items-center px-12 bg-[#FFD050] py-4 text-lg font-bold font-[Sen] mt-8'> Discover our story <FaAngleRight /> </button>
                        </div>
                    </div>

                </section>

                {/* List of Authors */}
                <section className=' mt-32'>
                    <h1 style={{ letterSpacing: '-2px', lineHeight: '48px' }} className=' text-center text-4xl font-bold font-[Sen] '>List of Authors</h1>

                    <div className=' grid grid-cols-4 gap-8 mt-12'>

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

                <section className='mt-32 mb-[108px]'>
                    <div className='flex justify-between'>

                        <div>
                            <p className='text-[Inter] text-sm text-[#6D6E76] opacity-60'>we are</p>
                            <h1 className='text-2xl text-[#6D6E76] font-bold '>Featured in</h1>
                        </div>
                        <img src="Logo 1.svg" alt="" />
                        <img src="Logo 2.svg" alt="" />
                        <img src="Logo 3.svg" alt="" />
                        <img src="Logo 4.svg" alt="" />
                        <img src="Logo 5.svg" alt="" />
                    </div>
                </section>

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

                            <div className='flex items-center justify-between '>

                                <div className='flex items-center gap-7'>
                                    <img className='h-20' src="Image.png" alt="" />

                                    <div>
                                        <h1 style={{ letterSpacing: '-2px', lineHeight: '64px' }} className='text-[28px] text-[#232536] font-bold font-[Sen] '>Jonathan Vallem</h1>
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
        </div>
    );
};

export default Home;