import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaTerminal, FaTwitter } from "react-icons/fa";
import Navbar from "./Navbar";
import FootBar from "./Footbar";

const Get_Involved = () => {
    return ( 
        <div className="contact h-max bg-white">
            <Navbar/>
            <div className="body lg:flex p-4 mt-7 lg:justify-around lg:mx-auto lg:px-auto lg:max-w-6xl lg:mt-10">
                <div className="space-y-4 w-full pt-7 lg:overflow-y-auto lg:w-1/2 lg:py-2">
                    <h1 className="flex space-x-2 text-black text-3xl lg:text-6xl"><span><FaTerminal className="text-cyan-500"/></span><b  id="txtHead" class="ease-in duration-500" >Contact_Us</b></h1>
                    <p className="text-black text-lg text-justify ease-in duration-500">Welcome to Volunteer Energy, your dedicated source for innovative solutions in oil and gas consulting and high-quality general merchandise services. 
                    We are here to power your projects and elevate your business.</p>
                    <p className="text-black text-lg text-justify ease-in duration-500">Feel free to contact us for any inquiries, feedback, or collaboration opportunities. 
                    We pride ourselves on responsive communication and are dedicated to providing personalized assistance to meet your specific needs.</p>
                    <p class="flex space-x-2 text-lg lg:text-xl">
                        <Link to="https://twitter.com"><FaTwitter className="text-2xl text-black hover:text-pink-600 ease-in duration-500"/></Link>
                        <Link to="https://linkedin.com"><FaLinkedin className="text-2xl text-black ml-4 lg:ml-20 hover:text-pink-600 ease-in duration-500"/></Link>
                        <Link to="https://instagram.com"><FaInstagram className="text-2xl text-black ml-4 lg:ml-20 hover:text-pink-600 ease-in duration-500"/></Link>
                    </p>
                    <p class="text-lg text-cyan-500 text-justify"><Link to="">onyedikachimike87@gmail.com</Link>, +2348037551558</p>
                    <div class="py-2 lg:hidden">
                        <form action="">
                            <input className="w-full text-white p-2 border-2 border-pink-600 bg-gray-700 rounded-lg ease-in duration-500 mt-4" type="text"
                                placeholder="Name"/> <br/>
                            <input className="w-full text-white p-2 border-2 border-pink-600 bg-gray-700 rounded-lg ease-in duration-500 mt-4" type="email"
                                placeholder="Email"/> <br/>
                            <textarea className="w-full text-white p-2 placeholder:-translate-y-0 border-2 border-pink-600 bg-gray-700 rounded-lg ease-in duration-500 mt-4" type="text"
                                rows="10" cols="5" placeholder="Your message"></textarea> <br/>
                            <button id="txtBod6"
                                className="w-full p-2 text-lg border-2 border-pink-800 bg-pink-600 rounded-lg ease-in duration-500 mt-4">Send message</button>
                        </form>
                    </div>
                </div>
                <div class="p-2 hidden lg:block lg:w-1/3">
                    <form>
                        <input className="w-full text-black p-2 border-2 border-pink-600 bg-gray-100 rounded-lg ease-in duration-500 mt-4" type="text"
                            placeholder="Name"/> <br/>
                        <input className="w-full text-black p-2 border-2 border-pink-600 bg-gray-100 rounded-lg ease-in duration-500 mt-4" type="email"
                            placeholder="Email"/> <br/>
                        <textarea className="w-full text-black p-2 border-2 border-pink-600 bg-gray-100 rounded-lg ease-in duration-500 mt-4" type="text"
                            rows="10" cols="5" placeholder="Your message"></textarea> <br/>
                        <button
                            className="w-full p-2 text-lg border-2 border-cyan-500 bg-pink-600 rounded-lg ease-in duration-500 mt-4">Send message</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Get_Involved;