import React from 'react';

const Contact = () => {
    return (
        <>
            <div className='text-center mx-10 mt-32 mb-16'>
                <p className='text-base font-[Sen] font-black mb-3'>CONTACT US</p>
                <p className='text-2xl md:text-5xl font-bold  text-[Sen] mb-6'>Let’s Start a Conversation</p>
                <p className='text-[#6D6E76] font-[Inter] text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt   <br /> ut labore et dolore magna aliqua. Ut enim ad minim.</p>
            </div>
            <div className='bg-[#592EA9] md:h-60 md:w-[768px] mx-auto'>
                <div className='md:flex md:justify-around pb-8  pt-12 px-16'>
                    <div className=''>
                        <h1 className='text-white opacity-60 font-[Inter] text-sm '>Working hours</h1>
                        <hr className='text-white opacity-10 h-[1px] mt-4 mb-4' />
                        <p className='text-xl font-bold font-[Sen] text-white'>Monday To Friday</p>
                        <p className='text-xl font-bold font-[Sen] text-white'> 9:00 AM To 8:00 PM</p>
                        <p className='font-[Intel] text-base  text-white opacity-60'>Our Support Team is available 24/7</p>

                    </div>
                    <div>
                        <h1 className='text-white opacity-60 font-[Inter] mt-8 text-sm'>Contact Us</h1>
                        <hr className='text-white opacity-10 h-[1px] mt-4 mb-4' />
                        <p className='text-xl font-bold font-[Sen] text-white'> 020 7993 2905</p>
                        <p className='font-[Intel] text-base  text-white opacity-60' > hello@finsweet.com</p>
                    </div>
                </div>

            </div>
            <div className='text-center mb-32 px-5'>

                <input className='border border-[#232536] w-full md:w-[768px] outline-none font-[Inter] p-6 mt-8' type="text" name="" id="" placeholder='Full Name' /><br />

                <input className='border border-[#232536] w-full md:w-[768px] outline-none font-[Inter] p-6 mt-4' type="email" name="" id="" placeholder='Your Email' /><br />

                {/* <label  className='border border-[#232536] w-[768px] outline-none p-6 mt-4'   for="cars">Query Related  :</label>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>

                </select> */}

                <input className='border border-[#232536] w-full md:w-[768px] font-[Inter] outline-none p-6 mt-4' type="email" name="" id="" placeholder='Query Related' /><br />

                <input className='border border-[#232536] w-full md:w-[768px] outline-none font-[Inter] h-36 p-6 mt-4' type="email" name="" id="" placeholder='Message' /> <br />

                <input className='bg-[#FFD050] w-full md:w-[768px] outline-none text-2xl font-bold font-[Sen] text-[#232536] p-6 mt-4 ' type="button" value="Send Message" />
            </div>

        </>
    );
};

export default Contact;