import type { NextComponentType, NextPageContext } from "next";
import Link from "next/link";
import Image from "next/image";
import FullStackWebDevelopmentPic from "@/public/FullStackWebDevelopment.png";
import WebApplicationDevelopmentPic from "@/public/WebApplicationDevelopment.png";
import MaintenanceAndSupportPic from "@/public/MaintenanceAndSupport.png";
import ConsultationPic from "@/public/Consultation.png";
import { ArrowRight, CornerDownRight } from "lucide-react";
interface Props {}

const ServicesCom: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <div className="card bg-base-100 shadow-xl h-full">
      <div className="card-body">
        <div className="flex justify-between items-center -mt-3">
          <h1 className="text-2xl font-bold">Services I Offered</h1>
          <Link
            href="/services"
            className="text-base flex justify-end items-center gap-1 text-blue-500  underline underline-offset-8 decoration-gray-500 hover:text-[#28a746] hover:decoration-[#28a746] transition-colors ease-in-out duration-500"
          >
            <span>See All Services </span>
            <span className="text-md">
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-5 mt-1">
          {/* //CARD 1 */}
          <div className="bg-[#F0F2F5] rounded-lg p-5 hover:bg-[#28a746] transition-all ease-in-out duration-500 scale-100 hover:scale-110 text-[#646569] hover:text-white">
            <div className="bg-white p-8 flex justify-center items-center rounded-lg">
              <div className="w-[50px] ">
                <Image
                  className="rounded-lg"
                  src={FullStackWebDevelopmentPic}
                  alt="Picture"
                  width={0}
                  height={0}
                  layout="responsive"
                  sizes="100vw"
                />
              </div>
            </div>
            <h1 className="text-center mt-1 font-bold ">
              Full-Stack Web Development
            </h1>
          </div>
          {/* //CARD 2 */}
          <div className="bg-[#F0F2F5] rounded-lg p-5 hover:bg-[#28a746] transition-all ease-in-out duration-500 scale-100 hover:scale-110 text-[#646569] hover:text-white">
            <div className="bg-white p-8 flex justify-center items-center rounded-lg">
              <div className="w-[50px] ">
                <Image
                  className="rounded-lg"
                  src={WebApplicationDevelopmentPic}
                  alt="Picture"
                  width={0}
                  height={0}
                  layout="responsive"
                  sizes="100vw"
                />
              </div>
            </div>
            <h1 className="text-center mt-1 font-bold ">
              Web Application Development
            </h1>
          </div>
          {/* //CARD 3 */}
          <div className="bg-[#F0F2F5] rounded-lg p-5 hover:bg-[#28a746] transition-all ease-in-out duration-500 scale-100 hover:scale-110 text-[#646569] hover:text-white">
            <div className="bg-white p-8 flex justify-center items-center rounded-lg">
              <div className="w-[50px] ">
                <Image
                  className="rounded-lg"
                  src={MaintenanceAndSupportPic}
                  alt="Picture"
                  width={0}
                  height={0}
                  layout="responsive"
                  sizes="100vw"
                />
              </div>
            </div>
            <h1 className="text-center mt-1 font-bold ">
              Maintenance and Support
            </h1>
          </div>
          {/* //CARD 4 */}
          <div className="bg-[#F0F2F5] rounded-lg p-5 hover:bg-[#28a746] transition-all ease-in-out duration-500 scale-100 hover:scale-110 text-[#646569] hover:text-white">
            <div className="bg-white p-8 flex justify-center items-center rounded-lg">
              <div className="w-[50px]">
                <Image
                  className="rounded-lg"
                  src={ConsultationPic}
                  alt="Picture"
                  width={0}
                  height={0}
                  layout="responsive"
                  sizes="100vw"
                />
              </div>
            </div>
            <h1 className="text-center mt-1 font-bold ">
              Consultation & Training
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCom;
