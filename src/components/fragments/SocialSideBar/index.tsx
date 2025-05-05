import { socialItem } from "@/components/common/constant/socialItem";

const SocialSideBar = () => {
  return (
    <div className="top-1/2 left-0 absolute -translate-y-1/2 transform">
      <div>
        {socialItem.map((item, index) => {
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

export default SocialSideBar;
