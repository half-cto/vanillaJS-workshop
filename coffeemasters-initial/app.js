import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';

// Link Web Components
import { MenuPage } from './components/MenuPage.js';
import { DetailsPage } from './components/DetailsPage.js';
import { OrderPage } from './components/OrderPage.js';
import ProductItem from './components/ProductItem.js';
import CartItem from './components/CartItem.js';

// * creating a global objects
window.app = {};
app.store = Store;
app.router = Router;

// * wait for DOM to be loaded before manipulation
window.addEventListener('DOMContentLoaded', () => {
    loadData();
    app.router.init();
});

window.addEventListener('appcartchange', (event) => {
    const badge = document.getElementById('badge');
    const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);
    badge.textContent = qty;
    badge.hidden = qty == 0;
});
