interface Proptypes {
  children: React.ReactNode;
  title?: string;
}

const AboutSectionBlock = (props: Proptypes) => {
  const { children, title } = props;
  return (
    <div className="mb-5">
      <h2 className="font-semibold dark:text-neutral-200 text-lg">{title}</h2>
      {children}
    </div>
  );
};

export default AboutSectionBlock;
