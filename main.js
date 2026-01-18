// Basic interactivity
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Theme Toggle on Logo Click
    const logos = document.querySelectorAll('.logo');
    logos.forEach(logo => {
        logo.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');

            // Show toast feedback
            const toast = document.getElementById('toast');
            if (toast) {
                const isDark = document.body.classList.contains('dark-theme');
                toast.innerText = isDark ? "Dark Mode Activated" : "Light Mode Activated";
                toast.classList.add('show');
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 2000);
            }
        });
    });

    // Simple Theme Toggle (Sync with logo click)
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const icon = themeToggle.querySelector('i');
            if (document.body.classList.contains('dark-theme')) {
                icon.classList.replace('fa-moon', 'fa-sun');
            } else {
                icon.classList.replace('fa-sun', 'fa-moon');
            }
        });
    }

    // Back to Top Visibility
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const resumeBtn = document.getElementById('resumeBtn');
    const toast = document.getElementById('toast');

    if (resumeBtn) {
        resumeBtn.addEventListener('click', () => {
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        });
    }

    // Contact Form Handler
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=pruthviraj.bansode30@gmail.com&su=Message from ${name}&body=From: ${name} (${email})%0D%0A%0D%0A${message}`;

            window.open(mailtoUrl, '_blank');
        });
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-bottom');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Certificate Modal Logic
    const modal = document.getElementById("certificateModal");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("modalCaption");
    const certCards = document.querySelectorAll(".certificate-card");

    certCards.forEach(card => {
        card.style.cursor = "pointer";
        card.addEventListener("click", function () {
            const img = this.querySelector(".cert-img");
            const title = this.querySelector("h3").innerText;
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.innerHTML = title;
            document.body.style.overflow = "hidden"; // Prevent scrolling
        });
    });

    const closeBtn = document.querySelector(".modal-close");
    if (closeBtn) {
        closeBtn.onclick = function () {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        };
    }

    // Close modal when clicking outside the image
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    };
});

