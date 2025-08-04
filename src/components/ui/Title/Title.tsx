import { ReactNode } from "react";

interface Proptypes {
  children: ReactNode;
}

const Title = (props: Proptypes) => {
  const { children } = props;
  return (
    <h1 className="font-semibold dark:text-white text-2xl">{children}</h1>
  );
};

export default Title;
