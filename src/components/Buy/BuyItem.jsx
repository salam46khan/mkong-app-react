import cartoon from '../../assets/pic/image 4.png'

const BuyItem = ({text, count}) => {
    return (
        <div className="w-full max-w-[300px] min-h-[300px] md:max-w-[320px] md:max-h-[320px] bg-white rounded-full relative flex">
            <div className="h-20 w-20 absolute top-0 left-0 rounded-full bg-myGreen flex justify-center items-center border-2 text-white">
                <h3 className="text-3xl font-semibold">{count}</h3>
            </div>
            <div className=' flex items-center p-4'>
                <h2 className='w-7/12 text-3xl font-semibold p-2'>
                    {text}
                </h2>
                <div className='w-5/12'>
                    <img src={cartoon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BuyItem;