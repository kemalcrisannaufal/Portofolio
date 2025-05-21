import { CONTACTS } from "@/constants/list.constanst";

const ContactSideBar = () => {
  return (
    <div className="top-1/2 left-0 fixed -translate-y-1/2 transform">
      <div>
        {CONTACTS.map((item, index) => {
          return (
            <div key={index} className="hover:bg-black hover:text-white">
              <a href={item.url}>
                <i className={`bx ${item.icon} text-xl p-2`} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactSideBar;
