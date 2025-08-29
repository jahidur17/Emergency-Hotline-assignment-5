### 6. Answer the following questions clearly:
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

(1.) ans.
1.getElementById
Purpose: Selects one element by its ID.
Returns: A single element (not an array or list).
ID must be unique in the page..

2.getElementsByClassName
Purpose: Selects all elements that have a specific class.
Returns: An HTMLCollection. like an array but not exactly an array
HTMLCollection updates live if the DOM changes.

3.querySelector and querySelectorAll
Purpose: Select elements using CSS selectors (IDs, classes, attributes, etc.).
querySelector → Returns first matching element.

(2)ans.
const newNav = document.createElement("nav");
newNav.textContent = "Hello!";
newNav.classList.add("my-class");
const parent = document.getElementById("container");
parent.appendChild(newNav);
// or
parent.prepend(newNav);

(3)ans
You click or trigger an event on a child element.
The event is first handled by the target element.
Then the event bubbles up to each parent element in order, triggering any matching event listeners along the way.

(4)ans
Definition: Event delegation is a technique where instead of adding event listeners to many child elements, we add a single event listener to their parent element and use event bubbling to handle events.the event delegation is very useful.

(5)ans
preventDefault().
Definition: Prevents the default browser action of an event.Stops default browser behavior
stopPropagation().
Stops the event from bubbling (or capturing) up to parent elements.Stops event flow to parent elements.
so there are two element are important the browser..