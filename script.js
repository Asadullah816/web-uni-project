const nav = document.querySelector('.nav-container');
window.addEventListener('scroll', function (e) {
    if (window.scrollY > 10) {
        nav.classList.add('show-nav');
    }
    else {
        nav.classList.remove('show-nav')
    }
})
// ============== ACCORDION =================
const accBtn = document.querySelectorAll('.acc-btn');
const acc = document.querySelectorAll('.accordion-question');
accBtn.forEach(e => {
    e.addEventListener('click', function (b) {
        acc.forEach(ac => {
            ac.classList.remove('show-accordion')
        });
        e.closest('.accordion-question').classList.add('show-accordion');
    })
})