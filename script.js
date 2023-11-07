const things=document.querySelectorAll(".truncated");
for (let thing of things) {
   thing.addEventListener("click", ()=>{
   thing.classList.toggle("truncated")})
}

const projects = document.querySelector(".projects");
const newCard = document.querySelector("#new");
newCard.addEventListener("click", getCardInfo);

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
    bg.classList.add("opaque-bg"); 
    let form = document.createElement("form");
    form.classList.add("card-creator");
    form.classList.add("card");
    let nameInput = document.createElement("input");
    let imgInput = document.createElement("input");
    let descInput = document.createElement("input");
    let closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", ()=>{document.querySelector("body").removeChild(bg)})
    form.appendChild(nameInput);
    form.appendChild(imgInput);
    form.appendChild(descInput);
    form.appendChild(closeButton);
    bg.appendChild(form); 
    document.querySelector("body").appendChild(bg);

}

getCardInfo();

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