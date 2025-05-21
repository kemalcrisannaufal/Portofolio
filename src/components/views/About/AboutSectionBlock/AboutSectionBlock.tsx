interface Proptypes {
  children: React.ReactNode;
  title?: string;
}

const AboutSectionBlock = (props: Proptypes) => {
  const { children, title } = props;
  return (
    <div className="mb-5">
      <h1 className="font-libre font-semibold text-md md:text-lg lg:text-xl">
        {title}
      </h1>
      {children}
    </div>
  );
};

export default AboutSectionBlock;
