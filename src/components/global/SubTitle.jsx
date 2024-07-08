function SubTitle({ content, style }) {
  return (
    <div>
      <h3 className={`text-[20px] lg:text-[32px] ${style}`}>{content}</h3>
    </div>
  );
}

export default SubTitle;
