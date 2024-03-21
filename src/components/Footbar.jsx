import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const FootBar = () => {
    return ( 
        <div className="footbar text-white bg-green-600 text-center px-8 py-2 lg:px-48 bottom-0 static">
            <div className="text-center items-center w-full mx-auto lg:w-1/2">
                <h1 className="flex p-2 font-bold mx-auto px-auto items-center lg:p-2 lg:mx-24">with love from <Link to="https://www.instagram.com/ice_berg0101" className="flex ml-1 py-1"> Ice_Berg <FaHeart className="text-red-600 ml-2 my-auto"/></Link></h1>
            </div>
        </div>
     );
}
 
export default FootBar;