import { Link } from "react-router-dom";

import styles from "./Login.module.css";

function Login() {
  return (
    <section className={styles.layout}>
      <div className={styles.img} />
      <div className={styles.formWrapper}>
        <form className={styles.form}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 49 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.7706 22.1999V16.2054L30.7614 24.198L20.7706 32.1907V26.1962H2.78711V22.1999H20.7706ZM5.70044 30.1925H9.94454C11.3394 33.6275 13.8843 36.4712 17.1442 38.237C20.404 40.0029 24.1761 40.5812 27.8152 39.8731C31.4544 39.165 34.7344 37.2145 37.0943 34.3552C39.4542 31.4959 40.7472 27.9054 40.7523 24.198C40.7543 20.4868 39.465 16.8904 37.1054 14.0258C34.7458 11.1612 31.463 9.2069 27.8201 8.49807C24.1771 7.78923 20.401 8.37004 17.1395 10.1409C13.878 11.9117 11.3342 14.7623 9.94454 18.2035H5.70044C8.2461 10.097 15.8192 4.21637 24.7669 4.21637C35.8028 4.21637 44.7486 13.1622 44.7486 24.198C44.7486 35.2339 35.8028 44.1797 24.7669 44.1797C15.8192 44.1797 8.2461 38.2991 5.70044 30.1925Z"
              fill="white"
            />
          </svg>
          <h2 className={styles.h2}>Login to your account</h2>
          <p className={styles.p}>
            don`t have an account? <u>Get start with us</u>
          </p>
          <input className={styles.inputFiled} placeholder="Email" />
          <input
            className={styles.inputFiled}
            placeholder="Password"
            style={{ marginBottom: "1.2em" }}
          />
          <p className={styles.forgot}>Forgot password?</p>
          <input type="submit" className={styles.submit} value={"Login"} />
        </form>

        <div className={styles.terms}>
          By creating account you agree to our <u>Terms of Service</u>
        </div>
        <Link to={"/"} className={styles.back}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.71714 5.28571L8.35429 6.64857L9.57143 7.85714L13 4.42857L9.57143 1L8.36286 2.20857L9.71714 3.57143H2.71429C1.77143 3.57143 1 4.34286 1 5.28571V13H2.71429V5.28571H9.71714Z"
              fill="white"
            />
          </svg>
          Back to home
        </Link>
      </div>
    </section>
  );
}

export default Login;
