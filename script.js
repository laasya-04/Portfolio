// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function (e) {

    const href = this.getAttribute('href');

    if (href !== '#') {

      e.preventDefault();

      const target = document.querySelector(href);

      if (target) {

        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

      }
    }
  });
});


// Fade in animation

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};


const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.style.animation =
        'fadeInUp 0.6s ease-out forwards';

      observer.unobserve(entry.target);
    }

  });

}, observerOptions);


document.querySelectorAll(
  'section, .project-card, .cert-item'
).forEach(el => {

  observer.observe(el);

});