import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
 
  const handleCloseModals = useCallback(() => {
    setMenuOpen(false);
    setShow(false);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseModals();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [handleCloseModals]);

  const [show, setShow] = useState(false);

  return (
    <header>
      <nav className="w-full bg-black text-white">
        <div className="container mx-auto flex flex-row justify-center w-full h-full ">
          <div className="">
            <Link href="/">
              <Image src="/vitdclogo.svg" alt="DC" width={200} height={200} />
            </Link>
          </div>
          <div className="py-8">
            <ul className="flex flex-row mt-4 text-white gap-20 text-xl">
              <li>
                <div
                  onClick={() => setMenuOpen(true)}
                  className="w-48 h-5 text-center text-white text-base font-normal uppercase leading-3 tracking-widest"
                >
                  Slide
                </div>
              </li>
              <li>
                <Link href="/">
                  <div className="w-48 h-5 text-center text-white text-base font-normal uppercase leading-3 tracking-widest">
                    Home
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/Gallery">
                  <div className="w-24 h-5 text-center text-white text-base font-normal uppercase leading-3 tracking-widest">
                    Gallery
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/Events">
                  <div className="w-28 h-5 text-center text-white text-base font-normal uppercase leading-3 tracking-widest">
                    Events
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/Achievements">
                  <div className="w-44 h-5 text-center text-white text-base font-normal uppercase leading-3 tracking-widest">
                    Achievements
                  </div>
                </Link>
              </li>
              <li>
                <div
                  onClick={() => setShow(true)}
                  className="w-48 h-5 text-center text-white text-base font-normal uppercase leading-3 tracking-widest"
                >
                  Contact Us
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      { /*Right slider */ }
      <Transition.Root show={show}>
        <BackgroundLayer />
        <SlideOverLayer>
          <div className="w-full">
            <div onClick={() => setShow(false)}><Image src='/icons/cross.png' alt='X' height={15} width={15}></Image></div>
            <div className="w-64 h-5 left-[92px] top-[43px] text-center text-lg font-black uppercase">
              Contact Us
            </div>
            <div className="py-3"></div>
            <div className="w-80 h-px left-[45px] top-[76px]  border border-white"></div>
            <div className="py-3"></div>
            <span
              style={{
                color: "white",
                fontSize: "base",
                fontWeight: "bold",
                textTransform: "uppercase",
                lineHeight: "tight",
                letterSpacing: "widest",
              }}
            >
              NOTE :
            </span>
            <span
              style={{
                color: "white",
                opacity: 0.7,
                fontSize: "base",
                fontWeight: "bold",
                textTransform: "uppercase",
                lineHeight: "tight",
                letterSpacing: "widest",
              }}
            >
              <div className="w-80 h-7">
                Contact us for collaboration, fest invites, events, and queries
              </div>
              <div className="py-3"></div>
              <br />
            </span>
            <div className="w-80 h-7 left-[92px] top-[204px]   text-lg font-semibold uppercase leading-3 tracking-widest">
              Mail Us
            </div>
            <div className="w-60 h-px left-[85px] top-[239px]  border border-white"></div>
            <div className="py-3"></div>
            <div className="w-80 h-7 left-[92px] top-[284px]  text-lg font-semibold uppercase leading-3 tracking-widest">
              Visit Instagram
            </div>
            <div className="w-64 h-px left-[85px] top-[318px]  border border-white"></div>
            <div className="py-3"></div>
            <div className="w-80 h-7 left-[92px] top-[363px]   text-lg font-semibold uppercase leading-3 tracking-widest">
              Visit YouTube
            </div>
            <div className="w-64 h-px left-[85px] top-[398px]  border border-white"></div>
            <div className="py-3"></div>
            <div className="w-80 h-16 left-[92px] top-[427px]   text-lg font-semibold uppercase leading-3 tracking-widest">
              Phone
            </div>
            <div className="w-44 h-6 left-[92px] top-[456px]   text-lg font-medium leading-normal tracking-wide">
              +91 9840466868
            </div>
            <div className="w-44 h-6 left-[92px] top-[490px] text-lg font-medium leading-normal tracking-wide">
              +91 8078281652
            </div>
          </div>
        </SlideOverLayer>
      </Transition.Root>
      { /* Left Slider */ }
      <Transition.Root show={menuOpen}>
        <BackgroundLayer />
        <SlideOverLayerLeft>
          <div className="modal-container" onClick={handleCloseModals}>
          <div onClick={() => setShow(false)}> <Image src='/icons/cross.png' alt='X' height={20} width={20}></Image> </div>
            <div className="w-64 h-6 left-[10px] top-[129px] font-bold uppercase leading-3 tracking-widest absolute px-52 whitespace-nowrap">
              The board 2023
            </div>
            <div className="w-64 h-6 left-[10px] top-[198px] text-base font-bold uppercase leading-3 tracking-widest absolute px-52 whitespace-nowrap">
              faculty coordinators
            </div>
            <div className="w-64 h-6 left-[10px] top-[267px] text-base font-bold uppercase leading-3 tracking-widest absolute px-52 whitespace-nowrap">
              developer team
            </div>
            <div className="w-64 h-6 left-[10px] top-[336px]  text-base font-bold uppercase leading-3 tracking-widest absolute px-52 whitespace-nowrap">
              board history
            </div>
            <div className="w-64 h-6 left-[10px] top-[406px] text-base font-bold uppercase leading-3 tracking-widest absolute px-52 whitespace-nowrap">
              journey of dc
            </div>
            <div className="w-64 h-6 left-[10px] top-[476px] text-base font-bold uppercase leading-3 tracking-widest absolute px-52 whitespace-nowrap">
              Notable alumnis
            </div>
            <div className="left-[20px] top-[44px] text-lg font-black uppercase leading-3 tracking-widest absolute px-64 whitespace-nowrap">
              menu
            </div>
            <div className="w-96 left-44 h-px top-[233px] absolute border border-white px-40"></div>
            <div className="w-96 left-44 h-px top-[302px] absolute border border-white px-40"></div>
            <div className="w-96 left-44 h-px top-[372px] absolute border border-white px-40"></div>
            <div className="w-96 left-44 h-px top-[442px] absolute border border-white px-40"></div>
            <div className="w-96 left-44 h-px top-[164px] absolute border border-white px-40"></div>
            <div className="w-96 left-44 h-px top-[76px] absolute border border-white"></div>    
          </div>
        </SlideOverLayerLeft>
      </Transition.Root>
    </header>
  );
};

