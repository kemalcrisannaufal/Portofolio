import Button from "@/components/ui/Button";
import { CONTACTS, TECH_STACK } from "@/constants/list.constanst";
import Image from "next/image";
import { motion } from "framer-motion";
import ProjectMarquee from "./ProjectMarquee";

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Home = () => {
  return (
    <>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="flex xl:flex-row flex-col justify-center items-center gap-10 min-h-[60vh]"
      >
        {/* Left Home Side */}
        <motion.div variants={itemVariant} className="w-full xl:w-1/2">
          <div className="flex flex-col items-start gap-5">
            <motion.p variants={itemVariant} className="text-4xl md:text-6xl">
              Hi, I{"'"}m a Full Stack Developer.
            </motion.p>
            <motion.p
              variants={itemVariant}
              className="text-gray-500 text-md dark:text-gray-300 leading-relaxed"
            >
              Fresh graduate in Informatics from Telkom University, deeply
              interested in building modern web applications.
            </motion.p>

            <motion.div
              variants={itemVariant}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => window.open(CONTACTS[1].url)}
                variant="primary"
              >
                <div className="flex items-center">
                  <i className="mr-2 text-lg bx bx-briefcase" />
                  <p>Hire Me</p>
                </div>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Home Side */}
        <motion.div variants={itemVariant} className="w-full xl:w-1/2">
          <div className="flex md:flex-row flex-col-reverse items-center gap-4 w-full">
            <motion.div
              variants={itemVariant}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col justify-between gap-3 dark:bg-[var(--color-secondary-dark)] shadow-lg p-4 rounded-xl w-full md:w-1/2 md:h-[250px]"
            >
              <div>
                <p className="font-bold text-lg">Kemal Crisannaufal</p>
                <p className="text-gray-500 text-md dark:text-gray-300">
                  Bandung, Indonesia
                </p>
              </div>
              <p className="mt-2 text-gray-500 dark:text-gray-300 text-sm italic">
                &quot;I want my GitHub to be as green as my garden in Grow a
                Garden.&quot;
              </p>
              <Button classname="mr-2" variant="secondary">
                <div className="flex items-center">
                  <i className="mr-2 text-lg bx bx-file" />
                  <p>View Resume</p>
                </div>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariant}
              whileHover={{ scale: 1.03 }}
              className="relative w-full md:w-1/2 h-[250px]"
            >
              <Image
                src="/assets/images/home/foto_fix.jpg"
                alt="kemalcrisannaufal"
                fill
                className="shadow-xl rounded-xl object-cover"
              />
              <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-black/10 via-transparent dark:to-[var(--color-primary-dark)] rounded-xl w-full h-full" />
            </motion.div>
          </div>

          <motion.div
            variants={itemVariant}
            className="flex md:flex-row flex-col items-center gap-4 mt-4"
          >
            <div className="rounded-lg w-full md:w-2/3 md:h-[125px] text-white">
              <img
                src="https://github-readme-stats.vercel.app/api/wakatime?username=kemalcrisannaufal&hide_border=true&layout=compact&theme=dark"
                alt="WakaTime Stats"
                className="rounded-lg w-full md:w-[350px] md:h-[125px] object-contain"
              />
            </div>

            <motion.div
              variants={itemVariant}
              className="hidden gap-4 md:grid grid-cols-3 w-1/3 h-[100px]"
            >
              {TECH_STACK.slice(0, 6).map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col justify-center items-center dark:bg-[var(--color-secondary-dark)] shadow p-2 rounded-full"
                >
                  {<tech.icon className={tech.className} />}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <ProjectMarquee />
    </>
  );
};

export default Home;
