import { FC } from "react";
const SidebarItem: FC<{
  isActive?: boolean;
  text: string;
  icon: JSX.Element;
  onClick?: () => void;
  hideTexts?: boolean;
}> = ({ isActive, text, icon, onClick, hideTexts }) => {
  return (
    <button
      onClick={onClick}
      className={`sidebarItem sm:py-[13.5px] sm:justify-center active:scale-90 w-full hover:bg-disabledColor/20 p-2 rounded-lg ${
        isActive ? "bg-disabledColor/20" : ""
      } transition-all duration-300 ease-out text-whitish flex items-center gap-2`}
    >
      <div className="sidebarItem__icon size-[29px]">{icon}</div>
      <p className={`sidebarItem__text ${hideTexts && "sm:hidden"}`}>{text}</p>
    </button>
  );
};

export default SidebarItem;