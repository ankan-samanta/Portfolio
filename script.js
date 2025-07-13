// // var typed = new Typed(".multiple-text", {
// //     strings: ["Frontend Developer...", "Student...", "Learner..."],
// //     typeSpeed: 50,       // Speed of typing
// //     backSpeed: 50,       // Speed of backspacing
// //     backDelay: 1000,      // Delay before starting to backspace
// //     loop: true             // Loop the animation
// // });
// // const observer = new IntersectionObserver(entries => {
// //   entries.forEach(entry => {
// //     if (entry.isIntersecting) {
// //       entry.target.classList.add('visible');
// //     }
// //   });
// // }, { threshold: 0.2 });

// // observer.observe(document.querySelector('.skills-section'));
// // const serviceObserver = new IntersectionObserver(entries => {
// //   entries.forEach(entry => {
// //     if (entry.isIntersecting) {
// //       entry.target.classList.add('visible');
// //     }
// //   });
// // }, { threshold: 0.2 });

// // serviceObserver.observe(document.querySelector('.services'));
// // const projectsObserver = new IntersectionObserver(entries => {
// //   entries.forEach(entry => {
// //     if (entry.isIntersecting) {
// //       entry.target.classList.add('visible');
// //     }
// //   });
// // }, { threshold: 0.2 });

// // projectsObserver.observe(document.querySelector('.projects'));
// // const contactObserver = new IntersectionObserver(entries => {
// //   entries.forEach(entry => {
// //     if (entry.isIntersecting) {
// //       entry.target.classList.add('visible');
// //     }
// //   });
// // }, { threshold: 0.2 });

// // contactObserver.observe(document.querySelector('.contact'));

// // Typed.js animation
// var typed = new Typed(".multiple-text", {
//   strings: ["Frontend Developer...", "Student...", "Learner..."],
//   typeSpeed: 50,
//   backSpeed: 50,
//   backDelay: 1000,
//   loop: true
// });

// // Intersection animations
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("visible");
//     }
//   });
// }, { threshold: 0.2 });

// // Observe animated sections
// const sectionsToObserve = [
//   document.querySelector(".skills-section"),
//   document.querySelector(".services"),
//   document.querySelector(".projects"),
//   document.querySelector(".contact")
// ];

// sectionsToObserve.forEach(section => {
//   if (section) observer.observe(section);
// });

// // Hamburger menu toggle
// document.querySelector('.menu-toggle').addEventListener('click', () => {
//   document.querySelector('.navbar').classList.toggle('active');
// });

// // Scroll Spy - highlight nav links based on scroll position
// const sections = document.querySelectorAll("section[id]");
// const navLinks = document.querySelectorAll(".navbar a");

// window.addEventListener("scroll", () => {
//   let currentSection = "";
//   sections.forEach(section => {
//     const sectionTop = section.offsetTop - 100;
//     if (window.scrollY >= sectionTop) {
//       currentSection = section.getAttribute("id");
//     }
//   });

//   navLinks.forEach(link => {
//     link.classList.remove("active");
//     if (link.getAttribute("href").includes(currentSection)) {
//       link.classList.add("active");
//     }
//   });
// });
// Typed.js animation
var typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer...", "Student...", "Learner..."],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

// Intersection animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

observer.observe(document.querySelector('.skills-section'));

const serviceObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

serviceObserver.observe(document.querySelector('.services'));

const projectsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

projectsObserver.observe(document.querySelector('.projects'));

const contactObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

contactObserver.observe(document.querySelector('.contact'));


// NEW: Scroll-based active navbar link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let currentPos = window.scrollY;

  sections.forEach((section) => {
    let sectionTop = section.offsetTop - 200; // adjust if needed for header
    let sectionHeight = section.offsetHeight;
    let sectionId = section.getAttribute("id");

    if (currentPos >= sectionTop && currentPos < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(sectionId)) {
          link.classList.add("active");
        }
      });
    }
  });
});

