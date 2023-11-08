const projects = document.querySelector(".projects");
const newCard = document.querySelector("#new");
newCard.addEventListener("click", ()=>{popupForm.style.display='grid'});

const closeButton = document.querySelector("#closeButton");
const submitButton = document.querySelector("#submitButton");
const popupForm = document.querySelector(".popup-form");

closeButton.addEventListener("click", ()=>{popupForm.style.display='none'});

class Project {
    constructor(name, imageURL, description) {
    this.name = name;
    this.imageURL = imageURL;
    this.description = description;
    }
}

let test = new Project("this is a test", "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-26853jpg&fm=jpg", "it a thing");

function createCard(project) {
    let card = document.createElement("div");
    card.classList.add("card");
    let cardName = document.createElement("h2");
    cardName.textContent = project.name;
    let cardImage = document.createElement("img");
    cardImage.setAttribute("src", project.imageURL);
    let cardDesc = document.createElement("p");
    cardDesc.classList.add("truncated")
    cardDesc.textContent = project.description;
    // Buttons
    let likeButton = document.createElement("input");
    likeButton.setAttribute('src', './images/icons/thumb-up-outline.svg');
    let ghButton = document.createElement("input");
    ghButton.setAttribute('src', './images/icons/github.svg');
    let shareButton = document.createElement("input");
    shareButton.setAttribute('src', './images/icons/share.svg');
    let buttons = [likeButton, ghButton, shareButton];
    for (let button of buttons) {
        button.setAttribute('type', 'image');
        button.classList.add('icon');
    }

    card.append(cardName, cardImage, cardDesc, 
        likeButton, ghButton, shareButton);
    projects.appendChild(card);
}

submitButton.addEventListener("click", ()=>{
    let temp = new Project(
        document.querySelector('#project-name').value,
        document.querySelector('#project-image-url').value,
        document.querySelector('#project-description').value
    );
    createCard(temp);
    popupForm.style.display='none'
})

//data
let userData = {
    firstName: "joseph",
    lastName: "cobian",
    handle: "joseph",
    pfp: "./images/pfp.jpeg",
    projects: [
        {
            name: "Pumpkin Patch",
            imageURL: './images/pumpkin.jpeg',
            description: "Website advertising for a pumpkin patch. Features a Halloween countdown, a ticket page that adds selected ticket prices, and a contact page with a form for submitting a message.",
            likes: 0,
            liked: false,
        },
        {
            name: "Calculator",
            imageURL: './images/calculator.jpg',
            description: "A calculator in the style of an oldschool gameboy color. Supports basic operations including modulus.",
            likes: 0,
            liked: false,
        },
        {
            name: "Etch a Sketch",
            imageURL: './images/EAS.jpeg',
            description: "A drawing website that changes the colors of a grid based on if the user hovers over it with their mouse. Includes a custom animated toggle button to switch from rgb colors to a more pastel pallette.",
            likes: 0,
            liked: false,
        },
        {
            name: "Hacking Simulator",
            imageURL: './images/hac.jpeg',
            description: "Simulates being a hackerman by converting user keypresses to gibberish hacking terms. Includes a typewriter effect that makes text appear one letter at a time as if it is being typed.",
            likes: 0,
            liked: false,
        },
        {
            name: "Rock Paper Scissors",
            imageURL: './images/RPS.jpeg',
            description: "A simple game of rock paper scissors styled after the card game Inscryption. The user chooses a card and the opponent bot's card is flipped and revealed.",
            likes: 0,
            liked: false,
        },
        {
            name: "Full Moon Space Travel",
            imageURL: './images/FMS.jpeg',
            description: "A fictional space tourism company.",
            likes: 0,
            liked: false,
        },
    ]
}

for (let project of userData.projects) {
    createCard(project);
}

const things=document.querySelectorAll(".truncated");
for (let thing of things) {
   thing.addEventListener("click", ()=>{
   thing.classList.toggle("truncated")})
}
