
document.querySelectorAll('.libro').forEach(card => {
    card.querySelector('button').addEventListener('click', () => {
        const url = card.getAttribute('data-url');
        window.open(url, '_blank');
    });
});
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
