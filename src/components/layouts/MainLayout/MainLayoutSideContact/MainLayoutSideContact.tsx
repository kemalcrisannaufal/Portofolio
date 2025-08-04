import Link from "next/link";
import { CONTACTS } from "../mainLayout.constants";

const MainLayoutSideContact = () => {
  return (
    <div className="top-1/2 left-0 fixed -translate-y-1/2 transform">
      <div>
        {CONTACTS.map((item, index) => {
          return (
            <div
              key={index}
              className="hover:bg-black dark:bg-[var(--color-dark-primary)] hover:text-white dark:hover:text-[var(--color-neon)]"
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

export default MainLayoutSideContact;
