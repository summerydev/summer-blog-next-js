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
      ${width} ${height}
      `}
    >
      {props.children}
    </div>
  );
};

export default BorderRadiusBox;
