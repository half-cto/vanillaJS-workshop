import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';

// * creating a global objects
window.app = {};
app.store = Store;
app.router = Router;

// * wait for DOM to be loaded before manipulation
window.addEventListener('DOMContentLoaded', () => {
    loadData();
    app.router.init();
});

console.log(app);
