/**
 * Geylani Tarım - Shared JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Logic
    const menuBtn = document.querySelector('header button.md\\:hidden');
    const nav = document.querySelector('header nav');

    if (menuBtn && nav) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            nav.classList.toggle('hidden');
            nav.classList.toggle('absolute');
            nav.classList.toggle('top-full');
            nav.classList.toggle('left-0');
            nav.classList.toggle('w-full');
            nav.classList.toggle('bg-white');
            nav.classList.toggle('dark:bg-background-dark');
            nav.classList.toggle('flex');
            nav.classList.toggle('flex-col');
            nav.classList.toggle('p-6');
            nav.classList.toggle('border-b');
            nav.classList.toggle('border-neutral-100');
            nav.classList.toggle('dark:border-neutral-800');
            nav.classList.toggle('z-50');
            nav.classList.toggle('shadow-xl');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !menuBtn.contains(e.target) && !nav.classList.contains('hidden')) {
                nav.classList.add('hidden');
                nav.classList.remove('absolute', 'top-full', 'left-0', 'w-full', 'bg-white', 'dark:bg-background-dark', 'flex', 'flex-col', 'p-6', 'border-b', 'border-neutral-100', 'dark:border-neutral-800', 'z-50', 'shadow-xl');
            }
        });

        // Close menu when clicking a link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.add('hidden');
                nav.classList.remove('absolute', 'top-full', 'left-0', 'w-full', 'bg-white', 'dark:bg-background-dark', 'flex', 'flex-col', 'p-6', 'border-b', 'border-neutral-100', 'dark:border-neutral-800', 'z-50', 'shadow-xl');
            });
        });
    }

    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('shadow-md');
        } else {
            header.classList.remove('shadow-md');
        }
    });
});
