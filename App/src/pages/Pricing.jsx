import styles from "./Pricing.module.css";
import Footer from "./../Components/Common/Footer/Footer";

import Navigation from "./../Components/Navigation";
import Card from "../Components/Pricing/Card/Card";

function Pricing() {
  const featuresBasic = [
    "full access to smth",
    "limited access to archives",
    "custom support services",
    "no setup fees",
    "access to basic features",
    "community support",
    "free updates",
  ];
  const featuresPro = [
    "unlimited access to all resources",
    "priority access to archives",
    "dedicated support services",
    "no setup fees",
    "access to all features",
    "premium community support",
    "regular free updates",
    "no credit card required",
    "ideal for professionals",
    "flexible trial with no commitments",
    "access to all features",
    "premium community support",
  ];
  const featuresUltra = [
    "unlimited access to all ",
    "priority and 24/7 access to archives",
    "dedicated personalized support ",
    "zero setup fees and hidden charges",
    "full access to all advanced ",
    "exclusive community support",
    "frequent updates and improvements",
    "no credit card required on signup",
    "tailored for industry leader needs",
    "flexible, adaptive trial periods",
    "analytics and report utilities",
  ];
  return (
    <>
      <section className={styles.section}>
        <Navigation />
        <main className={styles.main}>
          <Card
            color="#212327"
            accentColor="#31343b"
            dark="#1B1C1F"
            header="BASIC"
            price="0"
            features={featuresBasic}
            delay={0}
            changeBorder={false}
          />
          <Card
            color="#04a477"
            accentColor="#04ca92"
            dark="#058460"
            header="PRO"
            price="7"
            features={featuresPro}
            delay={0.2}
          />
          <Card
            color="#915eff"
            accentColor="#b05eff"
            dark="#6E41CE"
            header="ULTRA"
            price="10"
            features={featuresUltra}
            delay={0.4}
          />
        </main>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Pricing;
