import React from 'react';
import { Outlet } from 'react-router-dom';
import './PageLayout.css';

const PageLayout = () => {
    return (
        <>
            <div className='page'>
                <Outlet />
            </div>
        </>
    )
};

export default PageLayout;