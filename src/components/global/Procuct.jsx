function Procuct({ picture, title, price, like }) {
  return (
    <div className="flex flex-col">
      <div>
        <img src={picture} alt="" />
        {like && <img src="" />}
      </div>
      <span>{title}</span>
      <span>{price}</span>
    </div>
  );
}

export default Procuct;
