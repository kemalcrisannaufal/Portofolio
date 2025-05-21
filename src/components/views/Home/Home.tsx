import Button from "@/components/ui/Button";
import TypingText from "@/components/ui/TypingText";
import Image from "next/image";

const Home = () => {
  return (
    <div className="md:flex md:flex-row-reverse items-center gap-10 min-h-[75vh]">
      <div className="hidden md:block relative rounded md:w-1/3 overflow-hidden hover:scale-110 duration-300">
        <Image
          src="/assets/images/home/foto_fix.jpg"
          alt="kemalcrisannaufal"
          width={500}
          height={500}
          priority
          className="w-full h-full object-contain"
        />
      </div>

      <div className="w-full md:w-2/3">
        <div>
          <h1 className="font-libre font-thin text-lg md:text-xl lg:text-2xl">
            Hello, It&apos;s me
          </h1>
          <h1 className="font-libre md:text-2xl text-3xl lg:text-4xl">
            Kemal Crisannaufal
          </h1>
          <TypingText
            words={["Software Engineer", "Data Analyst", "AI Engineer"]}
            boxClassName="bg-gray-200 px-3 py-1 rounded h-7 mt-2"
            textClassName="font-libre font-thin text-sm md:text-sm lg:text-md"
          />

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
          <p className="my-5 font-libre text-default-600 lg:text-md text-sm text-justify leading-7">
            A passionate Informatics fresh graduate from Telkom University with
            a strong interest in Software Engineering and Data Science.
            Currently focused on building web applications using React and
            exploring the field of Data Science, including Machine Learning
          </p>
        </div>
        <Button onClick={() => {}}>
          <div className="flex items-center">
            <i className="mr-2 text-lg bx bx-briefcase" />
            <p className="font-libre font-thin text-sm">HIRE ME</p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Home;
