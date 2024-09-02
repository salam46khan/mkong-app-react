import { FaRegCopy } from 'react-icons/fa';
import cartoon from '../../assets/pic/image 4.png'
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import heroku from '../../assets/pic/image 26.svg'
import twtr from '../../assets/pic/image 24.svg'
import twiteer from '../../assets/pic/image 23.svg'
import banana from '../../assets/pic/image 41.png'
const Footer = () => {
    return (
        <div className="relative z-10 bg-mySky py-16">
            <img className='absolute hidden md:block top-0 left-0 h-24 w-24 -translate-y-16 translate-x-20' src={banana} alt="" />
            <div className="container">
                <div className="p-10 bg-white flex justify-between items-end flex-col md:flex-row-reverse">
                    <div className='relative w-full h-20 md:w-1/4'>
                        <img className='absolute w-3/4 left-1/2 -translate-x-1/2 bottom-0' src={cartoon} alt="" />
                    </div>
                    <div className='w-full md:w-3/4'>
                        <h4 className="font-TitleText text-3xl font-bold">CONTRACT ADDRESS</h4>
                        <div className="flex pt-3 items-center gap-4">
                            <p className="text-xl w-full md:w-auto overflow-hidden">BYuXXFn68oNqEB5NhSbXZhfbv23BA7y7SDCkQS9xJBk1</p>
                            <CopyToClipboard text="BYuXXFn68oNqEB5NhSbXZhfbv23BA7y7SDCkQS9xJBk1" className="bg-black rounded-lg border-none text-white px-3 py-1 cursor-pointer flex items-center gap-2">
                                <span>
                                    copy
                                    <FaRegCopy />
                                </span>
                            </CopyToClipboard>

                        </div>
                        
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-center py-10 text-white'>
                    <h4 className='w-full md:w-2/12 text-center md:text-start font-bold text-2xl'>DISCLOSURE:</h4>
                    <div className='w-full md:w-8/12'>
                        <p className='text-center md:text-start pt-3 md:pt-0'>
                            By purchasing SmonkeyKong token, you agree that you are not purchasing a security or investment contract and you agree to hold the team harmless and not liable for any gains, losses or taxes you may incur. Although SmonkeyKong is a community driven Defi Ecosystem project and not a registered digital currency.
                        </p>
                    </div>
                    <div className='w-full md:w-2/12 flex items-top justify-center md:justify-end gap-5 pt-5 md:pt-0'>
                        <Link to={'/'}>
                            <img src={heroku} alt="" />
                        </Link>
                        <Link to={'/'}>
                            <img src={twtr} alt="" />
                        </Link>
                        <Link to={'/'}>
                            <img src={twiteer} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;