import Image from "next/image";
import AboutSectionBlock from "./AboutSectionBlock/AboutSectionBlock";
import AboutSubsectionBlock from "./AboutSubsectionBlock/AboutSubsectionBlock";
import Modal from "@/components/ui/Modal";
import useAbout from "./useAbout";
import { TECH_STACK } from "@/constants/list.constanst";

const About = () => {
  const titleStyle = "mr-2 text-sm lg:text-md font-libre font-semibold";
  const subtitleStyle = "text-neutral-600 text-xs lg:text-sm font-libre";
  const descriptionStyle = "text-xs lg:text-xs font-libre";

  const { openDetail, setOpenDetail } = useAbout();

  return (
    <>
      <div className="flex lg:flex flex-col-row lg:gap-10">
        <div className="lg:top-36 lg:sticky self-start w-full lg:w-1/3">
          <Image
            src="/assets/images/home/foto.jpg"
            width={500}
            height={500}
            alt="kemalcrisannaufal"
            className="rounded-xl w-full object-contain"
          />
        </div>

        <div className="mt-5 lg:mt-0 w-full lg:w-1/3">
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
                  <span className="font-libre text-black text-sm">
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
                  className="font-libre font-semibold text-black text-xs underline"
                >
                  View Journal
                </a>
              </div>
            </AboutSubsectionBlock>
          </AboutSectionBlock>
        </div>

        <div className="w-full lg:w-1/3">
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
                  onClick={() => setOpenDetail("asprak")}
                >
                  <p className="font-libre font-semibold text-black text-xs underline">
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
                  <div
                    key={index}
                    className="group relative mt-2 p-2 border border-gray-200 rounded-full cursor-pointer"
                  >
                    <div className="hidden group-hover:block -top-5 absolute bg-gray-200 p-2 rounded duration-300">
                      <p className="font-mono text-xs">{stack.name}</p>
                    </div>
                    <stack.icon className={stack.className} />
                  </div>
                );
              })}
            </div>
          </AboutSectionBlock>
        </div>
      </div>

      {openDetail === "asprak" && (
        <Modal onClose={() => setOpenDetail("")}>
          <div>
            <h1 className="font-libre font-semibold text-2xl">Certificate</h1>
            <div className="flex justify-center mt-5 w-full">
              <Image
                src={"/assets/images/about/sertifikat_asprak.png"}
                width={500}
                height={500}
                alt="asprak"
                priority
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default About;
