const today = new Date()
    
const thisYear = today.getFullYear()
    
const footer = document.querySelector("footer")

const copyright = document.createElement("p")
 
copyright.innerHTML="Sherose Badruddin "+ thisYear
console.log(footer)
footer.appendChild(copyright)

const skills = ["skill1","skill2","skill3","skill4"]
const skillsSection = document.querySelector("#skills")

const skillsList = skillsSection.querySelector("ul")
console.log(skillsList)
for (let i = 0; i < skills.length; i++) { 
  const skill = document.createElement("li")
  skill.innerHTML=skills[i]
  skillsList.appendChild(skill)
}
