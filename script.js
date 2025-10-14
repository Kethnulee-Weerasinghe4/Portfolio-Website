/* -------------------- HOME -------------------- */
const roles = ['#role1', '#role2', '#role3'].map(s => document.querySelector(s));
const rolesTl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });

roles.forEach(r => {
  rolesTl.to(r, { duration: 1, opacity: 1, ease: 'power3.out' })
    .to(r, { duration: 1, opacity: 0, ease: 'power3.in' }, "+=1");
});

gsap.to('#introP', { duration: 3, opacity: 1, delay: 1, ease: 'power3.out' });

const menuIcon = document.getElementById('menuIcon');
const fullscreenMenu = document.getElementById('fullscreenMenu');
const closeBtn = document.getElementById('closeBtn');

menuIcon.addEventListener('click', () => {
  fullscreenMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  fullscreenMenu.classList.remove('active');
});


/* -------------------- ABOUT -------------------- */
gsap.registerPlugin(ScrollTrigger);

gsap.to(".about-title", {
  autoAlpha: 1,
  y: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: "#about"
});

gsap.utils.toArray(".about-text").forEach((p, i) => {
  gsap.to(p, {
    autoAlpha: 1,
    y: 0,
    duration: 1,
    delay: i * 0.3,
    ease: "power3.out",
    scrollTrigger: "#about"
  });
});

const techs = [
  "C#", ".NET", "Angular", "HTML", "CSS", "JavaScript", "TypeScript",
  "React", "Tailwind", "SQL", "Next.js", "Node.js", "Express"
];

const container = document.getElementById("blockAnimation");

if (container) {
  container.innerHTML = "";

  techs.forEach(t => {
    const b = document.createElement("div");
    b.className = "block";
    b.textContent = t;
    b.style.visibility = "hidden";
    container.appendChild(b);
  });

  const blocks = gsap.utils.toArray(".block");
  const spacingY = 55;
  const centerX = 0;
  const baseY = 420;

  blocks.forEach((block, index) => {
    gsap.set(block, {
      x: centerX,
      y: baseY - index * spacingY,
      autoAlpha: 0,
      scale: 0.9
    });
  });

  const buildTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "top 65%",
      once: true
    }
  });

  buildTl.to(blocks, {
    autoAlpha: 1,
    y: "-=15",
    stagger: 0.15,
    duration: 0.6,
    ease: "back.out(1.7)"
  });

  buildTl.to(blocks, {
    y: "+=4",
    repeat: 2,
    yoyo: true,
    duration: 0.2,
    ease: "sine.inOut"
  });

  const collapseTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "bottom 90%",
      end: "bottom top",
      scrub: 1,
    }
  });

  collapseTl.to(blocks, {
    y: i => "+=" + (350 + i * 25),
    x: i => (Math.random() - 0.5) * 600,
    rotation: () => Math.random() * 720 - 360,
    scale: () => 0.8 + Math.random() * 0.4,
    ease: "power3.out",
    duration: 2,
    stagger: 0.08
  });
}


/* -------------------- SKILLS -------------------- */
gsap.registerPlugin(ScrollTrigger);

gsap.from(".skills-title", {
  scrollTrigger: {
    trigger: "#skills",
    start: "top 85%"
  },
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power3.out"
});

gsap.utils.toArray(".skill-item").forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: "#skills",
      start: "top 80%"
    },
    opacity: 0,
    y: 50,
    duration: 0.6,
    delay: i * 0.1,
    ease: "power3.out"
  });
});


/* -------------------- PROJECTS -------------------- */
const projectCards = gsap.utils.toArray(".project-card");

gsap.from(projectCards, {
  scrollTrigger: {
    trigger: "#projects",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 50,
  scale: 0.9,
  stagger: 0.2,
  duration: 0.8,
  ease: "back.out(1.7)"
});

projectCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      scale: 1.05,
      y: -5,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      duration: 0.3,
      ease: "power2.out"
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      scale: 1,
      y: 0,
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      duration: 0.3,
      ease: "power2.inOut"
    });
  });
});


/* -------------------- EDUCATION -------------------- */
gsap.from(".timeline-line", {
  scrollTrigger: {
    trigger: "#education",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  scaleY: 0,
  transformOrigin: "top center",
  duration: 1.2,
  ease: "power3.out"
});

const timelineItems = gsap.utils.toArray(".timeline-item");

timelineItems.forEach((item, i) => {
  const direction = i % 2 === 0 ? -60 : 60;
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 90%"
    },
    x: direction,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out"
  });
});


/* -------------------- CONTACT -------------------- */
gsap.to(".contact-container", {
  scrollTrigger: {
    trigger: "#education",
    start: "bottom 85%",
    toggleActions: "play none none none"
  },
  opacity: 1,
  y: 0,
  duration: 1.5,
  ease: "power3.out"
});

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    formStatus.textContent = "Sending...";
    formStatus.style.color = "#aaa";

    const formData = new FormData(contactForm);
    formData.append("access_key", "51a525ab-d9aa-41b2-a365-821edc78d58b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        formStatus.textContent = "Message sent successfully!";
        formStatus.style.color = "#00ffcc";
        contactForm.reset();

        gsap.fromTo(
          formStatus,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        );
      } else {
        formStatus.textContent = "Error: " + (data.message || "Please try again.");
        formStatus.style.color = "#ff4444";
      }
    } catch (error) {
      formStatus.textContent = "Network error. Try again later.";
      formStatus.style.color = "#ff4444";
    }
  });
}


/* -------------------- FOOTER -------------------- */
gsap.from(".footer-section", {
  scrollTrigger: {
    trigger: "#contact",
    start: "bottom 80%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  duration: 1,
  y: 50,
  ease: "power2.out"
});


