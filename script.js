/* =========================================================
   GREEN CORNER SHOP JAVASCRIPT
   ========================================================= */


/* =========================================================
   SMOOTH NAVIGATION
   ========================================================= */

const navigationLinks = document.querySelectorAll("nav a");

navigationLinks.forEach(link => {

  link.addEventListener("click", event => {

    const target = document.querySelector(
      link.getAttribute("href")
    );

    if (target) {

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});


/* =========================================================
   LOGO RETURNS TO TOP
   ========================================================= */

const logo = document.querySelector(".logo");

logo.addEventListener("click", event => {

  event.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


/* =========================================================
   EXPLORE OUR PLANTS BUTTON
   ========================================================= */

const exploreButton = document.querySelector(".cta-btn");

exploreButton.addEventListener("click", event => {

  event.preventDefault();

  const plantsSection = document.querySelector("#plants");

  plantsSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

});


/* =========================================================
   HEADER SCROLL EFFECT
   ========================================================= */

const header = document.querySelector("header");

function updateHeader() {

  if (window.scrollY > 50) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

}

window.addEventListener("scroll", updateHeader);


/* =========================================================
   SCROLL REVEAL ANIMATIONS
   ========================================================= */

const revealElements = document.querySelectorAll(
  ".section-title, " +
  ".section-subtitle, " +
  ".about-content, " +
  ".plant-card, " +
  ".tip-card, " +
  ".info-box, " +
  ".contact-box"
);

revealElements.forEach(element => {
  element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach(element => {

  revealObserver.observe(element);

});


/* =========================================================
   STAGGER CARD ANIMATIONS
   ========================================================= */

document
  .querySelectorAll(".plant-card, .tip-card")
  .forEach((card, index) => {

    card.style.transitionDelay =
      `${index * 80}ms`;

  });


/* =========================================================
   CONTACT FORM
   ========================================================= */

const form = document.querySelector("#contact-form");

form.addEventListener("submit", event => {

  event.preventDefault();


  /* Let the browser handle required fields and email validation */

  if (!form.checkValidity()) {

    form.reportValidity();

    return;

  }


  const button = form.querySelector(".submit-btn");


  /* Give the button a physical click animation */

  button.classList.add("sending");


  button.animate(
    [
      {
        transform: "scale(1)"
      },
      {
        transform: "scale(0.96)"
      },
      {
        transform: "scale(1)"
      }
    ],
    {
      duration: 300,
      easing: "ease-out"
    }
  );


  /*
    Collect the submitted information.

    In a real website this information could be
    sent to a server or email service.
  */

  const formData = new FormData(form);

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");


  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);


  /*
    Reset the form after the interaction.
  */

  setTimeout(() => {

    form.reset();

    button.classList.remove("sending");

  }, 400);

});


/* =========================================================
   PLANT CARD MOUSE EFFECT
   ========================================================= */

const plantCards =
  document.querySelectorAll(".plant-card");


plantCards.forEach(card => {


  card.addEventListener("mousemove", event => {

    /*
      Don't apply the 3D effect on small screens.
    */

    if (window.innerWidth <= 768) {
      return;
    }


    const rectangle =
      card.getBoundingClientRect();


    const x =
      event.clientX - rectangle.left;

    const y =
      event.clientY - rectangle.top;


    const rotateX =
      ((y / rectangle.height) - 0.5) * -4;

    const rotateY =
      ((x / rectangle.width) - 0.5) * 4;


    card.style.transform =
      `translateY(-8px)
       perspective(700px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)`;

  });


  card.addEventListener("mouseleave", () => {

    card.style.transform = "";

  });

});


/* =========================================================
   PHONE + EMAIL INTERACTION
   ========================================================= */

const contactLinks =
  document.querySelectorAll(
    '.info-item a[href^="tel:"], .info-item a[href^="mailto:"]'
  );


contactLinks.forEach(link => {

  link.addEventListener("click", () => {

    link.style.transform = "scale(0.97)";

    setTimeout(() => {

      link.style.transform = "";

    }, 150);

  });

});


/* =========================================================
   BUTTON KEYBOARD ACCESS
   ========================================================= */

document.querySelectorAll(
  ".cta-btn, .submit-btn"
).forEach(button => {

  button.addEventListener("keydown", event => {

    if (
      event.key === "Enter" ||
      event.key === " "
    ) {

      button.classList.add("keyboard-active");

    }

  });

  button.addEventListener("keyup", () => {

    button.classList.remove("keyboard-active");

  });

});