import roundCartoon from '../../assets/pic/Group 30.png'
const RoadmapItem = ({text, btnCount}) => {
    return (
        <div className="w-full max-w-[300px] min-h-[380px] md:max-w-[320px] md:max-h-[320px] bg-white mt-16 relative flex flex-col justify-center">

            <img className='w-2/3 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2' src={roundCartoon} alt="" />
            <div className='p-5 pt-10'>
                <p className='text-center text-[18px]'>
                    {text}
                </p>
            </div>
            <button className='w-full absolute bottom-0 mt-auto border-none bg-black p-4 text-2xl text-white'>
                {btnCount}
            </button>
        </div>
    );
};

export default RoadmapItem;