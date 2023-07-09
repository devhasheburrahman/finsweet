import React from 'react';
import Team from '../Team/Team';

const BlogPost = () => {
    return (

        <div>
            {/* user section ❤️‍🔥 */}
            <div className='md:px-[336px] px-10 md:pt-[208px]'>
                <div className='flex items-center gap-4 mb-6 '>

                    <img className='h-20' src="Image.png" alt="" />

                    <div>
                        <h1 className=' md:leading-[64px] md:tracking-[-2px] md:text-[28px] text-[#232536] font-bold font-[Sen] '>Andrew Jonson</h1>
                        <p className='text-base  text-[Inter] text-[#6D6E76]'> posted on 27th january 2022</p>
                    </div>
                </div>
                <h1 className=' md:leading-[64px] md:tracking-[-2px] text-2xl md:text-5xl font-bold font-[Sen] '>Step-by-step guide to choosing great font pairs</h1>

                <p className='flex gap-2 items-center font-bold font-[Seb] text-2xl mt-[34px] '> <img src="icon2.svg" alt="" /> Startup </p>
            </div>

            {/* client section ❤️‍🔥 */}

            <section className='md:px-20 px-10 mt-16'>

                <div className='md:flex justify-center'>
                    <img src="postBanner.png" alt="" />
                </div>

                <div className='md:px-52 mt-16'>
                    <h1 className=' md:leading-[48px] md:tracking-[-2px] text-xl md:text-4xl font-bold font-[Sen] text-[#232536] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h1>
                    <p className='text-base text-[Inter] mt-4 text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>

                    <h1 className=' md:leading-[48px] md:tracking-[-2px] text-xl md:text-4xl mt-12 font-bold font-[Sen] text-[#232536] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h1>
                    <p className='text-base text-[Inter] mt-4 text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>


                    <ul className='mt-12'>
                        <li className=' text-xl md:text-2xl font-bold font-[Sen] text-[#161722] opacity-70'>Lorem ipsum dolor sit amet</li>
                        <li className=' text-xl md:text-2xl font-bold font-[Sen] text-[#161722] opacity-70'>Non blandit massa enim nec scelerisque</li>
                        <li className=' text-xl md:text-2xl font-bold font-[Sen] text-[#161722] opacity-70'>Neque egestas congue quisque egestas</li>

                    </ul>

                    <p className='text-base text-[Inter] mt-4 text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>

                    <h1 className=' md:leading-[48px] md:tracking-[-2px] text-xl md:text-4xl mt-12 font-bold font-[Sen] text-[#232536] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h1>
                    <p className='text-base text-[Inter] mt-4 text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>

                </div>

            </section>

            {/* what to read next ❤️‍🔥 */}

            <section className='md:px-20 px-10 md:mb-32 mb-16'>
                <h1 className=' text-2xl md:text-4xl font-bold font-[Sen] text-[#232536] mt-32 md:mb-16 mb-8 '>What to read next</h1>
                <div className='md:flex gap-8'>
                    <div>
                        <img src="client1.png" alt="" />
                        <p className='text-sm text-[Inter] text-[#6D6E76] mt-8' >By John Doe   l   Aug 23, 2021 </p>
                        <h1 className=' md:leading-[48px] mb-4 md:tracking-[-1px] mt-4 md:text-[28px] font-bold font-[Sen] text-[#161722] '>A UX Case Study Creating a Studious Environment for Students: </h1>
                        <p className='text-sm mb-4 text-[Inter] text-[#6D6E76]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                    <div>
                        <img src="client2.png" alt="" />
                        <p className='text-sm text-[Inter] text-[#6D6E76] mt-8' >By John Doe   l   Aug 23, 2021 </p>
                        <h1 className=' md:leading-[48px] md:tracking-[-1px] mt-4 md:text-[28px] font-bold font-[Sen] text-[#161722] '>A UX Case Study Creating a Studious Environment for Students: </h1>
                        <p className='text-sm text-[Inter] mb-4 text-[#6D6E76]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                    <div>
                        <img src="client3.png" alt="" />
                        <p className='text-sm text-[Inter] text-[#6D6E76] mt-8' >By John Doe   l   Aug 23, 2021 </p>
                        <h1 className=' md:leading-[48px] md:tracking-[-1px] mt-4 md:text-[28px] font-bold font-[Sen] text-[#161722] '>A UX Case Study Creating a Studious Environment for Students: </h1>
                        <p className='text-sm text-[Inter] text-[#6D6E76]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                </div>
            </section>


            <Team />
        </div>

    );
};

export default BlogPost;