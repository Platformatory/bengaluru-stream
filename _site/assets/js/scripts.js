document.addEventListener('DOMContentLoaded', () => {
    initHeroSlideshow();
    initTalksCarousel();
    initSponsorsCarousel();
    initNewsletter();
    initFooterYear();
    // initParticles(); // Uncomment if particles are enabled
});

// function initParticles() {
//     // Check if tsparticles is loaded
//     if (typeof tsParticles === 'undefined') {
//         console.error('tsParticles library not loaded');
//         return;
//     }

//     tsParticles.load("tsparticles", {
//         fpsLimit: 60,
//         fullScreen: { enable: false },
//         particles: {
//             number: {
//                 value: 50,
//                 density: {
//                     enable: true,
//                     area: 800
//                 }
//             },
//             color: {
//                 value: "#ffffff"
//             },
//             shape: {
//                 type: "circle"
//             },
//             opacity: {
//                 value: 0.5,
//                 random: true,
//                 animation: {
//                     enable: true,
//                     speed: 1,
//                     minimumValue: 0.1,
//                     sync: false
//                 }
//             },
//             size: {
//                 value: 3,
//                 random: true,
//                 animation: {
//                     enable: false,
//                     speed: 40,
//                     minimumValue: 0.1,
//                     sync: false
//                 }
//             },
//             lineLinked: {
//                 enable: true,
//                 distance: 150,
//                 color: "#48cae4", // Aqua color for links
//                 opacity: 0.4,
//                 width: 1
//             },
//             move: {
//                 enable: true,
//                 speed: 2,
//                 direction: "none",
//                 random: false,
//                 straight: false,
//                 outModes: {
//                     default: "out"
//                 },
//                 attract: {
//                     enable: false,
//                     rotateX: 600,
//                     rotateY: 1200
//                 }
//             }
//         },
//         interactivity: {
//             detectsOn: "canvas",
//             events: {
//                 onHover: {
//                     enable: true,
//                     mode: "grab"
//                 },
//                 onClick: {
//                     enable: true,
//                     mode: "push"
//                 },
//                 resize: true
//             },
//             modes: {
//                 grab: {
//                     distance: 140,
//                     lineLinked: {
//                         opacity: 1
//                     }
//                 },
//                 push: {
//                     particles_nb: 4
//                 }
//             }
//         },
//         detectRetina: true
//     });
//     // console.log('Particles initialized');
// }

function initHeroSlideshow() {
    const images = document.querySelectorAll('.hero-bg-image');

    if (images.length === 0) {
        return;
    }

    let currentIndex = 0;

    function rotateImages() {
        // Fade out current image
        images[currentIndex].classList.remove('active');

        // Move to next image
        currentIndex = (currentIndex + 1) % images.length;

        // Fade in next image
        images[currentIndex].classList.add('active');
    }

    // Rotate images every 30 seconds
    setInterval(rotateImages, 30000);
}

function initTalksCarousel() {
    const carousel = document.getElementById('talks-carousel');
    const leftBtn = document.getElementById('talks-scroll-left');
    const rightBtn = document.getElementById('talks-scroll-right');

    if (!carousel || !leftBtn || !rightBtn) {
        return;
    }

    // Manual scroll with buttons
    leftBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -620, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: 620, behavior: 'smooth' });
    });

    // Auto-scroll functionality
    let autoScrollInterval;
    let isUserScrolling = false;
    let scrollTimeout;

    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            if (!isUserScrolling) {
                const maxScroll = carousel.scrollWidth - carousel.clientWidth;

                if (carousel.scrollLeft >= maxScroll - 10) {
                    // Reset to start
                    carousel.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    // Scroll to next video
                    carousel.scrollBy({ left: 620, behavior: 'smooth' });
                }
            }
        }, 5000); // Auto-scroll every 5 seconds
    }

    // Pause auto-scroll when user manually scrolls
    carousel.addEventListener('scroll', () => {
        isUserScrolling = true;
        clearTimeout(autoScrollInterval); // Clear auto-scroll interval immediately
        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
            isUserScrolling = false;
            startAutoScroll(); // Restart auto-scroll after user stops scrolling
        }, 3000); // Resume auto-scroll 3 seconds after user stops scrolling
    });

    // Start auto-scroll
    startAutoScroll();
}

function initSponsorsCarousel() {
    const carousel = document.getElementById('sponsors-carousel');

    if (!carousel) {
        return;
    }

    // Duplicate logos for seamless infinite scroll
    const originalContent = carousel.innerHTML;
    carousel.innerHTML += originalContent;

    let scrollPosition = 0;

    function continuousScroll() {
        scrollPosition += 1; // Scroll 1px per frame
        carousel.scrollLeft = scrollPosition;

        // Reset position seamlessly when halfway through
        const maxScroll = carousel.scrollWidth / 2;
        if (scrollPosition >= maxScroll) {
            scrollPosition = 0;
            carousel.scrollLeft = 0;
        }
        requestAnimationFrame(continuousScroll);
    }

    // Start continuous scroll - never stops
    continuousScroll();

    // Initialize Center Focus Observer
    // We use a timeout to ensure the layout is settled after duplication
    setTimeout(() => {
        const observerOptions = {
            root: carousel,
            // Define a VERY narrow center zone to ensure only one item is highlighted at a time
            // 0px top, -48% right, 0px bottom, -48% left
            // This means the effective viewport for intersection is the middle 4%
            rootMargin: '0px -48% 0px -48%',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const target = entry.target;
                if (entry.isIntersecting) {
                    // Element is in the center zone
                    // Remove the inactive classes to make it look "active" (full color, opacity)
                    target.classList.remove('grayscale', 'opacity-60');
                    target.classList.add('grayscale-0', 'opacity-100');
                } else {
                    // Element is leaving the center zone
                    // Re-add the inactive classes
                    target.classList.add('grayscale', 'opacity-60');
                    target.classList.remove('grayscale-0', 'opacity-100');
                }
            });
        }, observerOptions);

        // Observe all children (logos)
        Array.from(carousel.children).forEach(child => {
            observer.observe(child);
        });
    }, 100);
}

function initNewsletter() {
    const form = document.getElementById('newsletter-form');
    const btn = document.getElementById('newsletter-btn');
    const emailInput = document.getElementById('newsletter-email');

    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = emailInput.value;
        const originalBtnText = btn.innerText;

        // Visual feedback
        btn.innerText = 'Subscribing...';
        btn.disabled = true;
        btn.classList.add('opacity-70', 'cursor-not-allowed');

        // HubSpot configuration
        const portalId = '244934895';

        // Wait for HubSpot to load, then use it to track the email
        const submitToHubSpot = () => {
            if (window.hbspt && window.hbspt.forms) {
                // Use HubSpot's built-in form tracking
                // This will automatically create/update the contact
                window._hsq = window._hsq || [];
                window._hsq.push(['identify', {
                    email: email
                }]);

                // Track the newsletter subscription event
                window._hsq.push(['trackEvent', {
                    id: 'Newsletter Subscription',
                    value: email
                }]);

                btn.innerText = 'Subscribed!';
                form.reset();

                setTimeout(() => {
                    btn.innerText = originalBtnText;
                    btn.disabled = false;
                    btn.classList.remove('opacity-70', 'cursor-not-allowed');
                }, 3000);
            } else {
                // HubSpot not loaded yet, try again
                setTimeout(submitToHubSpot, 100);
            }
        };

        submitToHubSpot();
    });
}

function initFooterYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}
