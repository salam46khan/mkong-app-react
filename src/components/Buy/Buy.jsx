
import BuyItem from './BuyItem';
const Buy = () => {
    return (
        <div className="relative z-10 bg-myYellow py-28">
            <div className="container">
                <h2 className="text-4xl md:text-6xl font-semibold text-center">
                    HOW TO BUY
                </h2>
                <div className="flex flex-col md:flex-row justify-center flex-wrap items-center pt-16 gap-10">
                    {/* <div className="w-full max-w-[300px] min-h-[300px] md:max-w-[320px] md:max-h-[320px] bg-white rounded-full relative flex">
                        <div className="h-20 w-20 absolute top-0 left-0 rounded-full bg-myGreen flex justify-center items-center border-2 text-white">
                            <h3 className="text-3xl font-semibold">01</h3>
                        </div>
                        <div className=' flex items-center p-4'>
                            <h2 className='w-7/12 text-3xl font-semibold p-2'>
                                create Phantom Wallet
                            </h2>
                            <div className='w-5/12'>
                                <img src={cartoon} alt="" />
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="w-full max-w-[300px] min-h-[300px] md:max-w-[320px] md:max-h-[320px] bg-white rounded-full relative flex">
                        <div className="h-20 w-20 absolute top-0 left-0 rounded-full bg-myGreen flex justify-center items-center border-2 text-white">
                            <h3 className="text-3xl font-semibold">02</h3>
                        </div>
                        <div className=' flex items-center p-4'>
                            <h2 className='w-7/12 text-3xl font-semibold p-2'>
                                Fund it with solana
                            </h2>
                            <div className='w-5/12'>
                                <img src={cartoon} alt="" />
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="w-full max-w-[300px] min-h-[300px] md:max-w-[320px] md:max-h-[320px] bg-white rounded-full relative flex">
                        <div className="h-20 w-20 absolute top-0 left-0 rounded-full bg-myGreen flex justify-center items-center border-2 text-white">
                            <h3 className="text-3xl font-semibold">03</h3>
                        </div>
                        <div className=' flex items-center p-4'>
                            <h2 className='w-7/12 text-3xl font-semibold p-2'>
                                swap solana for SMKNG
                            </h2>
                            <div className='w-5/12'>
                                <img src={cartoon} alt="" />
                            </div>
                        </div>
                    </div> */}

                    <BuyItem text={"create Phantom Wallet"} count={"01"}></BuyItem>
                    <BuyItem text={"Fund it with solana"} count={"02"}></BuyItem>
                    <BuyItem text={"swap solana for sMKNG"} count={"03"}></BuyItem>
                </div>
            </div>
        </div>
    );
};

export default Buy;