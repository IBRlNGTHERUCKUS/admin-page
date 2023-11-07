const things=document.querySelectorAll(".truncated");
for (let thing of things) {
   thing.addEventListener("click", ()=>{
   thing.classList.toggle("truncated")})
}

const projects = document.querySelector(".projects");

class Project {
    constructor(name, imageURL, description) {
    this.name = name;
    this.imageURL = imageURL;
    this.description = description;
    }
}

let test = new Project("this is a test", "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-26853jpg&fm=jpg", "it a thing");

function getCardInfo() {
    let bg = document.createElement("div");
    bg.classList.add("")

}

function createCard(project) {
    let card = document.createElement("div");
    card.classList.add("card");
    let cardName = document.createElement("h2");
    cardName.textContent = project.name;
    let cardImage = document.createElement("img");
    cardImage.setAttribute("src", project.imageURL);
    let cardDesc = document.createElement("p");
    cardDesc.textContent = project.description;
    
    card.appendChild(cardName);
    card.appendChild(cardImage);
    card.appendChild(cardDesc);
    projects.appendChild(card);
}

createCard(test);