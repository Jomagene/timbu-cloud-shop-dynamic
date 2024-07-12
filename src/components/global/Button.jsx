function Button({ content, styles }) {
  return (
    <button className={`rounded-[5px] p-[10px] ${styles}`}>{content}</button>
  );
}

export default Button;
