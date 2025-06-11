/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import AboutSectionBlock from "./AboutSectionBlock/AboutSectionBlock";
import AboutSubsectionBlock from "./AboutSubsectionBlock/AboutSubsectionBlock";
import Modal from "@/components/ui/Modal";
import useAbout from "./useAbout";
import { TECH_STACK } from "@/constants/list.constanst";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/motionVariants";
import { FaAward } from "react-icons/fa";
import { CERTIFICATION, EXPERIENCE } from "./About.constants";
import Link from "next/link";

const About = () => {
  const titleStyle =
    "mr-2 text-sm lg:text-md font-libre font-semibold dark:text-neutral-200";
  const subtitleStyle =
    "text-gray-600 text-xs font-libre dark:text-neutral-300";
  const descriptionStyle =
    "text-xs lg:text-xs font-libre dark:text-neutral-300";

  const { credentialUrl, handleOpenDetail } = useAbout();

  return (
    <>
      <div className="flex xl:flex-row flex-col lg:gap-10">
        <div className="xl:top-36 relative xl:sticky self-start rounded-xl w-full xl:w-1/3 overflow-hidden">
          <Image
            src="/assets/images/home/foto_toga.jpg"
            width={500}
            height={500}
            alt="kemalcrisannaufal"
            className="shadow rounded-xl w-full max-h-[75vh] object-contain"
          />
          <div className="hidden dark:block top-0 left-0 z-10 absolute bg-gradient-to-b from-black/5 via-black/15 to-black/45 rounded-xl w-full h-full" />
        </div>

        <motion.div
          className="mt-5 lg:mt-0 w-full xl:w-1/3"
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
                        className="font-libre font-semibold text-black dark:text-neutral-300 text-xs underline cursor-pointer"
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

        <motion.div
          className="w-full xl:w-1/3"
          variants={fadeInUp}
          initial="hidden"
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.5 },
          }}
        >
          <AboutSectionBlock title="Publications">
            <AboutSubsectionBlock image="/assets/images/about/scopus.png">
              <div>
                <p className={titleStyle}>
                  Optimizing Support Vector Machine for Avocado Ripeness
                  Classification Using Moth Flame Optimization
                </p>

                <p className={subtitleStyle}>Scopus and Sinta 2</p>
                <Link
                  href="https://doi.org/10.35882/jeeemi.v7i2.652"
                  className="font-libre font-semibold text-black dark:text-neutral-300 text-xs underline"
                >
                  View Journal
                </Link>
              </div>
            </AboutSubsectionBlock>
          </AboutSectionBlock>

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
                      <p className="font-libre font-semibold dark:text-neutral-300 text-xs underline">
                        View Certificate
                      </p>
                    </button>
                  )}
                </div>
              </AboutSubsectionBlock>
            ))}
          </AboutSectionBlock>

          <AboutSectionBlock title="Tech Stack">
            <div className="grid grid-cols-6 md:grid-cols-10 lg:grid-cols-6">
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
                    <div className="hidden group-hover:block -top-5 z-50 absolute bg-gray-200 p-2 rounded duration-300">
                      <p className="font-mono text-xs">{stack.name}</p>
                    </div>

                    <stack.icon className={stack.className} />
                  </motion.div>
                );
              })}
            </div>
          </AboutSectionBlock>
          <motion.div
            className="mt-3"
            initial={{ opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
              },
            }}
          >
            <AboutSectionBlock title="Coding Stats">
              <AboutSubsectionBlock>
                <Link
                  href={
                    "https://wakatime.com/@56f938c5-7cbc-42ac-adff-98c8ed90c840"
                  }
                >
                  <Image
                    src="https://wakatime.com/badge/user/56f938c5-7cbc-42ac-adff-98c8ed90c840.svg"
                    alt="Total time coded since May 23 2025"
                    width={150}
                    height={50}
                    className="mb-2"
                  />
                </Link>
                <img
                  src="https://github-readme-stats.vercel.app/api/wakatime?username=kemalcrisannaufal&hide_border=true&layout=compact&theme=dark"
                  alt="WakaTime Stats"
                  className="w-full h-auto"
                />
              </AboutSubsectionBlock>
            </AboutSectionBlock>
          </motion.div>
        </motion.div>
      </div>

      {credentialUrl !== "" && (
        <Modal onClose={() => handleOpenDetail("")}>
          <div>
            <h1 className="font-libre font-semibold dark:text-white text-2xl">
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
      )}
    </>
  );
};

export default About;
