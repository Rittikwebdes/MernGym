import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <footer className=" flex  justify-around flex-wrap footer backdrop-blur-3xl  items-center md:px-10 md:py-3 px-2 py-2 text-white">
              <div><img src="/logo.png" alt="" width={50}/></div>
              <div><p>Copyright © {new Date().getFullYear()} - All right reserved</p></div>
              <div className="flex">
                <a href="https://www.facebook.com/"><FaFacebook size={20} className="text-blue-600"/></a>
                <a href="https://www.instagram.com/"><FaInstagramSquare size={20} className="text-pink-600"/></a>
                <a href="https://github.com/"><FaGithub size={20} className="text-black-600"/></a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
