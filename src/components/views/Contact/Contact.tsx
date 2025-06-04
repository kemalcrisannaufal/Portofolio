import Link from "next/link";
import Guestbook from "./Guestbook";
import { CONTACTS } from "@/constants/list.constanst";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="dark:text-neutral-300">
      <div>
        <h1 className="font-libre text-xl lg:text-2xl">Let&apos;s connect. </h1>
        <p className="font-libre text-xs md:text-sm lg:text-base">
          Interested in collaborating or have any questions? Feel free to reach
          out to me! I&apos;m always open to new opportunities and projects
        </p>

        <div className="gap-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 mt-3">
          {CONTACTS.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.3,
                    ease: "easeInOut",
                  },
                }}
              >
                <Link
                  href={item.url}
                  className="flex justify-center items-center hover:bg-black dark:bg-black dark:hover:bg-neutral-600 shadow mt-1 md:mt-5 p-2 border border-gray-200 rounded w-full overflow-hidden hover:text-white hover:transition-all hover:duration-300 cursor-pointer"
                >
                  <i className={`bx ${item.icon} text-xl md:text-2xl mr-2`} />
                  <span
                    className={`font-libre md:text-md text-sm ${
                      item.name === "LinkedIn" ||
                      (item.name === "Email" && "mt-1")
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
      <Guestbook />
    </div>
  );
};

export default Contact;
