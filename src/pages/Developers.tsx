import React from "react";
import Link from "next/link";
import Image from "next/image";

const Developers = () => {
  const images = [
    {
      imageUrl: "/Developers/nandin.svg",
    },
    {
      imageUrl: "/Developers/Group 633.svg",
    },
    {
      imageUrl: "/Developers/Group 634.svg",
    },
    {
      imageUrl: "/Developers/Group 635.svg",
    },
  ];

  return (
    <>
      <div className="backdrop-blur-2xl backdrop-brightness-125">
        <Link href="/" className="absolute hidden lg:block pt-14 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
        <div className="flex justify-center items-center ">
          <div className="text-center p-8 max-w-screen-lg w-full overflow-y-auto">
            <div className="mb-1">
              <div className="text-lg font-bold uppercase tracking-wider md:text-2xl mt-8 text-white">
                Developers Team
              </div>
            </div>
            <p className="text-xs md:text-md mb-8 text-gray-300">
              Meet the creative UIUX Team and the talented Developers of this
              website.
            </p>
            <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:w-2/3">
              {images.map((image, index) => (
                <div key={index} className="text-center">
                  <Image
                    src={image.imageUrl}
                    alt={`Image ${index + 1}`}
                    width={1000}
                    height={1000}
                  />
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Developers;
