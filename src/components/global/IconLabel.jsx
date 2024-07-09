function IconLabel({ icon, label }) {
  return (
    <button className="flex cursor-default gap:1 lg:gap-5 justify-between items-center px-6 text-white">
      {icon && <img src={icon} className="w-[20px] lg:w-[30px]" />}
      <span className="text-[10px] lg:text-[16px] ">{label}</span>
    </button>
  );
}

export default IconLabel;
