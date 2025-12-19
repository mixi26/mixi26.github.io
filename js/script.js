function toggleContactMe(action) {
    const pane = document.getElementById('contact-me-pane');
    
    if (action === 'show') {
        pane.classList.remove('hidden');
        setTimeout(() => {
            pane.classList.remove('contact-me-inactive');
            pane.classList.add('contact-me-active');
        }, 20);
        document.body.style.overflow = 'hidden'; 
    } else {
        pane.classList.remove('contact-me-active');
        pane.classList.add('contact-me-inactive');
        setTimeout(() => {
            pane.classList.add('hidden');
        }, 500);
        document.body.style.overflow = 'auto';
    }
}

function toggleMobileNav() {
    const nav = document.getElementById('mobile-nav');
    if (nav.classList.contains('hidden')) {
        nav.classList.remove('hidden');
        nav.classList.add('flex');
    } else {
        nav.classList.add('hidden');
        nav.classList.remove('flex');
    }
}
