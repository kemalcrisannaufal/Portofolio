import Button from "@/components/ui/Button";
import TypingText from "@/components/ui/TypingText";
import Image from "next/image";

const HomeView = () => {
  return (
    <div className="md:flex md:flex-row-reverse items-center gap-10 px-10 md:px-20 lg:px-48 min-h-[75vh]">
      <div className="hidden md:block relative rounded md:w-1/3 overflow-hidden hover:scale-110 duration-300">
        <Image
          src="/assets/images/foto_fix.jpg"
          alt="hero"
          width={500}
          height={500}
          priority
          className="w-full h-full object-contain"
        />
      </div>

      <div className="w-full md:w-2/3">
        <div>
          <h1 className="font-mono font-thin text-lg md:text-xl lg:text-2xl">
            Hello, It&apos;s me
          </h1>
          <h1 className="font-mono font-semibold text-2xl md:text-3xl lg:text-4xl">
            Kemal Crisannaufal
          </h1>
          <TypingText
            words={["Software Engineer", "Data Analyst", "AI Engineer"]}
            boxClassName="bg-neutral-200 px-3 py-1 rounded h-7 mt-2"
            textClassName="font-mono font-thin text-sm md:text-md"
          />

          <div className="md:hidden flex justify-center items-center mt-5 overflow-hidden">
            <Image
              src="/assets/images/foto_fix.jpg"
              alt="hero"
              width={300}
              height={300}
              priority
              className="w-72 h-72 object-cover"
            />
          </div>
          <p className="my-5 font-inter text-neutral-600 md:text-md text-sm lg:text-lg text-justify">
            A passionate Informatics fresh graduate from Telkom University with
            a strong interest in Software Engineering and Data Science.
            Currently focused on building web applications using React and
            exploring the field of Data Science, including Machine Learning
          </p>
        </div>
        <Button onClick={() => {}}>
          <div className="flex items-center">
            <i className="mr-2 text-lg bx bx-briefcase" />
            <p className="font-mono font-semibold">HIRE ME</p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default HomeView;
