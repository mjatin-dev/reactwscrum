import type { NextPage } from "next";
import Header from "../components/Header";
import TabSwitch from "../components/TabSwitch";
import styles from "./styles.module.scss";
import { signupTabs } from "../components/constants/signupTabs";
import Button from "../components/Button";
import Link from "next/link";
import { MdArrowForward, MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
const Signup: NextPage = () => {
  const [currentTab, setCurrentTab] = useState(signupTabs[0]);
  return (
    <>
      <Header isLogo />
      <main>
        <TabSwitch
          tabs={signupTabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        <div className={styles.container}>
          {currentTab.value === "phone" && (
            <input type="text" placeholder="Ex (337) 378 8383" />
          )}
          {currentTab.value === "email" && (
            <input type="email" placeholder="eg. johndoe@mail.com" />
          )}
          <Button
            text="Continue"
            className={styles.signupContinueButton}
            icon={<MdArrowForwardIos />}
            isIcon
          />
          <p className={styles.termsText}>
            by clicking continue you must agree to near labs{" "}
          </p>
          <p className={`${styles.termsText} ${styles.termsTextLink}`}>
            <Link href="#">Terms & Conditions ans Privacy Policy</Link>
          </p>
          <div className={styles.horizontalLine}></div>
          <p className={styles.loginMessage}>Already have NEAR account?</p>
          <Button
            text="Log in with NEAR"
            className={styles.loginButton}
            isIcon
            icon={<MdArrowForwardIos />}
          />
        </div>
      </main>
    </>
  );
};
export default Signup;
