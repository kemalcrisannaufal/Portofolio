type Proptypes = {
  title?: string;
  children: React.ReactNode;
};

const SectionBlock = (props: Proptypes) => {
  const { title, children } = props;
  return (
    <div className="mb-5">
      <h1 className="font-libre font-semibold text-md md:text-lg lg:text-xl">
        {title}
      </h1>
      {children}
    </div>
  );
};

export default SectionBlock;
