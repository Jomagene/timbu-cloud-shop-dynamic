function Footer() {
  return (
    <footer className="bg-[#E6E8E6]  w-full flex justify-center p-[20px] font-poppins">
      <div className="wrapper flex justify-between">
        <section className="flex flex-col gap-[24px]">
          <h2 className="text-[16px] font-bold">COLLECTIONS</h2>
          <div className="flex flex-col gap-[10px] text-[14px]">
            <span className="font">Shirts</span>
            <span>Sneakers</span>
            <span>Gown</span>
            <span>Herbal teas</span>
            <span>Jewellery</span>
            <span>children wear </span>
            <span>Underwear</span>
            <span>Crop Top</span>
            <span>Accessories</span>
          </div>
        </section>
        <div className="flex flex-col justify-center">
          <section className="flex flex-col gap-[20px] pb-[20px]">
            <h2 className="text-[16px] font-bold ofnt-[poppins]">
              CUSTOM SERVICES
            </h2>
            <div className="flex flex-col gap-[10px] text-[14px]">
              <span>Ordering and payment </span>
              <span>Delivery</span>
              <span>Privacy and policy </span>
              <span>Terms & Conditions</span>
            </div>
          </section>
          <section className="flex flex-col gap-[24px]">
            <h2 className="text-[16px] font-bold">CONTACTS</h2>
            <div className="flex flex-col gap-[10px] text-[14px]">
              <span>10 Goma/DRC</span>
              <a href="mailto:semjomagene@gmail.com">MyEmail</a>
              <a href="tel:243821358144">Tel:+243821358144</a>
              <a href="https://github/@Jomagene">Jomagene</a>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
