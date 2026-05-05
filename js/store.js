export class CartStore {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('urbanthread_cart')) || [];
        this.listeners = [];
    }

    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    notify() {
        localStorage.setItem('urbanthread_cart', JSON.stringify(this.items));
        this.listeners.forEach(listener => listener(this.items));
        this.updateCartBadges();
    }

    addItem(product, size, quantity = 1) {
        const existingItem = this.items.find(i => i.id === product.id && i.size === size);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ ...product, size, quantity });
        }
        this.notify();
    }

    removeItem(id, size) {
        this.items = this.items.filter(i => !(i.id === id && i.size === size));
        this.notify();
    }

    updateQuantity(id, size, quantity) {
        const item = this.items.find(i => i.id === id && i.size === size);
        if (item) {
            item.quantity = quantity;
            if (item.quantity <= 0) {
                this.removeItem(id, size);
            } else {
                this.notify();
            }
        }
    }

    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    updateCartBadges() {
        const count = this.getTotalItems();
        document.querySelectorAll('.cart-badge').forEach(badge => {
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        });
    }
}

export const cart = new CartStore();
