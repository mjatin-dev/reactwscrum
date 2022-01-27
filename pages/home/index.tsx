import type { NextPage } from "next";
import Image from "next/image";
import styles from "./styles.module.scss";
import Logo from "../../assets/logoLight.svg";
import NearLogo from "../../assets/nearLogo.svg";
const HomePage: NextPage = () => {
  return (
    <>
      <div className={styles.home}>
        <div>
          <div className={styles.logoContainer}>
            <Image src={Logo} alt="logo" />
            <p className={styles.logoText}>Home Page</p>
          </div>
          <p className={`${styles.logoText} ${styles.textSmall}`}>
            a web3 gateway to hidden experiences
          </p>
        </div>
        <div className={styles.poweredByContainer}>
          <p className={`${styles.logoText} ${styles.textSmall}`}>powered by</p>
          <Image src={NearLogo} alt="logo" />
        </div>
      </div>
    </>
  );
};
export default HomePage;
