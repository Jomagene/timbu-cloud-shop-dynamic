import Banner from "../home/Banner";
import Men from "../home/Men";
import Women from "../home/Women";
import Testimonials from "../home/Testimonials";
import Kids from "../home/Kids";
import "../../styles/content/home.css";
import Ancors from "../home/Ancors";

function Home() {
  return (
    <main className="wrapper">
      <Ancors />
      <Banner />
      <Men />
      <Women />
      <Kids />
      <Testimonials />
    </main>
  );
}

export default Home;
