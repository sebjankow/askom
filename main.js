// Rok w stopce (2005 - bieżący rok)
(function () {
    const startYear = 2005;
    const currentYear = new Date().getFullYear();
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = currentYear === startYear ? String(startYear) : `${startYear}–${currentYear}`;
    }

    // Menu mobilne
    const menuBtn = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    if (!menuBtn || !navList) return;

    function setMenu(open) {
        navList.classList.toggle('active', open);
        menuBtn.classList.toggle('open', open);
        menuBtn.setAttribute('aria-expanded', String(open));
        menuBtn.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
    }

    menuBtn.addEventListener('click', () => setMenu(!navList.classList.contains('active')));
    document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
})();
