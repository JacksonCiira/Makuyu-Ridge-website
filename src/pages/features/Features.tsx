import golf from '../../assets/images/img-3.jpg'

const Features = () => {
  return (
    <>
      <div className="m-4">
        <h1>Feautres</h1>
      </div>

      <div className="m-4">
        <p>The project offers:</p>
        <div className=" m-4 flex items-center gap-8 ">
          <div className="w-80 h-80 bg-[beige] rounded-xl shadow-xl px-4 relative">
            <p className="text-center absolute bottom-0">Scenic Spanish- style Homes</p>
          </div>
          <div className="w-80 h-80 bg-[beige] rounded-xl shadow-xl px-4 relative ">
            <p className="text-center absolute bottom-0">Spectacular Views of mt. Kenya</p>
          </div>
          <div className="w-80 h-80 bg-[beige] rounded-xl shadow-xl relative px-4">
            <p className="text-center absolute bottom-0">Eco-lodges & Arboretums</p>
          </div>
          <div className="w-80 h-80 bg-[beige] rounded-xl shadow-xl relative px-4">
            <p className="text-center absolute bottom-0">Magnificent Water features & Children's playground</p>
          </div>
          <div className="w-80 h-80 bg-[beige] rounded-xl shadow-xl relative px-4">
            <p className="text-center absolute bottom-0">Beautifully Landscaped Gardens</p>
          </div>
          <div className="w-80 h-80 bg-[beige] rounded-xl shadow-xl relative px-4">
            <p className="text-center absolute bottom-0">Scenic View of Masinga dam</p>
          </div>
          <div className="w-80 h-80 bg-[beige] rounded-xl shadow-xl relative px-4">
            <p className="text-center absolute bottom-0">ICT connection</p>
          </div>
          <div className="w-80 h-80 bg-[beige] rounded-xl shadow-xl relative px-4">
            <p className="text-center absolute bottom-0">Adequate Water Supply</p>
          </div>
        </div>
        <div className="m-6 bg-[beige] rounded-xl relative shadow-xl h-80">
          <img className='absolute h-80' src={golf} alt="" />
          <p className="text-center flex absolute bottom-0">
            An 18 hole golf course designed by world’s renowned golf architect
          </p>
        </div>
      </div>
    </>
  );
};

export default Features;
