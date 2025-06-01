import React from 'react';
import { Outlet } from 'react-router';
import MuliStepProgress from './MuliStepProgress';

function Layout(props) {
    return (
        <><div className='bg-[#EEEEEE] flex flex-col' >
    <header className=' pt-20 '><div className='container mx-auto'>
            <MuliStepProgress/>
 
    </div>
        </header>
            <main className='b flex flex-row items center pt-[53px]'>
                <Outlet/>
            </main>
        </div>
    
                
                
        
        </>
        
    );
}

export default Layout;
