import { ArrowRight, CornerDownRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ProjectPic from "@/public/project.png";

export default function RecentProjectCom() {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Recent Projects</h1>
          <Link
            href="/"
            className="text-base flex justify-end items-center gap-1 text-blue-500  underline underline-offset-8 decoration-gray-500 hover:text-[#28a746] hover:decoration-[#28a746] transition-colors ease-in-out duration-500"
          >
            <span>All Projects</span>
            <span className="text-md">
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>
        <div className="grid grid-rows-1 gap-5">
          <div className="rounded-lg w-full h-full scale-90 hover:scale-100 transition-transform duration-500 ease-in-out">
            <Image
              className="rounded-lg"
              src={ProjectPic}
              alt="Profile Picture"
              width={0}
              height={0}
              layout="responsive"
              sizes="100vw"
            />
          </div>
          <div className="rounded-lg w-full h-full scale-90 hover:scale-100 transition-transform duration-500 ease-in-out">
            <Image
              className="rounded-lg"
              src={ProjectPic}
              alt="Profile Picture"
              width={0}
              height={0}
              layout="responsive"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
