import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import TypingText from "@/components/ui/TypingText";
import Image from "next/image";
import { fadeInUp } from "@/lib/animations/motionVariants";
import { CONTACTS } from "@/constants/list.constanst";

const Home = () => {
  return (
    <motion.div
      className="md:flex md:flex-row-reverse items-center gap-10 min-h-[75vh] dark:text-neutral-200"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      <div className="hidden md:block relative rounded md:w-1/3 overflow-hidden hover:scale-110 duration-300">
        <Image
          src="/assets/images/home/foto_fix.jpg"
          alt="kemalcrisannaufal"
          width={500}
          height={500}
          priority
          className="w-full h-full object-contain"
        />z
        <div className="hidden dark:block top-0 left-0 z-50 absolute bg-gradient-to-b from-transparent via-black/15 to-black/50 w-full h-full" />
      </div>

      <div className="w-full md:w-2/3">
        <h1 className="font-libre font-thin text-lg md:text-xl lg:text-2xl">
          Hello, It&apos;s me
        </h1>
        <h1 className="font-libre md:text-2xl text-3xl lg:text-4xl">
          Kemal Crisannaufal
        </h1>

        <div>
          <TypingText
            words={["Software Engineer", "Data Analyst", "AI Engineer"]}
            boxClassName="bg-gray-200 px-3 py-1 rounded h-7 mt-2 dark:bg-neutral-600"
            textClassName="font-libre font-thin text-sm md:text-sm lg:text-md dark:text-white"
          />
        </div>

        <div className="md:hidden flex justify-center items-center mt-5 overflow-hidden">
          <Image
            src="/assets/images/home/foto_fix.jpg"
            alt="kemalcrisannaufal"
            width={300}
            height={300}
            priority
            className="w-full object-cover"
          />
        </div>

        <p className="my-5 font-libre text-gray-600 lg:text-md dark:text-neutral-300 text-sm text-justify leading-7">
          A passionate Informatics fresh graduate from Telkom University with a
          strong interest in Software Engineering and Data Science. Currently
          focused on building web applications using React and exploring the
          field of Data Science, including Machine Learning
        </p>

        <div>
          <Button onClick={() => window.open(CONTACTS[1].url)}>
            <div className="flex items-center">
              <i className="mr-2 text-lg bx bx-briefcase" />
              <p className="font-libre font-thin text-sm">HIRE ME</p>
            </div>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
