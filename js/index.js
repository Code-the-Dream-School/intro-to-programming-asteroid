let today = new Date();
console.log(today);
let thisYear = today.getFullYear();
console.log(thisYear);

const footer = document.querySelector("footer");
console.log(footer);

let copyright = document.createElement("p");
copyright.innerHTML = `MacKenzie ${thisYear}`; //template literal
footer.appendChild(copyright);
console.log(copyright);

skills = ["One", "Two", "Three", "Four"];
console.log(skills);

skillsSection = document.querySelector("#skills");
console.log(skillsSection);

skillsList = skillsSection.querySelector("ul");
console.log(skillsList);

for (i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  console.log(skill);

  skill.innerText = `${skills[i]}`; //template literal
  console.log(skill.innerText);

  skillsList.appendChild(skill);
  console.log(skillsList);
}
