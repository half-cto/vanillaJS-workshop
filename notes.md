# You Might Not Need Library

### Front End Masters Workshop

---

## DOM

-   Each element is represented by and object of **HTMLElement** interface or other interface that inherits it

-   They have instance properties and methods

-   Changes in properties or children will trigger updates in the user interface **when you release the thread** ('when the funcion ends / event handler finishes')

Select elements from the DOM by

-   ID
-   Class Name
-   Name
-   CSS Selector
-   Navigating DOM structure

When selecting element, some functions return

-   One HTML Element (HTMLElement)
-   **Live** Element Collection (HTMLCollection)
-   **Static** Element Collection (NodeList)

Fn to get a referenct to one DOM element

-   `getElementById`
-   `querySelector` (return first element matching CSS selector)
-   both functions will return `null` if element is not found!

Fn to get multiple DOM elements (not full list)

-   `getElementsByTagName`
-   `getElementsByClassName`
-   `querySelectorAll()` returns static collection
-   `getElementsByName`
-   functions can return empty collections!
-   HTMLCollections (live) don't have modern Array interface (filter, map reduce or forEach)
-   you can add modern array functions to HTMLCollection by creating a Array from it using `Array.from(collection)`

```{
  const elements = Array.from(document.getElementsByClassName("important"));
  elements.filter(e => e.tagName==="p");
}
```

**!** for improved perfomance **narrow down scope** of queries for DOM elemtens where possible

`npx serve .` - is used to start a static server in your current directory.

```
fucntion eventHandler(event) {}

const options = {
  once: true,
  passive: true
}

element.addEventListener("load", eventHandler, options);
```

options.once - if true will execute eventListener once and remove it

# Making aliases and adding custom properties/method to HTMLElement

```
const $ = () => document.querySelector.call(this, arguments);
const $$ = () => document.querySelectorAll.call(this, arguments);
HTMLElement.prototype.on = (a, b, c) => this.addEventListener(a, b, c);
HTMLElement.prototype.off = (a, b) => this.removeEventListener(a, b);
HTMLElement.prototype.$ = (s) => this.querySelector(s);
HTMLElement.prototype.$$ = (s) => this.querySelectorAll(s);
```

**!!!** For SPA - you need to configure server to **forward** every request to index.html

getting href

```
        a.addEventListener('click', (event) => {
            document.querySelectorAll('a.navlink').forEach((a) => {
                event.preventDefault();
                const url1 = a.href; // returns full URL
                const url2 = a.getAttribute('href'); // returns only pahtname, what's in the attribute

                const url3 = event.target.href;
                const url4 = event.target.getAttribute('href');
            });
        });
```

`pageElement.dataset.id = paramId;`
 This line is setting a custom data attribute data-id on the pageElement. The dataset property on an HTMLElement is used to read, write, or delete custom data attributes (data-*). The value of data-id is set to paramId. This is equivalent to <h1 data-id="paramId">Details</h1> in HTML.
