function Button({ content, styles }) {
  return (
    <button className={`rounded-[5px] p-2 sm:p-3 ${styles}`}>{content}</button>
  );
}

export default Button;
