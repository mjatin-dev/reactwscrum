import type { NextPage } from "next";
import styles from "./header.module.scss";
import Logo from "../../../assets/fullLogoDark.svg";
import Image from "next/image";
interface HeaderProps {
  tabName?: string;
  isLogo?: boolean;
}

const Header: NextPage<HeaderProps> = ({ isLogo, tabName }) => {
  return (
    <header className={styles.header}>
      {!tabName && isLogo && (
        <div className={styles.logoContainer}>
          <Image src={Logo} alt="homepage" width={120} />
        </div>
      )}
      {tabName && !isLogo && <p className={styles.tabName}>{tabName || ""}</p>}
    </header>
  );
};

export default Header;
