const today = new Date();

const thisYear = today.getFullYear();

const footer = document.querySelector('footer');

const copyright = document.createElement('p');

copyright.innerHTML = "Jennifer Tellez " + thisYear;
   console.log(footer); 
footer.appendChild(copyright);

const skills = [
   "Javascript",
   "HTML",
   "CSS"
];
      

const skillsSection = document.getElementById("skills")
console.log(skillsSection)
const skillsList = skillsSection.querySelector('ul')
console.log(skillsList)

   for (let i = 0; i < skills.length; i++) {
       let skill = document.createElement('li')
      skill.innerHTML = skills[i]
      skillsList.appendChild(skill)
   }
