import React from 'react';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Root = () => {
    return (
        <>
            <Header></Header>
            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </>
    );
};

export default Root;