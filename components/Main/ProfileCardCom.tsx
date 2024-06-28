"use client";

import Image from "next/image";
import ProfilePic from "@/public/profilePic.jpeg";
import Link from "next/link";
import { FileDown, Copy } from "lucide-react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaFacebook } from "react-icons/fa6";
import { Toaster, toast } from "sonner";

export default function ProfileCardCom() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("developersayem012@gmail.com").then(
      () => {
        toast.success("Email address copied to clipboard!");
      },
      (err) => {
        toast.error("Could not copy text: ", err);
      }
    );
  };

  // const downloadPdf = () => {
  //   const resumeLink = "/SAYEM MOLLA RESUME.pdf";
  //   const link = document.createElement("a");
  //   link.href = resumeLink;
  //   link.download = "SayemMolla-resume.pdf"; // The name of the file to be downloaded
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <Toaster richColors />
      <div className="">
        <figure>
          <Image
            src={ProfilePic}
            alt="Profile Picture"
            width={0}
            height={0}
            layout="responsive"
            sizes="100vw"
            className="rounded-t-lg"
          />
        </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">Sayem Molla 👋</h2>
        <p className="text-lg text-[#576076]">
          A Passionate{" "}
          <span className="text-black font-bold">MERN Stack Developer</span> 🖥️&
          Passionate about crafting seamless digital experiences.
        </p>
        <div className="w-full grid grid-cols-2 gap-2">
          {/* NEED TO UPDATE RESUME LINK */}
          <button
            // onClick={downloadPdf}
            className="btn bg-[#28A745] text-white hover:bg-transparent hover:text-[#28A745] font-bold transition-colors ease-in-out duration-500"
          >
            <span>
              <FileDown />
            </span>
            Get Resume
          </button>
          <button
            onClick={copyToClipboard}
            className="btn btn-outline hover:bg-[#f2f2f2] hover:text-black transition-colors ease-in-out duration-500 "
          >
            <span>
              <Copy />
            </span>
            Copy Email
          </button>
        </div>
        <div className="flex justify-start items-center py-5 gap-3">
          <Link
            href="https://www.linkedin.com/in/sayem-molla/"
            rel="noopener noreferrer"
            target="_blank"
            className="flex justify-center items-center w-10 h-10 text-2xl border rounded-lg pointer hover:bg-[#f2f2f2] hover:text-[#28A745] transition-colors ease-in-out duration-500"
          >
            <span>
              <FaLinkedin />
            </span>
          </Link>
          <Link
            href="https://github.com/developersayem"
            rel="noopener noreferrer"
            target="_blank"
            className="flex justify-center items-center w-10 h-10 text-2xl border rounded-lg pointer hover:bg-[#f2f2f2] hover:text-[#28A745] transition-colors ease-in-out duration-500"
          >
            <span>
              <FaGithub />
            </span>
          </Link>
          <Link
            href="https://wa.me/01704878051"
            rel="noopener noreferrer"
            target="_blank"
            className="flex justify-center items-center w-10 h-10 text-2xl border rounded-lg pointer hover:bg-[#f2f2f2] hover:text-[#28A745] transition-colors ease-in-out duration-500"
          >
            <span>
              <FaWhatsapp />
            </span>
          </Link>
          <Link
            href="https://www.facebook.com/sayemmolla.dev"
            rel="noopener noreferrer"
            target="_blank"
            className="flex justify-center items-center w-10 h-10 text-2xl border rounded-lg pointer hover:bg-[#f2f2f2] hover:text-[#28A745] transition-colors ease-in-out duration-500"
          >
            <span>
              <FaFacebook />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