const BackgroundLayer: React.FC = () => (
  <Transition.Child
    enter="transition-opacity ease-in-out duration-500"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity ease-in-out duration-500"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div className="fixed inset-0 bg-gray-500 opacity-75" />
  </Transition.Child>
);

interface SlideOverLayerProps {
  children: React.ReactNode;
}

const SlideOverLayer: React.FC<SlideOverLayerProps> = ({ children }) => (
  <Transition.Child
    as={Fragment}
    enter="transform transition ease-in-out duration-500"
    enterFrom="translate-x-full"
    enterTo="translate-x-0"
    leave="transform transition ease-in-out duration-500 delay-100"
    leaveFrom="translate-x-0"
    leaveTo="translate-x-full"
  >
    <div className="z-[150] fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-48">
          <div className="pointer-events-auto w-screen max-w-2xl">
            <div className="bg-black opacity-80 text-white py-6 shadow-xl h-screen items-center place-items-center">
              <div className="px-52">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition.Child>
);
const SlideOverLayerLeft: React.FC<SlideOverLayerProps> = ({ children }) => (
  <Transition.Child
    as={Fragment}
    enter="transform transition ease-in-out duration-500"
    enterFrom="-translate-x-full"
    enterTo="translate-x-0"
    leave="transform transition ease-in-out duration-500 delay-100"
    leaveFrom="translate-x-0"
    leaveTo="-translate-x-full"
  >
    <div className="z-[150] fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none fixed inset-y-0 -left-10 flex max-w-full pl-10">
          <div className="pointer-events-auto w-screen max-w-2xl">
            <div className="bg-black opacity-80 text-white py-6 shadow-xl h-screen items-center place-items-center">
              <div className="bg-black">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition.Child>
);

export default Header;
