window.addEventListener('scroll', () => {
    const paragraphs = document.querySelectorAll('.color-change');

    paragraphs.forEach(paragraph => {
        const rect = paragraph.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            paragraph.classList.add('color-activated');
        } else {
            paragraph.classList.remove('color-activated');
        }
    });
});
