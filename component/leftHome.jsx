// components/leftHome.tsx
import React from 'react';
import logo from "../public/logo.png"
import Image from 'next/image';

const LeftHome = () => {
    return (
        <div className='flex flex-col items-center p-4 leftSide'>
            <h1 className='hidden-mobile' style={{fontSize:'1.8rem', marginBottom: '5rem', fontWeight:'bold'}}>Welcom To</h1>
            <Image
                src={logo} 
                alt="Logo"
                width={100} 
                height={100} 
                style={{borderRadius:'50%'}}
            />
            <p style={{fontSize: '2.5rem', fontWeight:'bold', marginBottom: '2.6rem'}}>commit</p>
            <p style={{paddingLeft:'5rem', paddingRight:'5rem', marginBottom:'2rem'}} className='hidden-mobile'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
            
        </div>
    );
};




export default LeftHome;