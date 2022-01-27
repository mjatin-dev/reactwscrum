import type { NextPage } from "next";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import Button from "../components/Button";
import Header from "../components/Header";
import styles from "./styles.module.scss";
const createAccount: NextPage = () => {
  return (
    <>
      <Header tabName="Create NEAR account" />
      <div className={styles.container}>
        <p className={`${styles.termsText} ${styles.textLeft}`}>
          Enter an Account ID to use with your NEAR account. Your Account ID
          will be used for all NEAR operations, including sending and receiving
          assets.
        </p>
        <div className={styles.formInputContainer}>
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" placeholder="Ex. John Doe" />
        </div>
        <div className={styles.formInputContainer}>
          <label htmlFor="yourName">Account ID</label>
          <div className={styles.accountIdInputContainer}>
            <input
              type="text"
              id="yourName"
              placeholder="Ex. your name"
              className={styles.yourNameInput}
            />
            <input
              type="text"
              id="nearPostfix"
              placeholder="Ex. your name"
              value=".near"
              onChange={() => {}}
              className={styles.nearInput}
            />
          </div>
          <p className={`${styles.termsText} ${styles.errorMessage}`}>
            Account ID already taken!
          </p>
        </div>
        <Button
          text="Continue"
          className={styles.signupContinueButton}
          isIcon
          icon={<MdArrowForwardIos />}
        />
        <p className={styles.termsText}>
          By creating a NEAR account, you agree to the NEAR Wallet
        </p>
        <p className={`${styles.termsText} ${styles.termsTextLink}`}>
          <Link href="#">Terms of Service and Privacy Policy</Link>
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
    </>
  );
};
export default createAccount;
