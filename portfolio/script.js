let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY>100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Footer current year
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Dark/Light Mode Toggle
const themeToggle = document.querySelector('#theme-toggle');
const icon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

themeToggle.onclick = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
};

function updateThemeIcon(theme) {
    icon.className = theme === 'light' ? 'bx bx-sun' : 'bx bx-moon';
}

// // Contact Form Handling
// const contactForm = document.getElementById('contact-form');
// const formStatus = document.getElementById('form-status');

// contactForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const formData = new FormData(contactForm);
//     formStatus.textContent = 'Sending...';
//     formStatus.style.color = 'var(--main-color)';

//     // Post to FormSubmit via the AJAX endpoint so the page doesn't reload
//     try {
//         const response = await fetch('https://formsubmit.co/ajax/el/zanoda', {
//             method: 'POST',
//             headers: { 'Accept': 'application/json' },
//             body: formData,
//         });

//         // try to parse JSON safely
//         let result = {};
//         try {
//             result = await response.json();
//         } catch (parseErr) {
//             // ignore parse error, we'll use response.ok below
//         }

//         if (response.ok) {
//             formStatus.textContent = 'Message sent successfully! Check your inbox.';
//             formStatus.style.color = 'green';
//             contactForm.reset();
//         } else {
//             throw new Error(result.message || 'Failed to send');
//         }
//     } catch (err) {
//         console.error('Form submit error:', err);
//         formStatus.textContent = 'Error sending message. Please try again.';
//         formStatus.style.color = 'red';
//     } finally {
//         setTimeout(() => { formStatus.textContent = ''; }, 6000);
//     }
// });

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);

  formStatus.textContent = 'Sending...';
  formStatus.style.color = 'var(--main-color)';

  try {
    const res = await fetch('https://formspree.io/f/xvgewwgj', {
      method: 'POST',
      headers: {
        'Accept': 'application/json' // ask Formspree for JSON response
      },
      body: formData // do NOT set Content-Type manually when sending FormData
    });

    // parse JSON if possible (Formspree returns JSON on Accept: application/json)
    let json = {};
    try { json = await res.json(); } catch (err) { /* ignore parse error */ }

    if (res.ok) {
      formStatus.textContent = 'Message sent successfully! Check your inbox.';
      formStatus.style.color = 'green';
      contactForm.reset();
    } else {
      // show server-side validation errors if provided
      const message = (json && json.errors && json.errors.length)
        ? json.errors.map(e => e.message).join(', ')
        : (json && json.error) || 'Failed to send';
      throw new Error(message);
    }
  } catch (err) {
    console.error('Formspree submit error:', err);
    formStatus.textContent = 'Error sending message. Please try again.';
    formStatus.style.color = 'red';
  } finally {
    setTimeout(() => { formStatus.textContent = ''; }, 6000);
  }
});


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate skills progress bars on scroll
const skillBoxes = document.querySelectorAll('.skill-box');

const animateSkills = () => {
    skillBoxes.forEach(box => {
        const progressBar = box.querySelector('.progress-bar');
        const percentage = progressBar.style.width;
        progressBar.style.width = '0';
        
        setTimeout(() => {
            progressBar.style.width = percentage;
        }, 100);
    });
};

// Intersection Observer for skills animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillBoxes.forEach(box => observer.observe(box));