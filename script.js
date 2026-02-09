gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  smooth: 1.5,
  effects: true,
});

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
