function SubTitle({ content, style }) {
  return (
    <div>
      <h3
        className={`text-[16px] md:text-[20px] lg:text-[32px] text-center sm:text-left ${style} font-medium`}>
        {content}
      </h3>
    </div>
  );
}

export default SubTitle;
