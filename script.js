gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  smooth: 1.5,
  effects: true,
});

function animatePage() {
  gsap.from(".hero", {
    opacity: 0,
    duration: 1,
  });

  gsap.from("picture:nth-child(2)", {
    y: 60,
    duration: 1,
  });

  gsap.from("picture:nth-child(1)", {
    y: -60,
    duration: 1,
  });

  // ANIMACOES CARDS
  gsap.from(".card", {
    opacity: 0,
    filter: "blur(10px)",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".cards",
      start: "0% 80%",
      end: "100% 70%",
      scrub: true,
    },
  });

  gsap.from(".thanksSection ul li", {
    opacity: 0,
    x: 40,
    filter: "blur(10px)",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".thanksSection ul",
      start: "0% 80%",
      end: "100% 50%",
      scrub: true,
    },
  });

  // ANIMACOES FOOTER
  gsap.from("footer", {
    y: "-30%",
    immediateRender: false,
    scrollTrigger: {
      trigger: "footer",
      scrub: true,
      invalidateOnRefresh: true,
      end: "100% 100%",
    },
  });

  const groupTextSplit = document.querySelectorAll(".textSplit");

  groupTextSplit.forEach((textSplit) => {
    const split = SplitText.create(textSplit, {
      type: "lines, words, chars",
      mask: "lines",
    });

    gsap.from(split.chars, {
      y: 40,
      opacity: 0,
      duration: 0.3,
      stagger: 0.03,
      scrollTrigger: {
        trigger: textSplit,
      },
    });
  });
}

// PRELOADER -> CRIA TIMELINE
const tl = gsap.timeline({
  onComplete() {
    animatePage();
    gsap.to("#preloader", {
      opacity: 0,
      display: "none",
    });
  },
});

tl.to("#preloader path", {
  duration: 1,
  strokeDashoffset: 0,
});
tl.to("#preloader path", {
  fill: "rgb(168, 19, 19)",
  duration: 0.5,
  strokeDashoffset: 0,
});
