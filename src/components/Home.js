import Navbar from "./Navbar";
import FootBar from "./Footbar";
import Carousel from './Carousel';
import { NavLink,Link } from "react-router-dom";
import { FaAt, FaFacebook, FaStar, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsApple,BsAndroid2 } from "react-icons/bs"


const Home = () => {
    let HOME_PIC1 = require('../images/bg1.jpg');
    let HOME_PIC2 = require('../images/bg2.jpg');
    let HOME_PIC3 = require('../images/bg3.jpg');
    let HOME_PIC4 = require('../images/bg4.jpg');
    let HOME_PIC5 = require('../images/bg5.jpg');
    let HOME_PIC6 = require('../images/bg6.jpg');
    let HOME_PIC7 = require('../images/bg7.jpg');

    const slides = [
        <img src={HOME_PIC1} alt="Slide 1" />,
        <img src={HOME_PIC4} alt="Slide 2" />,
        <img src={HOME_PIC3} alt="Slide 3" />,
      ];

    return ( 
        <div className="home h-full bg-white">
            <Navbar/>
            <div className="p-6 w-full bg-[url('./images/bg8.jpg')] bg-no-repeat bg-cover bg-center items-center space-y-4 lg:px-24 lg:space-y-4 lg:justify-around lg:h-[28rem] lg:max-h-[29rem]">
                <div className="header bg-green-600 bg-opacity-50 lg:bg-opacity-0 text-black px-4 rounded-3xl py-4 space-y-2">
                    <h1 class="top-3 text-sky-600 lg:text-green-600 font-bold text-3xl lg:text-5xl lg:max-w-4xl">Welcome to...<br/><p className="text-white lg:text-black text-justify text-lg lg:text-xl">
                    The Betterment and Empowerment Foundation (BEF), where we transform lives in the Niger Delta. 
                    Founded on the belief that everyone deserves a chance at a better life, 
                    BEF is dedicated to eradicating poverty and hunger through direct food and financial aid. 
                    Join us in our journey towards a brighter, self-sustaining future for all.</p>
                    </h1>
                    <h1><NavLink to="/events" className="p-2 border-2 border-black lg:border-white text-black lg:text-white rounded-lg bg-white lg:bg-black hover:bg-green-600  ease-in duration-500"><b>Upcoming Events....</b></NavLink></h1>

                    <ul className="flex pt-4 lg:pt-10">
                        <FaAt className="text-3xl lg:text-4xl text-white lg:text-black hover:text-green-600 ease-in duration-500"/>
                        <Link to="https://twitter.com"><FaTwitter className="text-3xl lg:text-4xl text-white lg:text-black ml-4 lg:ml-20 hover:text-green-600 ease-in duration-500"/></Link>
                        <Link to="https://instagram.com"><FaInstagram className="text-3xl lg:text-4xl text-white lg:text-black ml-4 lg:ml-20 hover:text-green-600 ease-in duration-500"/></Link>
                        <Link to="https://facebook.com"><FaFacebook className="text-3xl lg:text-4xl text-white lg:text-black ml-4 lg:ml-20 hover:text-green-600 ease-in duration-500"/></Link>
                    </ul>
                </div>
            </div>
            <div className="apps bg-green-600 px-6 py-4 items-center text-white lg:flex lg:px-24 lg:space-x-10">
                <h1 className="text-lg lg:text-2xl">Download Our Mobile app & Get Swift, Efficient service just for you.</h1>
                <ul className="flex text-green-600 space-x-4">
                    <Link to="#" className="flex p-2 items-center border-2 bg-white rounded-md hover:text-sky-600 ease-in duration-500"><BsApple className="text-lg mr-2 my-auto hover:text-sky-600 ease-in duration-500 lg:text-xl lg:mr-4"/><b>App Store</b></Link>
                    <Link to="#" className="flex p-2 items-center border-2 bg-white rounded-md hover:text-sky-600 ease-in duration-500"><BsAndroid2 className="text-lg mr-2 my-auto hover:text-sky-600 ease-in duration-500 lg:text-xl lg:mr-4"/><b>Play Store</b></Link>
                </ul>
            </div>
            <div className="learn p-2 lg:mt-10">
                <h1 className="text-lg text-center lg:text-4xl"><b>Cultivate Compassion, Empower Communities.</b></h1>
                <p className="text-lg text-center text-green-600 md:font-semibold lg:text-2xl">Championing Community Development.</p>
                <section className="px-4 py-10 justify-center items-center space-y-4 lg:flex lg:space-y-0 lg:space-x-4 lg:px-16">
                    <div className="container mx-auto">
                        <Carousel slides={slides} />
                        <p></p>
                    </div>
                </section>
            </div>
            <FootBar/>
        </div>
     );
}
 
export default Home