import Image from "next/image";
import AboutSectionBlock from "./AboutSectionBlock/AboutSectionBlock";
import AboutSubsectionBlock from "./AboutSubsectionBlock/AboutSubsectionBlock";
import Modal from "@/components/ui/Modal";
import useAbout from "./useAbout";
import { TECH_STACK } from "@/constants/list.constanst";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import { CERTIFICATION, EXPERIENCE } from "./About.constants";
import Link from "next/link";
import cn from "@/utils/cn";

const About = () => {
  const titleStyle = "mr-2 font-semibold dark:text-white";
  const subtitleStyle =
    "text-neutral-800 dark:text-neutral-300 text-sm md:text-base";
  const descriptionStyle = "text-sm md:text-base dark:text-neutral-300";

  const { credentialUrl, handleOpenDetail } = useAbout();

  return (
    <>
      <div className="flex xl:flex-row flex-col lg:gap-10">
        <div className="xl:top-32 relative xl:sticky flex justify-center self-start rounded-xl w-full xl:w-1/3 overflow-hidden">
          <div className="relative shadow-lg rounded-xl w-[300px] lg:w-[350px] xl:w-full overflow-hidden">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: "100%" }}
              transition={{
                duration: 1.2,
                ease: [0.77, 0, 0.175, 1],
              }}
              className="top-0 left-0 z-10 absolute bg-white dark:bg-[var(--color-secondary-dark)] w-full h-full"
            />

            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: "easeOut",
              }}
            >
              <Image
                src="/assets/images/home/foto_toga.jpg"
                width={500}
                height={500}
                alt="kemalcrisannaufal"
                className="w-full h-full object-contain"
              />
            </motion.div>

            <div className="bottom-0 left-0 absolute bg-gradient-to-b from-transparent to-black px-3 py-4 w-full">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="font-semibold text-white text-xl"
              >
                Kemal Crisannaufal
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="text-neutral-300 text-sm"
              >
                March, 18 2003
              </motion.p>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-5 lg:mt-0 w-full xl:w-1/3"
        >
          {/* About Me */}
          <AboutSectionBlock title="About Me">
            <p className={"dark:text-neutral-300 text-sm md:text-base"}>
              Informatics graduate from Telkom University with a passion for
              Software Engineering and Data Science. Currently focusing on React
              and Machine Learning.
            </p>
          </AboutSectionBlock>

          {/* Education */}
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
                  <span className="dark:text-neutral-300 text-sm">
                    (Cumlaude)
                  </span>
                </p>
              </div>
            </AboutSubsectionBlock>
          </AboutSectionBlock>

          {/* Achievment */}
          <AboutSectionBlock title="Achievement">
            <AboutSubsectionBlock image="/assets/images/about/telyu_logo.png">
              <div>
                <p className={titleStyle}>Competitive Programming Finalist</p>
                <p className={descriptionStyle}>
                  Finalist and 5th place out of 100+ in algorithm and
                  university-level programming competition
                </p>
              </div>
            </AboutSubsectionBlock>
          </AboutSectionBlock>

          {/* Certifications */}
          <AboutSectionBlock title="Certifications">
            {CERTIFICATION.map((item) => (
              <AboutSubsectionBlock key={item.name}>
                <div className="flex items-center gap-3 w-full">
                  <div className="max-w-1/3 overflow-hidden">
                    <div className="flex justify-center items-center dark:bg-white rounded-full w-20 md:w-24 h-20 md:h-24 overflow-hidden">
                      <FaAward className="w-1/2 h-1/2 text-teal-600" />
                    </div>
                  </div>

                  <div className="w-2/3">
                    <p className={`${titleStyle} mb-1`}>{item.publisher}</p>
                    <p className={`${subtitleStyle} text-justify`}>
                      {item.name}
                    </p>
                    <p className={descriptionStyle}>{item.date}</p>
                    {item.credentialUrl !== "" && (
                      <button
                        className="font-semibold text-black dark:text-neutral-300 text-sm underline cursor-pointer"
                        onClick={() => handleOpenDetail(item.credentialUrl)}
                      >
                        View Certificate
                      </button>
                    )}
                  </div>
                </div>
              </AboutSubsectionBlock>
            ))}
          </AboutSectionBlock>
        </motion.div>

        {/* Column 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="w-full xl:w-1/3"
        >
          {/* Publications */}
          <AboutSectionBlock title="Publications">
            <AboutSubsectionBlock image="/assets/images/about/scopus.png">
              <div>
                <p
                  className={cn(
                    "mr-2 font-semibold md:text-md dark:text-white"
                  )}
                >
                  Optimizing Support Vector Machine for Avocado Ripeness
                  Classification Using Moth Flame Optimization
                </p>

                <p className={subtitleStyle}>Scopus and Sinta 2</p>
                <Link
                  href="https://doi.org/10.35882/jeeemi.v7i2.652"
                  className="font-semibold text-black dark:text-neutral-300 text-sm underline"
                >
                  View Journal
                </Link>
              </div>
            </AboutSubsectionBlock>
          </AboutSectionBlock>

          {/* Experience */}
          <AboutSectionBlock title="Experience">
            {EXPERIENCE.map((item, index) => (
              <AboutSubsectionBlock
                key={`${item.company}-${index}`}
                image={item.image}
              >
                <div>
                  <Link href="https://doi.org/10.35882/jeeemi.v7i2.652">
                    <p className={titleStyle}>{item.position}</p>
                  </Link>
                  <p className={subtitleStyle}>{item.company}</p>
                  {item.details.map((detail, index) => (
                    <div
                      key={`detail-${item.position}-${index}`}
                      className="flex items-center mt-1"
                    >
                      <i className="bx-chevron-right mr-2 text-sm bx" />
                      <p className={descriptionStyle}>{detail}</p>
                    </div>
                  ))}

                  {item.credentialUrl !== "" && (
                    <button
                      className="mt-2 cursor-pointer"
                      onClick={() => handleOpenDetail(item.credentialUrl)}
                    >
                      <p className="font-semibold dark:text-neutral-300 text-xs underline">
                        View Certificate
                      </p>
                    </button>
                  )}
                </div>
              </AboutSubsectionBlock>
            ))}
          </AboutSectionBlock>

          {/* Tech Stack */}
          <AboutSectionBlock title="Tech Stack">
            <div className="grid grid-cols-6 md:grid-cols-10 xl:grid-cols-6">
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
                    className="group relative dark:bg-neutral-600/25 mt-2 p-2 border border-gray-200 dark:border-neutral-600 rounded-full w-max cursor-pointer"
                  >
                    <div className="hidden group-hover:block -top-5 z-50 absolute bg-gray-200 dark:bg-[var(--color-secondary-dark)] p-2 rounded duration-300">
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

      {/* Certificate Modal */}
      <Modal isOpen={credentialUrl !== ""} onClose={() => handleOpenDetail("")}>
        <div>
          <h1 className="font-semibold dark:text-white text-2xl">
            Certificate
          </h1>
          <div className="flex justify-center mt-5 rounded w-full">
            {credentialUrl === "loading" ? (
              <div className="bg-gray-200 dark:bg-neutral-600 w-full h-40 md:h-96 animate-pulse" />
            ) : (
              <Image
                src={credentialUrl}
                width={500}
                height={500}
                alt={"certificate"}
                priority
                className="w-full h-full object-contain"
              />
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default About;
