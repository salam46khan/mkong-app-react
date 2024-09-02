import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="container relative">
                <div className="navbar px-4 bg-base-100 absolute top-5 left-0 w-full z-50 rounded-full">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><Link to={'/'}>About</Link></li>
                                <li><Link to={'/'}>Tokenomics</Link></li>
                                <li><Link to={'/'}>Roadmap</Link></li>
                            </ul>
                        </div>
                        <Link className="font-LogoText text-3xl">MKONG</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-xl">
                            <li><Link to={'/'}>About</Link></li>
                            <li><Link to={'/'}>Tokenomics</Link></li>
                            <li><Link to={'/'}>Roadmap</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button className="uppercase bg-myYellow md:px-6 md:py-3 md:text-md px-4 py-2 text-xm font-semibold rounded-full">how to buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;