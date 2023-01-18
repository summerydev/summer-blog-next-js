const BorderRadiusBox = (props) => {
  const width: string = props.width;
  const height: string = props.height;

  return (
    <div
      className={`
      m-2
      px-4 py-4 
      space-y-2
      border border-inherit 
      rounded-md
      bg-stone-200
      dark:text-sky-900
      min-w-fit 
      ${height}
      `}
    >
      <h3 className="dark:text-sky-800">{props.title}</h3>
      <div className="text-black">{props.children}</div>
    </div>
  );
};

export default BorderRadiusBox;
