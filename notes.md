# You Might Not Need Library

### Front End Masters Workshop

---

## DOM

-   Each element is represented by and object of **HTMLElement** interface or other interface that inherits it

-   They have instance properties and methods

-   Changes in properties or children will trigger updates in the user interface **when you release the thread** ('when the funcion ends / event handler finishes')

Select elements from the DOM by
- ID
- Class Name
- Name
- CSS Selector
- Navigating DOM structure

When selecting element, some functions return
- One HTML Element (HTMLElement)
- **Live** Element Collection (HTMLCollection)
- **Static** Element Collection (NodeList)

Fn to get a referenct to one DOM element
  - `getElementById` 
  - `querySelector` (return first element matching CSS selector)
  - both functions will return `null` if element is not found!

Fn to get multiple DOM elements (not full list)
  - `getElementsByTagName`
  - `getElementsByClassName`
  - `querySelectorAll()` returns static collection
  - `getElementsByName`
  - functions can return empty collections!
  - HTMLCollections (live) don't have modern Array interface (filter, map reduce or forEach)
  - you ==can add modern array functions== to HTMLCollection by creating a Array from it using `Array.from(collection)`

```{ 
  const elements = Array.from(document.getElementsByClassName("important"));
  elements.filter(e => e.tagName==="p");
}```