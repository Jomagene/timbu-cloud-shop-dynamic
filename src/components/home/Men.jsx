import SubTitle from "../global/SubTitle";
import Collection from "./Collection";

function Men() {
  return (
    <section className="overflow-hidden py-[12px]" id="men">
      <SubTitle content={`Mes Collections`} />
      <Collection type="men" content="pants" />
      <Collection type="men" content="shoes" />
    </section>
  );
}

export default Men;
