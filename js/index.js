var today = new Date();

var thisYear = today.getFullYear();

var footer = document.querySelector("footer");
var copyright = document.createElement("p");

copyright.innerHTML = `&copy;XeniyaD  ${thisYear}`;

footer.appendChild(copyright);

const skills = ["HTML", "CSS", "JavaScript"];
const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.textContent = skills[i];
  skillsList.appendChild(skill);
}
