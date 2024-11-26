const h1 = document.querySelector('h1')
h1.addEventListener('mouseover' , function(){
    h1.style.backgroundColor = 'cream';

})
h1.addEventListener('mouseout', function() {
    h1.style.backgroundColor = ''; 
});


let tl = gsap.timeline();

tl.from('#nav-bar', {
  opacity: 0,
  y: -50,
  scale: 0.8,
  rotation: +10,
  duration: 1.5,
  delay: 0.5,
  ease: "back.out(1.7)",
})
.from('#nav-bar a', {
  opacity: 0,
  y: 20,
  stagger: 0.2,
  duration: 1.5,
  ease: "power2.out",
}, "-=1");


