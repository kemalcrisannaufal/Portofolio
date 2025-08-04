interface Proptypes {
  children: React.ReactNode;
  title?: string;
}

const AboutSectionBlock = (props: Proptypes) => {
  const { children, title } = props;
  return (
    <div className="mb-5">
      <h2 className="font-semibold text-md dark:text-neutral-200 md:text-lg lg:text-xl">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default AboutSectionBlock;
