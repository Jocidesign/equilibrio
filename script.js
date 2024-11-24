// JavaScript to handle smooth scrolling of section numbers
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollNumbers = document.querySelectorAll('.scroll-number');

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const scrollNumber = scrollNumbers[index];

        if (rect.top <= 0 && rect.bottom > 0) {
            scrollNumber.style.color = '#000';
        } else {
            scrollNumber.style.color = '#ccc';
        }
    });
});
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Impede o comportamento padrão de navegação

        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth' // Rola suavemente
            });
        }
    });
});
