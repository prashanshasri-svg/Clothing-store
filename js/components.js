import { cart } from './store.js';

export function renderNavbar(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const path = window.location.pathname;
    
    container.innerHTML = `
        <header class="fixed top-0 left-0 right-0 z-50 bg-surface dark:bg-surface-container-lowest shadow-[0px_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300">
            <nav class="flex justify-between items-center w-full px-margin py-md max-w-7xl mx-auto">
                <a href="index.html" class="font-headline-md text-headline-md font-bold tracking-tight text-primary dark:text-primary-fixed hover:opacity-80 transition-opacity">UrbanThread</a>
                
                <div class="hidden md:flex items-center gap-xl">
                    <a class="${path.includes('shop') ? 'text-primary dark:text-primary-fixed border-b-2 border-secondary' : 'text-on-surface-variant dark:text-surface-variant hover:text-secondary dark:hover:text-secondary-fixed'} pb-1 font-label-sm text-label-sm transition-all duration-300" href="shop.html">Shop</a>
                    <a class="text-on-surface-variant dark:text-surface-variant pb-1 font-label-sm text-label-sm hover:text-secondary dark:hover:text-secondary-fixed transition-all duration-300" href="shop.html">Men</a>
                    <a class="text-on-surface-variant dark:text-surface-variant pb-1 font-label-sm text-label-sm hover:text-secondary dark:hover:text-secondary-fixed transition-all duration-300" href="shop.html">Women</a>
                    <a class="${path.includes('about') ? 'text-primary dark:text-primary-fixed border-b-2 border-secondary' : 'text-on-surface-variant dark:text-surface-variant hover:text-secondary dark:hover:text-secondary-fixed'} pb-1 font-label-sm text-label-sm transition-all duration-300" href="about.html">About</a>
                </div>
                
                <div class="flex items-center gap-lg relative">
                    <button class="scale-95 hover:scale-105 active:scale-90 transition-transform"><span class="material-symbols-outlined text-primary" data-icon="search">search</span></button>
                    <button class="scale-95 hover:scale-105 active:scale-90 transition-transform"><span class="material-symbols-outlined text-primary" data-icon="person">person</span></button>
                    <a href="cart.html" class="relative scale-95 hover:scale-105 active:scale-90 transition-transform flex items-center">
                        <span class="material-symbols-outlined text-primary" data-icon="shopping_bag">shopping_bag</span>
                        <span class="cart-badge absolute -top-1 -right-2 bg-secondary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center" style="display: none;">0</span>
                    </a>
                </div>
            </nav>
        </header>
    `;

    // Initialize cart badge
    cart.updateCartBadges();
}

export function renderFooter(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
        <footer class="bg-surface-container-low dark:bg-tertiary-container w-full rounded-none mt-auto">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-lg w-full px-margin py-xxl max-w-7xl mx-auto">
                <div class="md:col-span-5">
                    <div class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed mb-md">UrbanThread</div>
                    <p class="text-on-surface-variant dark:text-on-tertiary-fixed-variant font-body-md max-w-sm mb-lg">
                        © 2026 UrbanThread. Consciously crafted for the urban landscape.
                    </p>
                </div>
                <div class="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-lg">
                    <div class="flex flex-col gap-sm">
                        <span class="font-label-sm text-label-sm uppercase tracking-wider text-primary mb-xs">Shop</span>
                        <a class="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-body-md" href="shop.html">New Arrivals</a>
                        <a class="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-body-md" href="shop.html">Collections</a>
                    </div>
                    <div class="flex flex-col gap-sm">
                        <span class="font-label-sm text-label-sm uppercase tracking-wider text-primary mb-xs">Support</span>
                        <a class="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-body-md" href="#">Contact</a>
                        <a class="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-body-md" href="#">FAQ</a>
                    </div>
                    <div class="flex flex-col gap-sm">
                        <span class="font-label-sm text-label-sm uppercase tracking-wider text-primary mb-xs">About</span>
                        <a class="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-body-md" href="about.html">Our Story</a>
                    </div>
                </div>
            </div>
        </footer>
    `;
}

export function setupCommonElements() {
    renderNavbar('navbar-container');
    renderFooter('footer-container');
}
