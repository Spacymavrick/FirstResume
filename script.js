// ===== Typing Effect =====
const roles = ["Software Developer", "Cybersecurity Enthusiast", "Cloud Engineer", "Problem Solver"];
let roleIndex = 0, charIndex = 0, deleting = false;
const typingEl = document.getElementById("typing-text");

function type() {
  const current = roles[roleIndex];
  if (!deleting && charIndex < current.length) {
    charIndex++;
    typingEl.textContent = current.slice(0, charIndex);
    setTimeout(type, 80);
  } else if (!deleting && charIndex === current.length) {
    setTimeout(() => { deleting = true; type(); }, 2000);
  } else if (deleting && charIndex > 0) {
    charIndex--;
    typingEl.textContent = current.slice(0, charIndex);
    setTimeout(type, 40);
  } else {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 200);
  }
}
type();

// ===== Floating Code Symbols =====
const codeSnippets = ["{ }", "< />", "=>", "&&", "||", "++", "!=", "===", "0x", "[]", "()", "::", "/*", "*/", "#!", ">>"];
const floatingContainer = document.getElementById("floating-icons");

for (let i = 0; i < 18; i++) {
  const span = document.createElement("span");
  span.className = "floating-code";
  span.textContent = codeSnippets[i % codeSnippets.length];
  span.style.left = Math.random() * 100 + "%";
  span.style.top = Math.random() * 100 + "%";
  span.style.fontSize = (10 + Math.random() * 8) + "px";
  span.style.animationDuration = (15 + Math.random() * 25) + "s";
  span.style.animationDelay = (Math.random() * -20) + "s";
  floatingContainer.appendChild(span);
}

// ===== Scroll Reveal =====
const revealElements = document.querySelectorAll(".scroll-hidden");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("scroll-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealElements.forEach(el => observer.observe(el));

// ===== Mobile Nav Toggle =====
const menuBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  menuOpen = !menuOpen;
  mobileMenu.style.display = menuOpen ? "block" : "none";
  menuIcon.innerHTML = menuOpen
    ? '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>'
    : '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
});

document.querySelectorAll("#mobile-menu a").forEach(a => {
  a.addEventListener("click", () => {
    menuOpen = false;
    mobileMenu.style.display = "none";
    menuIcon.innerHTML = '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
  });
});

// ===== CV Download =====
document.querySelectorAll(".cv-download").forEach(btn => {
  btn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "Lesego_Pitso_CV.pdf";
    link.download = "Lesego_Pitso_CV.pdf";
    link.click();
  });
});