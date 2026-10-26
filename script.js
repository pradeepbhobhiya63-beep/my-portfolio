// ---------- Footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Navbar: scrolled state ----------
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

// ---------- Mobile menu ----------
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    navLinks.classList.remove('open');
  })
);

// ---------- Scroll reveal ----------
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ---------- Active nav link on scroll ----------
const sections = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('.nav-links a');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => sectionObserver.observe(s));

// ---------- Typing effect in code card ----------
// Each line is a list of [cssClass, text] pieces so we can colour the code.
const codeLines = [
  [['k', 'const '], ['v', 'developer'], ['p', ' = {']],
  [['p', '  name: '], ['s', "'Pradeep'"], ['p', ',']],
  [['p', '  role: '], ['s', "'Cyber Security Student'"], ['p', ',']],
  [['p', '  focus: ['], ['s', "'Web Security'"], ['p', ', '], ['s', "'Bug Bounty'"], ['p', '],']],
  [['p', '  tools: ['], ['s', "'Burp'"], ['p', ', '], ['s', "'Python'"], ['p', '],']],
  [['p', '  hacking: '], ['k', 'true']],
  [['p', '};']],
];

const codeBlock = document.getElementById('codeBlock');
const cursor = document.createElement('span');
cursor.className = 'cursor';

function typeCode() {
  let line = 0, piece = 0, char = 0;
  let currentSpan = null;

  function step() {
    if (line >= codeLines.length) return;
    const [cls, text] = codeLines[line][piece];

    if (char === 0) {
      currentSpan = document.createElement('span');
      currentSpan.className = cls;
      codeBlock.insertBefore(currentSpan, cursor);
    }
    currentSpan.textContent += text[char++];

    if (char >= text.length) {
      char = 0; piece++;
      if (piece >= codeLines[line].length) {
        piece = 0; line++;
        codeBlock.insertBefore(document.createTextNode('\n'), cursor);
      }
    }
    setTimeout(step, 28);
  }
  codeBlock.appendChild(cursor);
  step();
}
setTimeout(typeCode, 900);

// ---------- Animated counters ----------
const counters = document.querySelectorAll('.count');
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = +el.dataset.target;
    let current = 0;
    const timer = setInterval(() => {
      current++;
      el.textContent = current;
      if (current >= target) clearInterval(timer);
    }, 350);
    countObserver.unobserve(el);
  });
}, { threshold: 0.6 });
counters.forEach(c => countObserver.observe(c));
