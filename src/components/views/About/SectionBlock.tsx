type Proptypes = {
  title?: string;
  children: React.ReactNode;
};

const SectionBlock = (props: Proptypes) => {
  const { title, children } = props;
  return (
    <div className="mb-5">
      <h1 className="font-mono font-semibold text-2xl">{title}</h1>
      {children}
    </div>
  );
};

export default SectionBlock;
