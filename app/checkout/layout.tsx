import {FC} from "react";

const layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="w-full bg-gray">{children}</div>;
};

export default layout;
