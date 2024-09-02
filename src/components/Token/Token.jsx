import React from 'react';
import MyChart from './MyChart';
import chart1 from '../../assets/pic/Group 43 (2).png'
import chart2 from '../../assets/pic/Group 43 (3).png'
const Token = () => {
    return (
        <div className='relative z-10 bg-myYellow py-28'>
            <div className="container">
                <h2 className="text-4xl md:text-6xl font-semibold text-center">TOKENOMICS</h2>
                <div className=' flex justify-center pt-10'>
                    
                    {/* <MyChart></MyChart> */}
                    <div>
                        <img className='hidden md:block w-8/12 mx-auto' src={chart1} alt="" />
                        <img className='block md:hidden' src={chart2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Token;