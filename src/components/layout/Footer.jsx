function Footer() {
  return (
    <footer className="bg-[#E6E8E6]  w-full flex justify-center">
      <div className="wrapper flex justify-between">
        <section className="flex flex-col">
          <h2>COLLECTIONS</h2>
          <div className="flex flex-col">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
          </div>
        </section>
        <section className="flex flex-col">
          <h2>CUSTOM SERVICES</h2>
          <div className="flex flex-col">
            <span>Men</span>
            <span>Women</span>
            <span>Kids</span>
          </div>
        </section>
        <section className="flex flex-col">
          <h2>CONTACTS</h2>
          <div className="flex flex-col">
            <span>Men</span>
            <span>Women</span>
            <span>Kids</span>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
