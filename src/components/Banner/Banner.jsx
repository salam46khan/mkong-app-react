import React from 'react';
import mainPic from '../../assets/pic/Group_1-removebg-preview.png'
import forest from '../../assets/pic/image 15.png'
import cartoon from '../../assets/pic/image 44.png'
import banana from '../../assets/pic/image 16.png'
import topForest1 from '../../assets/pic/Group 41.png'
import topForest2 from '../../assets/pic/Group 42.png'
import leaf1 from '../../assets/pic/image 11.png'
import leaf2 from '../../assets/pic/image 12.png'

const Banner = () => {
    return (
        <div className='relative bg-mySky md:min-h-[800px] min-h-[700px]'>
            <div className='md:block absolute w-full h-[20vh] overflow-hidden hidden'>
                <img className='md:block absolute hidden -left-10 -top-10 w-1/4' src={topForest2} alt="" />
                <img className='md:block absolute hidden -right-0 top-0 w-1/3' src={topForest1} alt="" />
            </div>

            <div className="container relative p-3">
                <img className='md:block absolute hidden  z-10 top-3/4 left-1/4 translate-y-40 -translate-x-40' src={leaf1} alt="" />
                <img className='md:block absolute hidden  z-10 top-3/4 left-0 translate-y-20 translate-x-40 opacity-60' src={leaf2} alt="" />
                <div className='pt-40'>
                    <h1 className='text-6xl md:text-8xl lg:text-9xl font-TitleText text-white text-center'>Welcome To Smonkey Kong</h1>
                </div>
                <div className='flex justify-end'>
                    <div className='w-full md:w-1/3 text-white pt-5 text-[18px] text-center md:text-left'>
                        <p>
                            Welcome to smonkey kong,
                        </p>
                        <p>
                            Where the jungle meets adventure and excitement
                        </p>
                    </div>
                </div>
            </div>

            <div className='absolute container z-50 -bottom-10 left-1/2 -translate-x-1/2 w-full'>
                <img className='w-full md:w-10/12 lg:w-5/12 mx-auto' src={mainPic} alt="" />
            </div>
            <div className='md:block absolute hidden container bottom-0 left-1/2 -translate-x-1/2  w-full'>
                <div className=' relative w-2/6'>
                    <img className='absolute left-0 bottom-0 z-20' src={forest} alt="" />
                    <img className='absolute left-1/2 -translate-x-1/2 bottom-0 z-0' src={cartoon} alt="" />
                </div>

            </div>
            <div className='md:block z-50 absolute hidden container z-10 bottom-0 left-1/2 -translate-x-1/2'>
                <div className='absolute right-0 w-2/6'>
                    <img className='absolute w-1/3 right-0 -translate-x-1/2 bottom-0 translate-y-14 z-20' src={banana} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;