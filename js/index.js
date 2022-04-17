const today= new Date()
const thisYear= today.getFullYear()
const footer= document.querySelector("footer")
const copyright= document.createElement("p")
copyright.innerHTML = "Onella Powell " + thisYear
footer.appendChild(copyright)

console.log(footer)

const skills = ["HTML", "CSS", "JavaScript","Visual Studios","Travel Consultant"]
const skillsSection = document.querySelector("#skills")

const skillsList = skillsSection.querySelector("ul")
    for ( let i = 0; i < skills.length; i++) {
       const skill = document.createElement("li")
       skill.innerHTML = skills[i]
       skillsList.appendChild(skill)
    }
 
    