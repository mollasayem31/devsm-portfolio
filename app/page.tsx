import ProfileCardCom from "@/components/Main/ProfileCardCom";
import ContactCardCom from "../components/Home/ContactCardCom";

export default function Home() {
  return (
    <main className="">
      <div>
        <div>
          <ProfileCardCom />
          <ContactCardCom />
        </div>
      </div>
    </main>
  );
}
