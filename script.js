document.addEventListener('mousemove', function(e) {
  const cursor = document.querySelector('.cursor');

  const mouseX = e.pageX;
  const mouseY = e.pageY;

  cursorTargetX = mouseX;
  cursorTargetY = mouseY;

  createTrace(mouseX, mouseY);
});

const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

const style = document.createElement('style');
style.innerHTML = `
  .cursor {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: width 0.1s ease, height 0.1s ease;
  }
  .trace {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    pointer-events: none;
    opacity: 0.5;
    transition: all 0.6s ease-out;
  }
`;
document.head.appendChild(style);

let cursorX = 0;
let cursorY = 0;
let cursorTargetX = 0;
let cursorTargetY = 0;
let cursorSize = 20;

function createTrace(mouseX, mouseY) {
  const trace = document.createElement('div');
  trace.classList.add('trace');

  trace.style.left = `${mouseX}px`;
  trace.style.top = `${mouseY}px`;

  document.body.appendChild(trace);

  setTimeout(() => {
    trace.style.width = '0px';
    trace.style.height = '0px';
    trace.style.opacity = '0';
  }, 10);

  setTimeout(() => {
    trace.remove();
  }, 600);
}

function smoothCursor() {
  const dx = cursorTargetX - cursorX;
  const dy = cursorTargetY - cursorY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  cursorX += dx * 0.1;
  cursorY += dy * 0.1;

  cursorSize = Math.min(20, 20 + (distance * 0.3));

  cursor.style.left = `${cursorX}px`;
  cursor.style.top = `${cursorY}px`;

  cursor.style.width = `${cursorSize}px`;
  cursor.style.height = `${cursorSize}px`;

  requestAnimationFrame(smoothCursor);
}

smoothCursor();

var tl = gsap.timeline()
tl.from('li',{
  y:-100,
  opacity:0,
  duration:0.5,
  delay:0.2,
  stagger:0.2,
})

tl.from('.hero',{
  y:100,
  delay:0.5,
  opacity:0,
})



tl.from('.about', {
  y: -100,
  opacity: 0,
  duration: 0.6,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.about .content',
    scroller: 'body',
    markers: false,
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: 1,
    toggleActions: 'play none none none',
  }
});
