
import {TbBrandMeta} from "react-icons/tb"
import {IoLogoInstagram} from "react-icons/io"
import {RiTwitterXFill} from "react-icons/ri"

const Topbar=() =>{

    return  <div className="bg-rabbit-red text-white py-3">
    <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="hover:text-gray-300">
                <TbBrandMeta size={20} />
            </a>
            <a href="#" className="hover:text-gray-300">
                <IoLogoInstagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-300">
                <RiTwitterXFill size={20} />
            </a>
        </div>
        <div className="text-sm text-center">
            <span>we ship the world wide - Fast and reliable shipping!</span>

        </div>
        <div className="text-sm">
            <a href="tel:+123456789" className="hover:text-gray-300">
                 +1 (234) 567 89
            </a>

        </div>
    </div>
    </div>
};

export default Topbar;
