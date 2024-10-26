console.log ('Intro to the DOM');

// // getElementById()
// // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

// let titleElement = document.getElementById('title');

// console.log(titleElement);

// // https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
// // innerHTML is a method element. 

// titleElement.innerHTML = 'Hello';

// // Query Selector method on document
// // Will only return one thing.

// let grabTitleAgain = document.querySelector("#title");

// let button = document.querySelector(".button");

// let listLi = document.querySelector(".text");

// let listLiAll = document.querySelectorAll(".text");

// console.log(grabTitleAgain);

// console.log(grabTitleAgain);

// // getElementsByClassName  method on document

// let classElements = document.getElementsByClassName("text");

// console.log(classElements);

// // getElementsByTagName method on document

// let imgElements = document.getElementsByTagName("img");

// console.log(imgElements);

// console.log(imgElements[0]);

// // text content //

// // differences between innerText, innerHTML, textContent
// // https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#differences_from_innertext

// // createElement()
// // When creating an element, it does not actually get added to the dom. 
// // Workflow - Create Document, Add Content, Add to DOM.

// let elementH1 = document.createElement("h1");

// console.log(elementH1);

// elementH1.textContent ="This is the H1 that we are adding to the DOM";

// console.log(elementH1);

// // We want to assign to the body, so we create a variable to get body. 

// let bodyElement = document.querySelector('body');

// bodyElement.appendChild(elementH1);

// // Now we will change the style. In the example we will center the text of H!

// elementH1.style.textAlign = 'center';
// console.log();

// // Selecting Multiple Elements: 

// let ulElements = document.querySelectorAll('li');

// console.log(ulElements);

// ulElements.forEach((listElement) => {
//     listElement.style.fontSize = '30px' ;
//     console.log(listElement.textContent);
// });

// // remove elements from the dom. this is on element.
// // https://developer.mozilla.org/en-US/docs/Web/API/Element/remove

// let ulList = document.querySelector("#unordered-list");

// // console.log(ulList);

// // ulList.remove();

// // to get all attributes
// console.log(button.attributes);

// console.log(button.getAttribute('name'));

// // setting an attribute. Take two args. Current name and previous. 
// button.setAttribute('name', 'helloButton');
// console.log(button);

// // This adds the attribute if it doesnt exist
// button.setAttribute("disabled", "");
// console.log(button);

// // if an element has an attribute.

// console.log(button.hasAttribute("disabled"))


// if (button.hasAttribute('disabled') === true) {
//     button.removeAttribute('disabled');
// };

// // class list API. element.classList

// // to see the class list 
// console.log(button.classList);
// // to add to the class list. 
// button.classList.add('Hyacinth');

// console.log(button.classList);

// // to remove a class

// button.classList.remove('button');

// console.log(button.classList);

// button.classList.replace('Hyacinth', 'button');

// console.log(button.classList);

// // toggle. used to change the style of an element. 
// // ex. 

// button.classList.toggle("purple")

const titleElement = document.querySelector('#main-title'); // creating a cached element ref containing the <h1> element with the id main-title'

console.dir(titleElement);

const paragraphEl = document.querySelector('.cool'); // creating a cached element ref containing the <p> element with the class 'cool'

console.dir(paragraphEl); 

paragraphEl.textContent = 'The placeholder text is gone!'; // .textContent accessed the text content of the attached element. In this case, we are changing the value of that property. 

titleElement.style.textAlign = 'center';
// You can utilize the style property of a DOM element to dynamically change the style. 

paragraphEl.style.color = 'red';
// changes the paragraph font color to red. 

// Creating an HTML Element in JS 
// First create a variable in JS containing the desired parent element of our new element. 
const bodyEl = document.querySelector('body');

console.dir(bodyEl);

const h2Elements = document.createElement('h2');
// creats the h2 element by taking the desired element as a string and assigns it a cached element reference. 

console.dir(h2Elements);

h2Elements.textContent = 'Comments Section';
// adds text content to the created element, however that does not make it appear on the page. We have to add it to the DOM. 

// bodyEl.appendChild(h2Elements);
// appends h2Elements as a child of the <body> element. Appending will add this as the last child always, even if we hard code more elements to the HTML file, unless we append more object to the same element later. 

const commentEl = document.querySelectorAll('#comment');
// Query selector all selects all elements with the id 'comment'

console.dir(commentEl);
// the result of the above code returns a NODE LIST which can looped through or iterated over.

commentEl.forEach((commentElement) => {
    console.log(commentElement.textContent);
});

// you can iterate/loop over a NODELIST. The above loop logs the text content of each elememt in the comment el.  

commentEl.forEach((commentElement) => {
    commentElement.style.fontSize = '30px';
})
// We used the forEach method on commentEl (a node list) to change the font size of each element to 30px with .style.fontSize remember a string must passed through the .style property. 


h2Elements.setAttribute("id", "comment section");
// set attribute adds an attribute. This takes two arguments.

console.dir(h2Elements);

console.log(h2Elements.hasAttribute("id"));
// has attribute check to see if the element has the argument. Returns true or false. 

console.log(h2Elements.getAttribute("id"));
// getAttribute returns the value of the attribute.

h2Elements.removeAttribute("id");
// removeAttribute removes the attribute. 

console.dir(h2Elements);

const button = document.querySelector("button");

if (button.hasAttribute('disabled') === true) {
    button.removeAttribute('disabled');
}
// checks to see if button has disabled, then removes it. 

button.setAttribute('id', 'submit');
button.classList.add('btn');

console.dir(button);

button.classList.replace('btn', 'action-button');

console.dir(button);

const titleElementById = document.getElementById('main-title');

console.dir(titleElementById)

paragraphEl.textContent = 'Comments for <strong>today</strong>:'
// does not render the <strong> element. 

paragraphEl.innerHTML = 'Comments for <strong>today</strong>:'
// renders the HTML tag strong. 

paragraphEl.after(h2Elements);
// the <h2> element is will now always follow the <p2> element. 

const itemEls = Array.from(commentEl);

console.log(itemEls);
