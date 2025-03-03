import React, { useState, useEffect } from "react";

const About = () => {
  const sentence = "Let's find out your style!";
  const [displayedSentence, setDisplayedSentence] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayedSentence(sentence);
          setTimeout(() => setIsDeleting(true), 700);
        } else {
          setDisplayedSentence("");
          setTimeout(() => setIsDeleting(false), 300);
        }
      },
      isDeleting ? 300 : 1000
    );

    return () => clearTimeout(timeout);
  }, [isDeleting]);

  return (
    <div className="about-container">
      {/* <h1>About Us</h1> */}
      <p>
        Welcome to our place! <br />
        We offer a wide variety of products at affordable prices for your best
        shopping experience. <br />
        Feel free to browse our products, add items to your cart, and complete
        your purchase with ease.
      </p>
      <div className="animated-text">{displayedSentence}</div>
    </div>
  );
};

export default About;
