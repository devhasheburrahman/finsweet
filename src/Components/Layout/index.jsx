import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='relative'>
            <div className='fixed z-50 top-0 w-full'>
                <Header />
            </div>
            <main className='mt-20'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;