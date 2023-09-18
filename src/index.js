let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
fetch('http://localhost:3000/toys')
.then((resp) => resp.json())
.then((data) => renderToys(data))

function renderToys (toyArray) {
  toyArray.forEach(uploadToy)
} 

function uploadToy(toyObject){
  const pageDiv = document.querySelector('#toy-collection')
  const spaceToys = document.createElement('div') 
  const toyName = document.createElement('h2') 
  const toyImage = document.createElement('img')
  const peeTag = document.createElement('p') 
  const toyButton = document.createElement('button')

  toyName.textContent = toyObject.name
  toyImage.src = toyObject.image 
  peeTag.textContent = toyObject.likes +  ' likes' 
  
   
  toyButton.id = '[toy_id]'
  toyButton.textContent = "Like" 
  toyButton.className = "[like-btn]"
  spaceToys.className = 'card' 
  toyImage.className ='toy-avatar'
  
  
  
  spaceToys.setAttribute('card', toyImage)
  spaceToys.append(toyName, toyImage, peeTag,toyButton)
  pageDiv.append(spaceToys) 





  
} 

