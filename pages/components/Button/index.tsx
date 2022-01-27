import type { NextPage } from "next";
import { ButtonHTMLAttributes, ReactComponentElement, ReactNode } from "react";
import styles from "./button.module.scss";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: ReactNode;
  variant?: string;
  isIcon?: boolean;
}

const Button: NextPage<ButtonProps> = (props) => {
  const { className, icon, variant = "primary", isIcon, text, ...rest } = props;
  return (
    <button {...rest} className={`${className} ${styles[variant]}`}>
      <span>{text}</span>
      {isIcon && icon}
    </button>
  );
};

export default Button;
