import Image from "next/image";
import ProfilePic from "@/public/profilePic.jpeg";
import { FileDown, Copy } from "lucide-react";

export default function ProfileCardCom() {
  return (
    <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl">
      <figure>
        <Image src={ProfilePic} alt="Shoes" width={200} height={150} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">Sayem Molla 👋</h2>
        <p className="text-lg">
          A Passionate MERN Stack Developer 🖥️& Passionate about crafting
          seamless digital experiences. 💻
        </p>
        <div className="flex justify-evenly">
          <button className="btn btn-primary">
            <span>
              <FileDown />
            </span>
            Get Resume
          </button>
          <button className="btn btn-outline">
            <span>
              <Copy />
            </span>
            Copy Email
          </button>
        </div>
      </div>
    </div>
  );
}
