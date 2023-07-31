// //Write the code necessary to do the following:

// 1. Select the section with an id of container without using querySelector.
const containerElements = document.getElementById('container');


// 2. Select the section with an id of container using querySelector.
const containerEl= document.querySelector('#container');

// 3. Select all of the list items with a class of “second”.

const secondClassLi= document.querySelectorAll('.second')
// 4. Select a list item with a class of third, but only the list item inside of the ol tag.
const thirdLiOl= document.querySelectorAll('ol li.third')


// 5. Give the section with an id of container the text “Hello!”.
// const greeting=document.querySelector("#container").innerText="Hello!"

// 6. Add the class main to the div with a class of footer.
const footer=document.querySelector('div.footer')
footer.classList.add("main")
// 7. Remove the class main on the div with a class of footer.
footer.classList.remove('main')
// 8. Create a new li element.
const newLi=document.createElement('li')
// 9. Give the li the text “four”.
newLi.innerHTML="four"
// 10. Append the li to the ul element.
const newList=document.querySelector('ul')
newList.appendChild(newLi)


// 11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
const oList=document.querySelectorAll('ol li')
for(let item of oList){
  item.style.backgroundColor="green"
}

// 12. Remove the div with a class of footer
const div=document.querySelector('div.footer')
div.remove()