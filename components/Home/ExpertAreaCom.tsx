import { CornerDownRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import figmaIcon from "@/public/icons/figma.svg";
import NextJsIcon from "@/public/icons/next-js.png";
import NodeJsIcon from "@/public/icons/nodejs.svg";
import ReactJsIcon from "@/public/icons/react-js.svg";
import JavaScriptIcon from "@/public/icons/javascript.svg";
import MongodbIcon from "@/public/icons/mongo-db.png";
export default function ContactCardCom() {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="card-body">
        <h1 className="text-2xl font-bold">My Expert Area</h1>
        <div className="grid grid-cols-3 gap-2 my-5">
          <div>
            <div className="bg-[#F0F2F5] rounded-lg p-3 flex justify-center items-center transition-transform ease-in-out duration-300 hover:scale-90">
              <Image src={figmaIcon} alt="figmaIcon" width={50} height={50} />
            </div>
            <h1 className="text-center font-bold text-md">Figma</h1>
          </div>
          <div>
            <div className="bg-[#F0F2F5] rounded-lg p-3 flex justify-center items-center transition-transform ease-in-out duration-300 hover:scale-90">
              <Image src={NextJsIcon} alt="figmaIcon" width={50} height={50} />
            </div>
            <h1 className="text-center font-bold text-md">Next Js</h1>
          </div>
          <div>
            <div className="bg-[#F0F2F5] rounded-lg p-3 flex justify-center items-center transition-transform ease-in-out duration-300 hover:scale-90">
              <Image src={NodeJsIcon} alt="figmaIcon" width={50} height={50} />
            </div>
            <h1 className="text-center font-bold text-md">Node Js</h1>
          </div>
          <div>
            <div className="bg-[#F0F2F5] rounded-lg p-3 flex justify-center items-center transition-transform ease-in-out duration-300 hover:scale-90">
              <Image src={ReactJsIcon} alt="figmaIcon" width={50} height={50} />
            </div>
            <h1 className="text-center font-bold text-md">React Js</h1>
          </div>
          <div>
            <div className="bg-[#F0F2F5] rounded-lg p-3 flex justify-center items-center transition-transform ease-in-out duration-300 hover:scale-90">
              <Image
                src={JavaScriptIcon}
                alt="figmaIcon"
                width={50}
                height={50}
              />
            </div>
            <h1 className="text-center font-bold text-md">JavaScript</h1>
          </div>
          <div>
            <div className="bg-[#F0F2F5] rounded-lg p-3 flex justify-center items-center transition-transform ease-in-out duration-300 hover:scale-90">
              <Image src={MongodbIcon} alt="figmaIcon" width={50} height={50} />
            </div>
            <h1 className="text-center font-bold text-md">Mongo DB</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
