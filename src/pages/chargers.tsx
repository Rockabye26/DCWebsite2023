import React from 'react';
import Image from 'next/image';

type chargersProps = {
    
};

const chargers:React.FC<chargersProps> = () => {
    
    return (<div className="xl:w-full lg:w-9/10 w-full mx-auto text-left border-solid border-white px-2 py-2">
    <div className="flex max-sm:px-6 justify-center">
            <Image
              src="/Teams/chargerslogo.svg"
              alt="chargers"
              width={100}
              height={100}
            />
          </div>
    <div className="text-center text-white text-lg md:text-xl font-extrabold px-4  leading-12 tracking-widest md:mb-4">
      CHARGERS
    </div>
    <div className="text-center text-gray-400 text-sm md:text-md lg:text-md font-normal mb-8">
    A dance group embodying the essence of South Indian rhythms, a perfect blend of dappankuthu beats and western moves .
    With their electrifying choreography, energy, synchronicity, and an irresistible dose of swag. A team with a 
    decade-strong legacy of unstoppable journey.
    </div>
    <div className='flex max-sm:px-6 justify-center'>
    <Image
              src="/Teams/chargers.svg"
              alt="chargers"
              width={1000}
              height={1000}
            />
    </div>
    <div className="py-10 text-center justify-center flex border rounded-3xl mt-10">
        <Image src="/BBC/Frame 11.svg" alt="BBC" width={40} height={40} />
        <div className="px-5 py-2 font-bold text-lg">
          {" "}
          The Junior Dance Team of Chargers is{" "}
          <span className="text-[#BBC1FF]"> Energizers </span>{" "}
        </div>
      </div>
      <div className="gap-4 columns-3 py-10">
        <Image
          src="/Chargers/vaishnavi.png"
          alt="chargers"
          width={500}
          height={500}
          className="pt-12"
        />
        <div className="text-center pt-4 font-semibold">VAISHNAVI P MAHESH</div>
        <div className="text-center text-xs text-gray-400 font-semibold ">
          TEAM REPRESENTATIVE
        </div>
        <Image src="/Chargers/siraj.svg"
         alt="chargers" width={500} 
         height={500} />
        <div className="text-center pt-4 font-semibold">SIRAJUDEEN</div>
        <div className="text-center text-xs text-gray-400 font-semibold">
          TEAM HEAD
        </div>
        <Image
          src="/Chargers/girish.svg"
          alt="chargers"
          width={500}
          height={500}
          className="pt-12"
        />
        <div className="text-center pt-4 font-semibold">GIRISH KUMAR</div>
        <div className="text-center text-xs text-gray-400 font-semibold">
          JDC COORDINATOR - ENERGIZERS
        </div>
      </div>
      <div className="text-3xl text-center font-extrabold">Mini-Gallery</div>
      <div className="text-center justify-center text-sm text-gray-400">
        Glimpse of our latest performances throughout many events
      </div>
      <div className="gap-4 columns-2 py-4">
        <Image src="/Chargers/chargersgallery.svg" 
        alt="Chargers"
         width={500} 
         height={500} />
      </div>

  </div>
  );
}
export default chargers;