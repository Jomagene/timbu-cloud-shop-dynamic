import SubTitle from "../global/SubTitle";
import Collection from "./Collection";

function Kids() {
  return (
    <section className="overflow-hidden py-[12px]" id="kids">
      <SubTitle content={`Children Collections (All)`} />
      <Collection type="children" content="all" />
    </section>
  );
}

export default Kids;
