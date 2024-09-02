import frost from '../../assets/pic/image 15.png'
import cartoon from '../../assets/pic/image 44.png'
import leaf1 from '../../assets/pic/image 11.png'
import leaf2 from '../../assets/pic/image 12.png'
const Is = () => {
    return (
        <div className="relative z-10 bg-myYellow md:min-h-[800px] min-h-[560px]">
            <div className="container pt-36 p-2">
                <div className='md:pl-[16%]'>
                    <h3 className="md:text-6xl text-4xl font-bold">SMONKEYKONG</h3>
                    <h2 className="md:text-7xl md:pl-20 text-5xl pt-4 font-extrabold">IS..</h2>
                </div>
                <p className="w-full md:max-w-[400px] pt-4 text-[18px] text-center md:text-right">
                    SmonkeyKong isn't just any cosmic snow mon
                    he's the undisputed leader of snow monkeys across countless universes. With the epi
                </p>
            </div>
            <div className='container absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto'>
                <div className="absolute hidden md:block bottom-0 left-0 w-[340px] bg-slate-300 ">
                    <div className=' relative bg-red-200 bottom-0 left-16'>
                        <img className='w-full absolute bottom-0 z-40' src={frost} alt="" />
                        <img className='w-4/12 left-1/2 -translate-x-1/2 z-30 absolute bottom-0' src={cartoon} alt="" />
                    </div>
                </div>
            </div>
            <div className='container absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto'>
                <div className="absolute bottom-0 right-0 md:w-2/3 w-full  ">
                    <div className=' relative bottom-0 '>
                        <img className='md:w-[60%] w-full md:left-3/4 left-1/2 -translate-x-1/2 md:-translate-x-2/3 absolute bottom-0 z-40' src={frost} alt="" />
                        <img className='w-4/12 md:left-3/4 left-1/2 -translate-x-1/2 md:-translate-x-2/3 z-30 absolute bottom-0' src={cartoon} alt="" />
                    </div>
                </div>
            </div>

            <div className='absolute hidden md:block h-48 w-36 top-1/2 left-1/2 -translate-x-1/2'>
                <img className='absolute top-0 left-0 w-24 opacity-80' src={leaf2} alt="" />
                <img className='absolute bottom-0 right-0 w-24 ' src={leaf1} alt="" />
            </div>
        </div>
    );
};

export default Is;