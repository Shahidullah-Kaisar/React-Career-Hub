import React from 'react';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Root = () => {
    return (
        <>
            <div className='max-w-7xl mx-auto'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
            
        </>
    );
};

export default Root;