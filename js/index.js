const today = new Date()
    
const thisYear = today.getFullYear()
    
const footer = document.querySelector("footer")

const copyright = document.createElement("p")
 
copyright.innerHTML="Sherose Badruddin "+ thisYear
console.log(footer)
footer.appendChild(copyright)

const skills = ["Javascript","HTML","CSS"]

const skillsSection = document.querySelector("#skills")

const skillsList = skillsSection.querySelector("ul")
console.log(skillsList)
for (let i = 0; i < skills.length; i++) { 
  const skill = document.createElement("li")
  skill.innerHTML=skills[i]
  skillsList.appendChild(skill)
}
const messageForm = document.getElementsByName("leave_message")[0]

console.log(messageForm)
messageForm.addEventListener("submit", (event) => {
  
  event.preventDefault()
  const formName = event.target.name
  const formEmail = event.target.email
  const formTextarea = event.target.message
  console.log(formName.value, formEmail.value, formTextarea.value)
  
  const messageSection = document.getElementById("messages")
  const messageList = messageSection.querySelector("ul")
  const newMessage = document.createElement("li")
  newMessage.innerHTML = '<a href="mailto:'+formEmail.value+'" target="_blank">'+formName.value+'</a><span> wrote: '+formTextarea.value+'</span>'
  messageList.appendChild(newMessage)

  const removeButton = document.createElement("button")
  removeButton.textContent="Remove"
  removeButton.type = "button"
  removeButton.addEventListener("click", (e) => {
    const entry = removeButton.parentNode
    entry.remove()
    
    
  })
  newMessage.appendChild(removeButton)
  messageForm.reset()
  
});