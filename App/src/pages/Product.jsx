import Navigation from "./../Components/Navigation";
import header from "./main.module.css";
import Contact from "../Components/Common/Conatct/Contact";
import Info from "../Components/Common/Info/Info";
import ToAppButton from "../Components/Common/ToAppButton/ToAppButton";

function Product() {
  return (
    <section>
      <div className={header.bg}>
        <Navigation />
        <Contact />
        <Info
          header={"About WorldWide"}
          text={
            "Welcome to our company, creators of a pioneering app that transforms complex information into engaging presentations. Driven by innovation and a commitment to intuitive technology, we empower users to communicate effectively. Join us in reshaping how the world connects through presentations."
          }
        />
        <ToAppButton />
      </div>
    </section>
  );
}

export default Product;
