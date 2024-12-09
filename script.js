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