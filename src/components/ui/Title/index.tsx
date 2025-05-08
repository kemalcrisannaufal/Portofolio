type Proptypes = {
  children: React.ReactNode;
};

const Title = (props: Proptypes) => {
  const { children } = props;
  return <h1 className="font-semibold text-2xl">{children}</h1>;
};

export default Title;
