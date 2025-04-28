import {
  FaBuilding,
  FaChurch,
  FaHospital,
  FaHotel,
  FaSchool,
} from "react-icons/fa6";
import img1 from "../../assets/images/img-1.jpg";
import { GiClubs, GiShop } from "react-icons/gi";
import img6 from '../../assets/images/img-2-1.jpg'
import '../SiteMap'

const Home = () => {


  const handleClick = () =>{ 
    
  }

  

  return (
    <>
      <div className="bg-orange-500 m-2 rounded-xl ">
        <div className="flex justify-end">
          <img
            className="flex h-[50vh] md:h-[84vh] w-full m-2 rounded-xl  "
            src={img1}
            alt=""
          />
        </div>
        <div className="absolute top-28 md:top-40  md:ml-12">
          <h1 className="text-4xl md:text-8xl">
            Welcome to <br />
            Makuyu Ridge.
          </h1>
          <p className="text-[#b99f58] md:text-[white] text-shadow w-[400px] tracking-wider">
            Makuyu Ridge is a new holiday Golf Resort located in Makuyu,
            Murang’a County, covering 1,000 acres of land. It features ¼ acre
            residential plots, commercial sites, and an 18-hole leisure and
            championship golf course with a modern clubhouse. The resort is
            designed to offer a peaceful retreat for holiday, leisure, golf, and
            conference guests.
          </p>
          <p className="text-[white] text-shadow w-[400px] tracking-wider">
            The project is located 72km from Nairobi in Makuyu, near Kakuzi
            off the Nairobi – Thika - Sagana highway. The resort is 8km off the
            main road on the rolling ridges amongst scenic coffee estates. The
            location is one hour away from Nairobi after Thika and Makutano.
          </p>

          <div className="flex absolute right-[-45vw] justify-end gap-12 bottom-2">
          <button
          className="py-2 bg-[#d28e0f] border-[white]/60 border-4 text-lg text-[white] text-bold rounded-full cursor-pointer tracking-widest px-8 mb-0">Explore {">>"}</button>
         
        </div>
        </div>
      
      </div>

      <div className="bg-[#3a3c3b] text-[#40e667] m-2 rounded-xl py-4">
        <h3 className="text-center text-[white] font-light tracking-wider">
          We have intergrated commercial and socio-economic amenities that
          include:
        </h3>

        <div className="flex gap-4 justify-between px-8 relative">
        
          <div className="block text-center -space-y-2">
            <FaSchool className="text-6xl " />
            <p className="text-[white] text-lg font-medium">A school</p>
          </div>
          <div className="block text-center  -space-y-2">
            <FaHospital className="text-6xl " />
            <p className="text-[white] text-lg font-medium">A hospital</p>
          </div>
          <div className="block text-center -space-y-2">
            <FaBuilding className="text-6xl " />
            <p className="text-[white] text-lg font-medium">An office park</p>
          </div>
          <div className="block text-center -space-y-2">
            <GiShop className="text-6xl " />
            <p  className="text-[white] text-lg font-medium">A shopping mall</p>
          </div>
          <div className="block text-center -space-y-2">
            <FaChurch className="text-6xl " />
            <p  className="text-[white] text-lg font-medium">A community chapel</p>
          </div>
          <div className="block text-center -space-y-2">
            <GiClubs className="text-6xl " />
            <p  className="text-[white] text-lg font-medium">A residents’ club house</p>
          </div>
          <div className="block text-center -space-y-2">
            <FaHotel className="text-6xl " />
            <p  className="text-[white] text-lg font-medium">A hotel and convention center</p>
          </div>
        </div>
        
      </div>
      <div className="flex mt-4">
          <img className="w-[98vw] max-h-[60vh] rounded-xl ml-2 relative" src={img6} alt="" />
          <div className="absolute ml-40"><p className=" text-5xl font-bold text-[white] w-80 mb-0 mt-20 "> An 18 hole golf course designed by world’s renowned golf architect</p>
          <button onClick={handleClick} className="flex justify-center m mt-12 text-xl tracking-wider rounded-3xl px-4 text-[white] font-semibold bg-[orange] border-spacing-2 border-[white] cursor-pointer py-2">View Site Map</button></div>
          

        </div>
        <div className="container m-4 ml-56"><h1 className="text-center">Recent News</h1>
          <div className="grid grid-cols-4">
            <div className="w-80 h-80 rounded-xl bg-[orange]/50 "></div>
            <div className="w-80 h-80 rounded-xl bg-[orange]/50 "></div>
            <div className="w-80 h-80 rounded-xl bg-[orange]/50 "></div>
            <div className="w-80 h-80 rounded-xl bg-[orange]/50 "></div>
          </div>
          </div>
    </>
  );
};

export default Home;
