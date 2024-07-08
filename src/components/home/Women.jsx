import SubTitle from "../global/SubTitle";
import Collection from "./Collection";

function Women() {
  return (
    <section className="overflow-hidden py-[12px]" id="women">
      <SubTitle content={`Women Collections`} />
      <Collection type="women" content="dress" />
      <Collection type="women" content="purse" />
    </section>
  );
}

export default Women;
