import { ReactNode } from "react";
import { useTheme } from "../context/ThemeContext";

interface FormHeadingProps {
  children: ReactNode;
}

export const FormHeading: React.FC<FormHeadingProps> = ({ children }) => {
  const { getTheme } = useTheme();
  return (
    <h1
      className=" border-b-4  font-semibold pb-1"
      style={{
        color: getTheme().primary.textColor,
        borderColor: getTheme().primary.textColor,
      }}
    >
      {children}
    </h1>
  );
};
