import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { AtSymbolIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <footer className="w-full bottom-0 flex items-center justify-center p-5 border-t border-indigo-500/50 bg-black">
      <div className="flex items-center justify-between p-2 px-4 md:w-5/6 w-full space-x-2">
        <div className="flex items-center gap-1 cursor-pointer">
          <AtSymbolIcon className="h-3 w-3"/>
          <p className="text-xs">{new Date().getFullYear()}. All rights reserved.</p>
        </div>
        <a
          href="https://webdevali.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="md:text-xl text-center font-thin text-xs md:tracking-widest"
        >
          Made with Love By <span className="text-lime-500">Ali.F</span>
        </a>
        <p className="md:text-sm text-xs md:leading-normal text-end md:font-medium text-purple-500 uppercase">
          Shop now
        </p>
      </div>
    </footer>
  );
};

export default Footer;
