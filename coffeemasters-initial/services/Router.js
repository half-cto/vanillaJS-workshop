const Router = {
    init: () => {
        document.querySelectorAll('a.navlink').forEach((a) => {
            a.addEventListener('click', (event) => {
                event.preventDefault();
                // const url1 = event.target.href;
                const url = event.target.getAttribute('href');
                Router.go(url);
            });
        });
        // Event Hanler for URL changes
        window.addEventListener('popstate', (event) => {
            Router.go(event.state.route, false);
        });
        // Check the initial URL
        Router.go(location.pathname);
    },
    go: (route, addToHistory = true) => {
        console.log(`Going to ${route}`);

        if (addToHistory) {
            history.pushState({ route }, '', route);
        }

        let pageElement = null;
        switch (route) {
            case '/':
                pageElement = document.createElement('h1');
                pageElement.textContent = 'Menu';
                break;
            case '/order':
                pageElement = document.createElement('h1');
                pageElement.textContent = 'Your order';
                break;
            default:
                if (route.startsWith('/product-')) {
                    pageElement = document.createElement('h1');
                    pageElement.textContent = 'Details';
                    const paramId = route.substring(route.lastIndexOf('-') + 1);
                    // * next line seting custom property on HTMLElement
                    pageElement.dataset.id = paramId;
                }
        }
        if (pageElement) {
            // document.querySelector("main").children[0].remove(); // another way of clearing elements
            const cache = document.querySelector('main');
            cache.innerHTML = '';
            cache.appendChild(pageElement);
            window.scrollX = 0;
            window.scrollY = 0;
        }
    },
};

export default Router;
