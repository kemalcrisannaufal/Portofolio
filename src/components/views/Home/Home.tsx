import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import TypingText from "@/components/ui/TypingText";
import Image from "next/image";
import { fadeInUp } from "@/lib/animations/motionVariants";
import { CONTACTS } from "@/constants/list.constanst";
import Link from "next/link";

const Home = () => {
  return (
    <motion.div
      className="flex xl:flex-row-reverse flex-col items-center gap-10 min-h-[75vh] dark:text-neutral-200"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      {/* FOTO & CARD */}
      <motion.div
        className="group hidden xl:block bg-neutral-50 dark:bg-neutral-900 p-3 xl:p-5 rounded-md xl:w-1/3 max-h-[40vh] xl:max-h-[60vh] animate-glow"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative">
          <Image
            src="/assets/images/home/foto_fix.jpg"
            alt="kemalcrisannaufal"
            width={500}
            height={500}
            className="rounded-md w-full max-h-[320px] object-cover group-hover:scale-[102%] group-hover:transition-all group-hover:duration-300"
          />
          <div className="hidden dark:block top-0 left-0 z-50 absolute bg-gradient-to-b from-transparent via-black/15 to-black/50 w-full h-full" />
        </div>

        <div className="mt-5 text-neutral-800 dark:text-neutral-300">
          <h3 className="font-libre font-semibold text-md xl:text-lg tracking-wide">
            Kemal Crisannaufal{" "}
            <span className="hidden xl:inline-block animate-wiggle">⭐</span>{" "}
          </h3>

          <p className="hidden xl:block mt-1 font-libre font-thin text-gray-600 dark:text-neutral-400 text-sm">
            Let&apos;s build something together.
          </p>
        </div>
      </motion.div>

      {/* CONTENT */}
      <motion.div
        className="w-full xl:w-2/3"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="font-libre font-thin text-lg md:text-xl xl:text-2xl">
          Hello, It&apos;s me
        </h1>
        <h1 className="font-libre md:text-2xl text-3xl xl:text-4xl">
          Kemal Crisannaufal
        </h1>

        <div>
          <TypingText
            words={["Software Engineer", "Data Analyst", "AI Engineer"]}
            boxClassName="bg-gray-200 px-3 py-1 rounded h-7 mt-2 dark:bg-neutral-600"
            textClassName="font-libre font-thin text-sm md:text-sm xl:text-md dark:text-white"
          />
        </div>

        <div className="xl:hidden flex justify-center items-center mt-8">
          <Image
            src="/assets/images/home/foto_fix.jpg"
            alt="kemalcrisannaufal"
            width={300}
            height={300}
            priority
            className="w-full md:max-h-[50dvh] object-center object-cover animate-glow"
          />
        </div>

        <p className="my-5 font-libre text-gray-600 xl:text-md dark:text-neutral-300 text-sm text-justify leading-7">
          A passionate Informatics fresh graduate from Telkom University with a
          strong interest in Software Engineering and Data Science. Currently
          focused on building web applications using React and exploring the
          field of Data Science, including Machine Learning
        </p>

        <div className="flex">
          <Link
            href={"/assets/files/resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button classname="mr-2" variant="secondary">
              <div className="flex items-center">
                <i className="mr-2 text-lg bx bx-file" />
                <p className="font-libre font-thin text-sm">View Resume</p>
              </div>
            </Button>
          </Link>

          <Button onClick={() => window.open(CONTACTS[1].url)}>
            <div className="flex items-center">
              <i className="mr-2 text-lg bx bx-briefcase" />
              <p className="font-libre font-thin text-sm">Hire Me</p>
            </div>
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
