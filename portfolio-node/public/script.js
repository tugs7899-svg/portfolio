// Reveal sections as they enter the viewport
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(
    ".about-grid, .module, .skill-block, .edu-card, .contact-card"
  );
  targets.forEach((el) => el.classList.add("reveal"));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach((el) => io.observe(el));

  // Stagger project cards slightly for a terminal "boot sequence" feel
  document.querySelectorAll(".module").forEach((el, i) => {
    el.style.transitionDelay = `${i * 70}ms`;
  });
});
