import Image from "next/image";
import AboutSectionBlock from "./AboutSectionBlock/AboutSectionBlock";
import AboutSubsectionBlock from "./AboutSubsectionBlock/AboutSubsectionBlock";
import Modal from "@/components/ui/Modal";
import useAbout from "./useAbout";
import { TECH_STACK } from "@/constants/list.constanst";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/motionVariants";

const About = () => {
  const titleStyle =
    "mr-2 text-sm lg:text-md font-libre font-semibold dark:text-neutral-200";
  const subtitleStyle =
    "text-gray-600 text-xs font-libre dark:text-neutral-300";
  const descriptionStyle =
    "text-xs lg:text-xs font-libre dark:text-neutral-300";

  const { isDetailOpen, handleOpenDetail } = useAbout();

  return (
    <>
      <div className="flex lg:flex-row flex-col lg:gap-10">
        <div className="lg:top-36 relative lg:sticky self-start w-full lg:w-1/3">
          <Image
            src="/assets/images/home/foto.jpg"
            width={500}
            height={500}
            alt="kemalcrisannaufal"
            className="rounded-xl w-full object-contain"
          />
          <div className="hidden dark:block top-0 left-0 z-10 absolute bg-gradient-to-b from-black/5 via-black/15 to-black/45 rounded-xl w-full h-full" />
        </div>

        <motion.div
          className="mt-5 lg:mt-0 w-full lg:w-1/3"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <AboutSectionBlock title="About Me">
            <p className={subtitleStyle}>
              Informatics graduate from Telkom University with a passion for
              Software Engineering and Data Science. Currently focusing on React
              and Machine Learning.
            </p>
          </AboutSectionBlock>

          <AboutSectionBlock title="Education">
            <AboutSubsectionBlock image="/assets/images/about/telyu_logo.png">
              <div>
                <div className="flex items-center">
                  <p className={titleStyle}>Telkom University</p>
                  <i className="text-2xl bx bxs-graduation" />
                </div>
                <p className={subtitleStyle}>Bachelor of Informatics</p>
                <p className={subtitleStyle}>2021 - 2025</p>
                <p className={subtitleStyle}>
                  CGPA : 3.98{" "}
                  <span className="font-libre dark:text-neutral-300 text-sm">
                    (Cumlaude)
                  </span>
                </p>
              </div>
            </AboutSubsectionBlock>
          </AboutSectionBlock>

          <AboutSectionBlock title="Achievement">
            <AboutSubsectionBlock image="/assets/images/about/telyu_logo.png">
              <div>
                <p className={titleStyle}>Competitive Programming Finalist</p>
                <p className={subtitleStyle}>
                  Finalist and 5th place out of 100+ in algorithm and
                  university-level programming competition
                </p>
              </div>
            </AboutSubsectionBlock>
          </AboutSectionBlock>

          <AboutSectionBlock title="Publications">
            <AboutSubsectionBlock image="/assets/images/about/scopus.png">
              <div>
                <p className={titleStyle}>
                  Optimizing Support Vector Machine for Avocado Ripeness
                  Classification Using Moth Flame Optimization
                </p>

                <p className={subtitleStyle}>Scopus and Sinta 2</p>
                <a
                  href="https://doi.org/10.35882/jeeemi.v7i2.652"
                  className="font-libre font-semibold text-black dark:text-neutral-300 text-xs underline"
                >
                  View Journal
                </a>
              </div>
            </AboutSubsectionBlock>
          </AboutSectionBlock>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/3"
          variants={fadeInUp}
          initial="hidden"
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.5 },
          }}
        >
          <AboutSectionBlock title="Experience">
            <AboutSubsectionBlock image="/assets/images/about/if_lab.jpeg">
              <div>
                <a href="https://doi.org/10.35882/jeeemi.v7i2.652">
                  <p className={titleStyle}>Practicum Assistant</p>
                </a>
                <p className={subtitleStyle}>
                  Informatics Laboratory Telkom University
                </p>
                <div className="flex items-center mt-1">
                  <i className="bx-chevron-right mr-2 text-sm bx" />
                  <p className={descriptionStyle}>
                    Assisted in teaching and guiding students in the Data
                    Structure course
                  </p>
                </div>
                <div className="flex items-center mt-1">
                  <i className="bx-chevron-right mr-2 text-sm bx" />
                  <p className={descriptionStyle}>
                    Conducted evaluations of students&apos; laboratory work.
                  </p>
                </div>
                <button
                  className="mt-2 cursor-pointer"
                  onClick={() => handleOpenDetail("asprak")}
                >
                  <p className="font-libre font-semibold dark:text-neutral-300 text-xs underline">
                    View Certificate
                  </p>
                </button>
              </div>
            </AboutSubsectionBlock>

            <AboutSubsectionBlock image="/assets/images/about/telyu_logo.png">
              <div>
                <a href="https://doi.org/10.35882/jeeemi.v7i2.652">
                  <p className={titleStyle}>Research Assistant</p>
                </a>
                <p className={subtitleStyle}>Telkom University</p>
                <div className="flex items-center mt-1">
                  <i className="bx-chevron-right mr-2 text-sm bx" />
                  <p className={descriptionStyle}>
                    Collected and processed data for research purposes
                  </p>
                </div>
                <div className="flex items-center mt-1">
                  <i className="bx-chevron-right mr-2 text-sm bx" />
                  <p className={descriptionStyle}>
                    Prepared and cleaned data related to Aksara Sunda for model
                    training
                  </p>
                </div>
              </div>
            </AboutSubsectionBlock>
          </AboutSectionBlock>

          <AboutSectionBlock title="Tech Stack">
            <div className="flex flex-wrap gap-x-5">
              {TECH_STACK.map((stack, index) => {
                return (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: index * 0.3,
                      },
                    }}
                    key={index}
                    className="group relative dark:bg-neutral-600/25 mt-2 p-2 border border-gray-200 dark:border-neutral-600 rounded-full cursor-pointer"
                  >
                    <div className="hidden group-hover:block -top-5 z-50 absolute bg-gray-200 p-2 rounded duration-300">
                      <p className="font-mono text-xs">{stack.name}</p>
                    </div>
                    <stack.icon className={stack.className} />
                  </motion.div>
                );
              })}
            </div>
          </AboutSectionBlock>
        </motion.div>
      </div>

      {(isDetailOpen === "asprak" || isDetailOpen === "loading") && (
        <Modal onClose={() => handleOpenDetail("")}>
          <div>
            <h1 className="font-libre font-semibold dark:text-white text-2xl">
              Certificate
            </h1>
            <div className="flex justify-center mt-5 rounded w-full">
              {isDetailOpen === "loading" ? (
                <div className="bg-gray-200 dark:bg-neutral-600 w-full h-40 md:h-96 animate-pulse" />
              ) : (
                <Image
                  src={"/assets/images/about/sertifikat_asprak.png"}
                  width={500}
                  height={500}
                  alt="asprak"
                  priority
                  className="w-full h-full object-contain"
                />
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default About;
