import React, {Fragment} from 'react';

//components
import { Header } from './header';
import { Footer } from './footer';

export const Layout = ({children}) => {
    return (
        <Fragment>
            <Header/>
            <div className='ctr-layout'>
                {children}
            </div>
            <Footer/>
            <style>{`
                .ctr-layout {
                    background-color:none;
                    width:100%;
                    height:100vh;
                    padding:10px 25px;
                }    
                
            `}</style>
        </Fragment> 
    );
};