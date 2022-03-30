today = new Date();
let thisYear = new Date().getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");

document.getElementsByTagName("footer");

copyright.innerHTML = "CaSaundra Salgado " + "&copy; " + thisYear;

footer.appendChild(copyright);

let skills = [
    "HTML",
    "CSS",
    "Java with JavaFX",
    "Microsoft Word",
    "Microsoft PowerPoint",
    "Network Security",
    "Cyber Security"
];

let skillSection = document.getElementById("skills");

skillsList = skillSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
};