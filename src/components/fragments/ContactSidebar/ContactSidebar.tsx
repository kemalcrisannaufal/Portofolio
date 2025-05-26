import { CONTACTS } from "@/constants/list.constanst";
import Link from "next/link";

const ContactSideBar = () => {
  return (
    <div className="top-1/2 left-0 fixed -translate-y-1/2 transform">
      <div>
        {CONTACTS.map((item, index) => {
          return (
            <div
              key={index}
              className="hover:bg-black dark:bg-neutral-800 dark:hover:bg-neutral-600 hover:text-white dark:text-white"
            >
              <Link href={item.url} aria-label={`Link-${item.name}`}>
                <i className={`bx ${item.icon} text-xl p-2`} aria-hidden />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactSideBar;
