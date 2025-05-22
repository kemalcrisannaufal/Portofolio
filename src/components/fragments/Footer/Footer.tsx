const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-center items-center dark:bg-neutral-900 w-full">
      <div className="flex flex-col items-center p-5 border-gray-200 dark:border-neutral-500 border-t w-full md:w-1/2">
        <p className="font-libre text-gray-600 dark:text-neutral-200 text-xs sm:text-sm">
          Copyright &copy; {year} All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
