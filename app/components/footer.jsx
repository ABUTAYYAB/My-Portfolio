// @flow strict
import Link from 'next/link';
import { personalData } from '@/utils/data/personal-data';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white overflow-hidden">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-center md:text-left break-words">
            © {new Date().getFullYear()} <Link target="_blank" href={personalData.linkedIn} className="text-[#16f2b3]">{personalData.name}</Link>
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link
              target="_blank"
              href={personalData.github}
              className="min-h-[44px] flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <IoStar />
              <span>GitHub</span>
            </Link>
            <Link
              target="_blank"
              href={personalData.linkedIn}
              className="min-h-[44px] flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <CgGitFork />
              <span>LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;