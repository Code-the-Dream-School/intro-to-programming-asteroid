const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
const skills = ["HTML", "CSS", "JS"];
const skillsSection = document.getElementById("skills");
const ul = skillsSection.querySelector("ul");

for (let i = 0; i<skills.length; i++) {
    const skill = skills[i]
    const item = document.createElement("li");
    item.innerText = skill 
    ul.appendChild(item);
}


copyright.innerHTML = (`&copy Tisha Davis ${thisYear}`);
    footer.appendChild(copyright);

