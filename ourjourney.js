// Scroll-based timeline activation
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".year-content");
  const timelineItems = document.querySelectorAll(".timeline li");
  const yearSelect = document.getElementById("yearSelect");
  const stickyHeader = document.querySelector('.site-header');
  const topBar = document.querySelector('.top-bar');
  const headerOffset = ((stickyHeader ? stickyHeader.offsetHeight : 0) + (topBar ? topBar.offsetHeight : 0) + 20);

  function setActive(year) {
    timelineItems.forEach((li) => {
      li.classList.toggle("active", li.getAttribute("data-year") === year);
    });
    if (yearSelect) {
      yearSelect.value = year;
    }
  }

  setActive("2001");

  timelineItems.forEach((li) => {
    li.addEventListener("click", (e) => {
      e.preventDefault();
      const year = li.getAttribute("data-year");
      const target = document.getElementById(year);
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: "smooth" });
        setActive(year);
      }
    });
  });

  if (yearSelect) {
    if (!yearSelect.options.length) {
      timelineItems.forEach((li) => {
        const y = li.getAttribute("data-year");
        const opt = document.createElement("option");
        opt.value = y;
        opt.textContent = y;
        yearSelect.appendChild(opt);
      });
    }
    yearSelect.addEventListener("change", () => {
      const y = yearSelect.value;
      const target = document.getElementById(y);
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: "smooth" });
        setActive(y);
      }
    });
  }

  if ("IntersectionObserver" in window) {
    let active = "2001";
    const observer = new IntersectionObserver(
      (entries) => {
        let best = { year: active, ratio: 0 };
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > best.ratio) {
            best = { year: entry.target.id, ratio: entry.intersectionRatio };
          }
        });
        if (best.year !== active) {
          active = best.year;
          setActive(active);
        }
      },
      { root: null, threshold: [0.1, 0.25, 0.5, 0.75, 1], rootMargin: "-30% 0px -40% 0px" }
    );
    sections.forEach((sec) => observer.observe(sec));
  } else {
    window.addEventListener(
      "scroll",
      () => {
        const center = window.scrollY + window.innerHeight * 0.5;
        let active = "2001";
        let dist = Infinity;
        sections.forEach((sec) => {
          const mid = sec.offsetTop + sec.offsetHeight / 2;
          const d = Math.abs(center - mid);
          if (d < dist) {
            dist = d;
            active = sec.id;
          }
        });
        setActive(active);
      },
      { passive: true }
    );
  }
});