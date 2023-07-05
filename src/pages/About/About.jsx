import React from 'react';
import Team from '../Team/Team';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const About = () => {
    return (
        <div>
            <section>
 
            </section>




            {/* our team */}
            <section>
                <div className='px-20 flex gap-[137px] justify-center items-center  mt-32   ' >

                    <div>
                        <img className='w-[800px]' src="about1.png" alt="" />
                    </div>
                    <div>
                        <h1 style={{ letterSpacing: '-2px', lineHeight: '48px' }} className=' text-4xl font-bold font-[Sen] '>Our team of creatives</h1>
                        <p className='text-2xl font-[Sen] font-bold '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <p className='font-[Inter] text-base text-[#232536]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                    </div>

                </div>
                <div className='px-20 flex gap-[137px] justify-center items-center mt-8 ' >
                    <div>
                        <h1 style={{ letterSpacing: '-2px', lineHeight: '48px' }} className='  text-4xl font-bold font-[Sen] '>Why we started this Blog</h1>
                        <p className='text-2xl font-[Sen] font-bold '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <p className='font-[Inter] text-base text-[#232536]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                    </div>
                    <div>
                        <img src="about2.png" alt="" />

                    </div>
                </div>
            </section>

            {/* List of Authors */}
            <section className='mx-20 mt-32'>
                <h1 style={{ letterSpacing: '-2px', lineHeight: '48px' }} className=' text-center text-4xl font-bold font-[Sen] '>List of Authors</h1>

                <div className=' grid grid-cols-4 gap-8 mt-12'>

                    <div className='bg-[#F4F4F4] h-[324px]   text-center'>
                        <div className='flex justify-center pt-10'>
                            <img src="user1.png" alt="" /></div>
                        <p style={{ letterSpacing: '-1px', lineHeight: '40px' }} className=' text-[28px] font-bold   font-[Sen] text-[#232536]'>Floyd Miles</p>
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
                        <p style={{ letterSpacing: '-1px', lineHeight: '40px' }} className=' text-[28px] font-bold   font-[Sen] text-[#232536]'>Dianne Russell</p>
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
                        <p style={{ letterSpacing: '-1px', lineHeight: '40px' }} className=' text-[28px] font-bold   font-[Sen] text-[#232536]'>Guy Hawkins</p>
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
                        <p style={{ letterSpacing: '-1px', lineHeight: '40px' }} className=' text-[28px] font-bold   font-[Sen] text-[#232536]'>Guy Hawkins</p>
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
                        <p style={{ letterSpacing: '-1px', lineHeight: '40px' }} className=' text-[28px] font-bold   font-[Sen] text-[#232536]'>Leslie Alexander</p>
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
                        <p style={{ letterSpacing: '-1px', lineHeight: '40px' }} className=' text-[28px] font-bold   font-[Sen] text-[#232536]'>Floyd Miles</p>
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
                            <img src="user5.png" alt="" /></div>
                        <p style={{ letterSpacing: '-1px', lineHeight: '40px' }} className=' text-[28px] font-bold   font-[Sen] text-[#232536]'>Eleanor Pena</p>
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
                        <p style={{ letterSpacing: '-1px', lineHeight: '40px' }} className=' text-[28px] font-bold   font-[Sen] text-[#232536]'>Leslie Alexander</p>
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