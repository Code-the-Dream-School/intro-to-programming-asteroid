const today = new Date(2022, 2, 7, 5, 48, 30);
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `George Owusu ${thisYear}`;
document.body.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "Github"];
const skillsSection = document.getElementById("skills")
const skillsList = skillsSection.querySelector("ul")

for (let i = 0; i < skills.length; i++) {
    skills[i];
    const skill = document.createElement("li")
    skills.innerText = skills[i];
    console.log(document.getElementById("skills").appendChild(skill));
}