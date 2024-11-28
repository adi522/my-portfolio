let tl = gsap.timeline();

tl.from('#nav-bar', {
  opacity: 0,
  y: -50,
  scale: 0.8,
  rotation: 10,
  duration: 1.5,
  delay: 0.5,
  ease: "back.out(1.7)",
})
.from('#nav-bar p', {
  opacity: 0,
  y: 20,
  stagger: 0.2,
  duration: 1.5,
  ease: "power2.out",
}, "-=1");

tl.to('#contact a', {
  opacity: 1,
  y: 20,
  stagger: 0.3,
  duration: 1.5,
  ease: "power2.out",
}, "-=2");
