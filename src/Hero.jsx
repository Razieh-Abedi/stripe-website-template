import React, { useContext } from "react";
import phoneImg from "./images/phone.svg";
import AppContext from "./context";
function Hero() {
  const [isSubmenuOpen, setIsSubmenuOpen] = useContext(AppContext);
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of businesses of all sizes – from startups to large
            enterprises – use Stripe's software and APIs to accept payments,
            send payouts, and manage their businesses online.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  );
}

export default Hero;
