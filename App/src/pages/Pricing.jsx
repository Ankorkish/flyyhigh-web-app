import Navigation from "./../Components/Navigation";
import Contact from "../Components/Common/Conatct/Contact";
import Info from "../Components/Common/Info/Info";
import ToAppButton from "../Components/Common/ToAppButton/ToAppButton";

import header from "./main.module.css";

function Pricing() {
  return (
    <section>
      <div className={header.bg}>
        <Navigation />
        <Contact />
        <Info
          header={"Pricing"}
          text={
            "Explore our flexible pricing plans, designed for everyone from solo presenters to large enterprises. Choose from Basic, Pro, or Premium packages to enhance your presentations with advanced features, increased customization, and dedicated support. Find a plan that fits your budget and unlocks the full potential of your ideas."
          }
        />
        <ToAppButton />
      </div>
    </section>
  );
}

export default Pricing;
