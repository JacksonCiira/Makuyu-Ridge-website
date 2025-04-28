import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import footerImg from '../assets/images/aprojectof.png'


const Footer = () => {
  return (
    <><div className=" relative m-4 py-4 text-[#486232] ">
        
      <div className=" grid grid-cols-2 justify-end gap-[68vw] px-4 ">
      <div className="leading-[1]">
        <h1>General Enquiry</h1>
        <p>+254 (0) 20 206 7872</p>
        <p>+254 (0) 113 342 473</p>
        <br />
        <p>+254 (0) 739 999 066 <br/>info@makuyuridge.co.ke</p>
      </div>
      <div className=" px-8 leading-[1] mt-16">
        
        <h1>Sales Enquiry</h1>
        <p>+254 (0) 726 771 623</p>
        <p>smutulu@makuyuridge.co.ke</p>
        <div className='flex justify-between text-2xl'><FaFacebook/><FaInstagram/><FaTwitter/></div>
      </div>
      </div>
      <div className="flex justify-center bg-[black] text-center w-80 absolute left-[40vw] bottom-20 rounded-lg">
        <img className='w-80 shadow-lg'
        src={footerImg} alt="" />
      </div>
      <div className="  text-center"><p>2025</p></div>
    </div>
    </>
  );
};

export default Footer;
