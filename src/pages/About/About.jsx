import React from 'react';
import Team from '../Team/Team';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaAngleRight } from 'react-icons/fa';

const About = () => {
    return (
        <div>
            <section>

            </section>

            <section className='h-[464px] mx-20 bg-[#F4F0F8] mb-32'>

                <div className='flex gap-[61px]  pt-[92px]'>
                    <div className='pl-20 w-2/4' >

                        <p style={{ letterSpacing: '3px', lineHeight: '20px' }} className='font-[Inter] text-base  text-[#232536]'>OUR MISION</p>

                        <h1 style={{ letterSpacing: '-2px', lineHeight: '48px' }} className='text-4xl font-[Sen] font-bold mt-3 '>Creating valuable content for creatives all around the world </h1>

                        <p className='text-[Inter] text-base mt-4 text-[#232536] font-normal'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    </div>
                    <div className='w-2/4'>
                        <p style={{ letterSpacing: '3px', lineHeight: '20px' }} className='font-[Inter] text-base  text-[#232536]'>OUR VISION</p>


                        <h1 style={{ letterSpacing: '-2px', lineHeight: '48px' }} className='text-4xl font-[Sen] font-bold mt-3 '>A platform that empowers individuals to improve</h1>

                        <p className='text-[Inter] text-base mt-4 text-[#232536] font-normal'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </div>
                </div>

            </section>




            {/* our team */}
            <section>
                <div className='px-20 flex gap-[137px] justify-center items-center  mt-32   ' >


                    <div className='w-2/4'>
                        <h1 style={{ letterSpacing: '-2px', lineHeight: '48px' }} className=' text-4xl font-bold font-[Sen] mt-8 '>Our team of creatives</h1>
                        <p className='text-2xl font-[Sen] mt-8 font-bold '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <p className='font-[Inter] text-base mt-8 text-[#232536]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                    </div>
                    <div>
                        <img className='w-[800px]' src="about1.png" alt="" />
                    </div>

                </div>
                <div className='px-20 flex gap-[137px] justify-center items-center mt-8 ' >
                    <div>
                        <img src="about2.png" alt="" />

                    </div>
                    <div className='w-2/4'>
                        <h1 style={{ letterSpacing: '-2px', lineHeight: '48px' }} className='  text-4xl font-bold font-[Sen] mt-8 '>Why we started this Blog</h1>
                        <p className='text-2xl font-[Sen] font-bold mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <p className='font-[Inter] text-base mt-8 text-[#232536]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                    </div>

                </div>
            </section>

            {/* List of Authors */}
            <section className='mx-20 mt-32'>
                <h1 style={{ letterSpacing: '-2px', lineHeight: '48px' }} className='mt-5 text-center text-4xl font-bold font-[Sen] '>List of Authors</h1>

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
                    <div className='bg-[#FBF6EA] h-[324px]    text-center'>
                        <div className='flex justify-center pt-10'>
                            <img src="user3.png" alt="" /></div>
                        <p style={{ letterSpacing: '-1px', lineHeight: '40px' }} className='mt-5 text-[28px] font-bold   font-[Sen] text-[#232536]'>Dianne Russell</p>
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
                        <p style={{ letterSpacing: '-1px', lineHeight: '40px' }} className='mt-5 text-[28px] font-bold   font-[Sen] text-[#232536]'>Guy Hawkins</p>
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
                        <p style={{ letterSpacing: '-1px', lineHeight: '40px' }} className='mt-5 text-[28px] font-bold   font-[Sen] text-[#232536]'>Guy Hawkins</p>
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
                    <div className='bg-[#F4F4F4] h-[324px] text-center'>
                        <div className='flex justify-center pt-10'>
                            <img src="user2.png" alt="" /></div>
                        <p style={{ letterSpacing: '-1px', lineHeight: '40px' }} className='mt-5 text-[28px] font-bold   font-[Sen] text-[#232536]'>Leslie Alexander</p>
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