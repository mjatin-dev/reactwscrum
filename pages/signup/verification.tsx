import { NextPage } from "next";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import Button from "../components/Button";
import Header from "../components/Header";
import OtpInput from "../components/OtpInput";
import styles from "./styles.module.scss";

const Verfication: NextPage = () => {
  return (
    <>
      <Header tabName="Verification" />
      <main>
        <div className={styles.container}>
          <p className={`${styles.termsText} ${styles.otpVerificationMessage}`}>
            We&apos;ve sent a 6-digit verification code to the email address
          </p>
          <p className={`${styles.termsTextLink} ${styles.userData}`}>
            johndoe@gmail.com
          </p>
          <p className={`${styles.termsText} ${styles.labelText}`}>
            Enter Verification Code
          </p>
          <OtpInput
            onChangeOTP={(otp: string) => console.log(otp)}
            length={6}
            inputClassName={styles.otpSingleInput}
            className={styles.otpSingleInputContainer}
          />
          <Button
            text="Continue"
            className={styles.signupContinueButton}
            isIcon
            icon={<MdArrowForwardIos />}
          />

          <div className={styles.horizontalLine}></div>
          <p className={styles.loginMessage}>Didn&apos;t receive your code?</p>
          <p className={`${styles.signupAcitonsLinks}`}>
            <Link href="#">Send to a different email address</Link>
          </p>
          <p className={`${styles.signupAcitonsLinks}`}>
            <Link href="#">Resend your code </Link>
          </p>
        </div>
      </main>
    </>
  );
};
export default Verfication;
