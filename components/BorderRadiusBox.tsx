const BorderRadiusBox = (props) => {
  const width: string = props.width;
  const height: string = props.height;

  return (
    <div
      className={`
      px-4 py-4 
      space-y-2
      border border-inherit 
      rounded-md
      bg-stone-200
      dark:text-sky-900
      ${width} ${height}
      `}
    >
      <h3>{props.title}</h3>
      <div className="text-black">{props.children}</div>
    </div>
  );
};

export default BorderRadiusBox;
