import { CornerDownRight } from "lucide-react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
export default function ContactCardCom() {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="bg-[#F0F2F5] py-3 m-2 rounded-lg pointer">
          <Marquee speed={150} pauseOnHover={true}>
            <h1 className="text-2xl">
              Available For Hire 🚀 Crafting Digital Experiences 🎨
            </h1>
          </Marquee>
        </div>
        <div className="my-5">
          <h2 className="card-title text-4xl font-bold py-2">Let&apos;s👋</h2>
          <h2 className="card-title text-4xl font-bold py-1">Work Together</h2>
        </div>
        <Link
          href="/contact"
          className=" text-lg text-[#28A745] underline decoration-[#28A745] flex gap-1"
        >
          Let&apos;s Talk
          <span className="-rotate-45">
            <CornerDownRight />
          </span>
        </Link>
      </div>
    </div>
  );
}
