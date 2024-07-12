function IconLabel({ icon, label }) {
  return (
    <button className="flex cursor-default gap-[4px] md:gap-[10px] lg:gap-5 items-center px-[10px] text-white">
      {icon && <img src={icon} className="w-[20px] lg:w-[30px]" />}
      <span className="text-[10px] lg:text-[16px] ">{label}</span>
    </button>
  );
}

export default IconLabel;
