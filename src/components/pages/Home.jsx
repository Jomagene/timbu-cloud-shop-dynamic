import Banner from "../home/Banner";
import Men from "../home/Men";
import Women from "../home/Women";
import Testimonials from "../home/Testimonials";
import Kids from "../home/Kids";
import Ancors from "../home/Ancors";
import IconLabel from "../global/IconLabel";
import { delivery, handshaking } from "../../assets/icons-images";
import ReturnToTop from "../global/ReturnToTop";

function Home() {
  const icon_label = [
    { id: 0, icon: "", label: "450+ KIND OF LOOSEF TEA" },
    { id: 1, icon: delivery, label: "WORLDWIDE DELIVERY " },
    { id: 2, icon: handshaking, label: "PARTNERSHIP" },
  ];
  return (
    <main className="wrapper pt-[25px]">
      <Banner />
      <div className="h-[25px] md:h-[35px] lg:h-[110px] bg-[#151515] flex justify-between items-center mt-0 md:mt-[10px] lg:mt-[30px] sm:px-[10px] p-[0]">
        {icon_label.map((e) => (
          <IconLabel key={e.id} icon={e.icon} label={e.label} />
        ))}
      </div>
      <Ancors />
      <Men />
      <Women />
      <Kids />
      <Testimonials />
      <ReturnToTop />
    </main>
  );
}

export default Home;
