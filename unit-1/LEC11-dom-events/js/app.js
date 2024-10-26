const likeButtonElement = document.querySelector("#like-button") // assign element with like button id (#) to likeButtonElement using querySelector.

// console.dir(likeButtonElement);
const dislikeButtonElement = document.querySelector("#dislike-button");
// console.dir(dislikeButtonElement);

const bodyElement = document.querySelector('body');

const divElement = document.querySelector('div');

// bodyElement.addEventListener('click', () => {
//     console.log('body');
// })

// code above is for examining bubbling. 

let likesCount = 0
let dislikesCount = 0

const handleReaction = (event) => {
    // console.log(event.target.id)
    if (event.target.id === 'like-button') {
        likesCount = likesCount + 1;
        likeButtonElement.textContent = `${likesCount} like(s). Like this post!`;
        divElement.removeEventListener('click', handleReaction);
        likeButtonElement.setAttribute('disabled', true);
        dislikeButtonElement.setAttribute('disabled', true);
    } else if (event.target.id === 'dislike-button') {
        dislikesCount = dislikesCount + 1;
        dislikeButtonElement.textContent = `${dislikesCount} dislike(s). Dislike this post.`;
        divElement.removeEventListener('click', handleReaction);
        likeButtonElement.setAttribute('disabled', true);
        dislikeButtonElement.setAttribute('disabled', true);
    }
}
// The above code creates a function for handle like where each time it is executed, it adds one like to the likesCount if the event.target.id === 'like-button', and updatess the textcontent of the like button element to display the number of likes. Otherwise, it updates the dislike number and textContent of the dislike button. 


divElement.addEventListener('click', handleReaction);

// likeButtonElement.addEventListener('click', handleReaction);
// adds an event listener to the like button

// dislikeButtonElement.addEventListener('click', handleReaction);
// adds an event listener to dislike button. 

// Making a button take text from <input> and return it as a list on page.
const commentElementButton = document.querySelector('#comment-button');
// First, make a cached element reference with the button element. 

// console.dir(commentElementButton);

commentElementButton.addEventListener('click', () => {
    if (inputElement.value === '') {
        return
    } else {
        // attach an event listener to the button element.
        // console.log('I work');
        const commentElement = document.createElement('li');
        // clicking the button element will create an <li> element.
        // commentElement.textContent = 'Can you hear me?'
        // add placeholder text to check if its working. 
        commentElement.textContent = inputElement.value;
        // console.dir(commentElement);
        commentListElement.appendChild(commentElement);
        // appending the result of the click to the <ul> list stored in comment list element. 
        inputElement.value = '';
        // removes value in the text box when the event listener is engaged. 
    }
})

// To add the commentElement to the DOM in the ul, first we select the ul and assign to a cached reference element. 
const commentListElement = document.querySelector('ul');
// console.dir('commentListElement')

// To be able to attach the value of the input element, we must first attach the input element to a cached element reference. 
const inputElement = document.querySelector('input');
// console.dir(inputElement);

