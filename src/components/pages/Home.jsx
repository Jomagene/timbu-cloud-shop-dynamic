import { Children } from "react";
import Banner from "../home/Banner";
import Men from "../home/Men";
import Women from "../home/Women";
import Testimonials from "../home/Testimonials";
import Kids from "../home/Kids";

function Home() {
  return (
    <main className="">
      <Banner />
      <Men />
      <Women />
      <Kids />
      <Testimonials />
    </main>
  );
}

export default Home;
