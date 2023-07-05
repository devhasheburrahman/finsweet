import React from 'react';
import Team from '../Team/Team';
import { FaArrowRight, FaArrowLeft, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Home = () => {
    return (
        <div className='mx-20'>
            {/* choose our category  */}
            <section className='mt-16'>
                <h1 style={{ letterSpacing: '-2px', lineHeight: '48px' }} className=' mt-16 text-4xl font-bold font-[Sen] mb-12  flex justify-center '> Choose A Categories</h1>

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

            {/* story */}
            <section>

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
    );
};

export default Home;