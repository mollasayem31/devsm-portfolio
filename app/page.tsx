import ProfileCardCom from "@/components/Main/ProfileCardCom";
import ContactCardCom from "../components/Home/ContactCardCom";
import ExpertAreaCom from "../components/Home/ExpertAreaCom";
import RecentProjectCom from "@/components/Home/RecentProjectCom";
import ServicesCom from "@/components/Home/ServicesCom";

export default function Home() {
  return (
    <main className="w-full">
      <div className="grid grid-cols-3 gap-5">
        <div className="">
          <ProfileCardCom />
        </div>
        <div className="grid grid-cols-1 gap-5 ">
          <ExpertAreaCom />
          <ExpertAreaCom />
        </div>
        <div className="">
          <RecentProjectCom />
        </div>
        <div className="col-span-2">
          <ServicesCom />
        </div>
        <div className="">
          <ContactCardCom />
        </div>
      </div>
    </main>
  );
}
