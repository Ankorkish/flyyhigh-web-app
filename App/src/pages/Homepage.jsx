import Contact from "../Components/Common/Conatct/Contact";
import Info from "../Components/Common/Info/Info";
import ToAppButton from "../Components/Common/ToAppButton/ToAppButton";
import Navigation from "../Components/Navigation";
import { useInView } from "react-intersection-observer";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  cubicBezier,
} from "framer-motion";
import { useEffect } from "react";
import styles from "./main.module.css";
import Footer from "../Components/Common/Footer/Footer";

function Homepage() {
  const [ref1, inView1] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again every time the object comes into view
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again every time the object comes into view
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again every time the object comes into view
  });

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  const count2 = useMotionValue(0);
  const rounded2 = useTransform(count2, Math.round);

  const count3 = useMotionValue(0);
  const rounded3 = useTransform(count3, Math.round);

  useEffect(() => {
    if (inView1) {
      const easing = cubicBezier(0.7, -0.2, 0.15, 0.85); // Define your custom cubic-bezier curve
      const animation = animate(count, 97, {
        duration: 1,
        easing: easing, // Apply the custom easing function
      });
      return animation.stop;
    }
  }, [inView1]);

  useEffect(() => {
    if (inView2) {
      const animation = animate(count2, 250, {
        duration: 2,
        timing: { ease: "easeOut" },
      });
      return animation.stop;
    }
  }, [inView2]);
  useEffect(() => {
    if (inView3) {
      const animation = animate(count3, 170, {
        duration: 3,
        timing: { ease: "easeOut" },
      });
      return animation.stop;
    }
  }, [inView3]);

  return (
    <>
      <section style={{ zIndex: "-12" }}>
        <div className={styles.bg}>
          <Navigation />
          <Contact />
          <Info header={"Weaving Your Dreams into Unforgettable Adventures"} />
          <ToAppButton />
        </div>
      </section>
      <section>
        <main className={styles.section}>
          <div className={styles.story}>
            <motion.div
              className={styles.title}
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: -50, scale: 1 }}
              transition={{ type: "spring", stiffness: 30 }}
              viewport={{ once: true, amount: 1 }}
            >
              [Our history]
            </motion.div>
            <motion.div
              className={styles.text}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 90 }}
              viewport={{ once: true }}
            >
              Founded in a small but ambitious garage, our company has grown
              from a visionary startup to a leader in presentation technology.
              It all began with a simple idea: to make communication not just
              clearer, but truly dynamic. Over the years, we{"'"}ve expanded our
              team, honed our technology, and refined our approach based on
              real-world feedback. Today, our app is trusted by professionals in
              over 50 countries, helping them to tell their stories with clarity
              and passion. As we continue to innovate, we remain committed to
              the roots of our early days: transforming the art of presentation.
            </motion.div>
          </div>
          <div className={styles.numbers}>
            <div className={styles.awardName}>
              <motion.div
                className={styles.number}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  duration: 0.5,
                  delay: 0.1,
                }}
                viewport={{ once: true }}
              >
                <motion.span ref={ref1}>{rounded}</motion.span>%
              </motion.div>
              <p className={styles.text}>Satisfaction rate</p>
            </div>
            <div className={styles.awardName}>
              <motion.div
                className={styles.number}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  duration: 0.8,
                  delay: 0.4,
                }}
                viewport={{ once: true }}
              >
                <motion.span ref={ref3}>{rounded3}</motion.span>+
              </motion.div>
              <p className={styles.text}>Delighted Clients</p>
            </div>
            <div className={styles.awardName}>
              <motion.div
                className={styles.number}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  duration: 0.8,
                  delay: 0.8,
                }}
                viewport={{ once: true }}
              >
                <motion.span ref={ref2}>{rounded2}</motion.span>+
              </motion.div>
              <p className={styles.text}>Delighted Clients</p>
            </div>
          </div>
          <div className={styles.story}>
            <motion.div
              className={styles.text}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 90 }}
              viewport={{ once: true }}
            >
              Welcome to our company, the creators of a pioneering app designed
              to enhance your experience with engaging presentations. Our team
              is driven by a passion for innovation and a commitment to
              delivering intuitive, cutting-edge technology. We strive to
              empower users by providing them with a tool that transforms
              complex information into captivating, accessible formats. Join us
              on our journey to change the way the world communicates and
              connects through presentations.
            </motion.div>
            <motion.div
              className={styles.title}
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: -50, scale: 1 }}
              transition={{ type: "spring", stiffness: 90 }}
              viewport={{ once: true, amount: 1 }}
            >
              [Abot us]
            </motion.div>
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
}

export default Homepage;
