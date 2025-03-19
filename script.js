document.querySelectorAll('.navbar_item a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});


document.querySelectorAll('.progress').forEach((progress) => {
    const value = progress.getAttribute('data-value');
    progress.style.setProperty('--width', value);

    setTimeout(() => {
        progress.style.width = value;
    }, 200); // Small delay for the animation effect
});



// Add smooth scroll animation for cards
const portfolioItems = document.querySelectorAll('.portfolio-item');

function animateItems(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}

const itemObserver = new IntersectionObserver(animateItems, {
    threshold: 0.1
});

portfolioItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = 'translateY(300px)';
    item.style.transition = 'all 0.9s cubic-bezier(0.23, 1, 0.32, 1)';
    itemObserver.observe(item);
});

// Add click animation
portfolioItems.forEach(item => {
    item.addEventListener('click', function () {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'translateY(-10px)';
        }, 100);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");

    function animateProgress() {
        progressBars.forEach(bar => {
            const value = bar.getAttribute("data-value"); // Get percentage from data-value
            const sectionPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight - 100; // Adjust trigger point

            if (sectionPosition < screenPosition) {
                bar.style.width = value;
            }
        });
    }

    // Set data-value attributes for progress bars
    progressBars.forEach(bar => {
        if (bar.classList.contains("html")) bar.setAttribute("data-value", "90%");
        if (bar.classList.contains("css")) bar.setAttribute("data-value", "80%");
        if (bar.classList.contains("js")) bar.setAttribute("data-value", "70%");
        if (bar.classList.contains("react")) bar.setAttribute("data-value", "65%");
        if (bar.classList.contains("bootstrap")) bar.setAttribute("data-value", "75%");
    });

    window.addEventListener("scroll", animateProgress);
    animateProgress(); // Run once on page load in case already in view
});

