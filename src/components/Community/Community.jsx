import frost from '../../assets/pic/image 15.png'
import cartoon from '../../assets/pic/image 7.png'


const Community = () => {
    return (
        <div className="relative z-10 bg-myGreen md:min-h-[800px] min-h-[620px]">
            <div className="container pt-36 p-2 text-right">
                <div className=''>
                    <h3 className="md:text-6xl text-4xl font-bold md:pr-36">
                        SMONKEYKONG
                    </h3>
                    <h2 className="md:text-7xl md:pr-16 text-5xl pt-4 font-extrabold">
                        COMMUNITY
                    </h2>
                </div>
                <p className="w-full md:max-w-[565px] ml-auto pt-4 text-[17px] text-center md:text-left">
                    SmonkeyKong's epic quest: Gather a global gang of empowered, fun-loving earthlings ready to conquer a universe bursting with endless light, laughter, and epic vibes. Step into SmonkeyKong Land.
                </p>
            </div>


            <div className='container absolute bottom-0 left-1/2 -translate-x-1/2 h-3  '>
                <div className="absolute hidden md:block bottom-0 right-0 w-3/12 bg-slate-300 ">
                    <div className=' relative bg-red-200 bottom-0 right-0'>
                        <img className='w-full absolute bottom-0 z-40' src={frost} alt="" />
                        <img className='w-4/12 left-1/2 -translate-x-1/2 z-30 absolute bottom-0' src={cartoon} alt="" />
                    </div>
                </div>
            </div>

            <div className='container absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto'>
                <div className="absolute w-full md:w-1/3 left-0 z-40 bottom-0">
                    <div className='relative w-full'>
                        <img className='absolute w-full bottom-0 z-40' src={frost} alt="" />
                        <img className='w-6/12 md:w-10/12 mx-auto z-40' src={cartoon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;