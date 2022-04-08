//Insert Copyright Text in Footer
//create a new date object
const today = new Date()
//retrieve the current year from date object
const thisYear = today.getFullYear()
//using "DOM Selection", select the footer element
const footer = document.querySelector("footer")
//create a new paragraph element
const copyright = document.createElement("p")
//set the inner HTML of copyright element to display name and current year
copyright.innerHTML = `&copy Amy Sandoval ${thisYear}`
//using "DOM Manipulation", append the copyright element to the footer
footer.appendChild(copyright)

//Create List of Skills
//list your technical skills by creating an Array of String values
const skills = ["JavaScript", "HTML", "CSS"]
//using "DOM Selection", select the "skills" section by id
const skillsSection = document.getElementById("skills")
//using "DOM Selection", query the skillsSection to find the <ul> element
const skillsList = skillsSection.querySelector("ul")
//create a for loop to iterate over your skills Array, starting at index 0
for (let i = 0; i < skills.length; i++) {
  //inside the loop, create a new list item element
  let skill = document.createElement("li")
  //set the inner text of skill variable to the value of the current Array element
  skill.innerHTML = `${skills[i]}`
  //append the skill element to the skillsList element
  skillsList.appendChild(skill)
}

//Handle Message Form Submit
//using "DOM Selection", select the "leave_message" form by name attribute
const messageForm = document.getElementsByName("leave_message")[0]
//add an event listener to the messageForm element that handles the "submit" event
messageForm.addEventListener("submit", (event) => {
  //inside the callback function, create a new variable for each of the three form fields
  event.preventDefault()
  const name = event.target.name
  const email = event.target.email
  const textarea = event.target.message
  console.log(name.value, email.value, textarea.value)
  //Display Messages in List
  //using "DOM Selection", select the #messages section by id
  const messageSection = document.getElementById("messages")
  //using "DOM Selection", query the messageSection to find the <ul> element
  const messageList = messageSection.querySelector("ul")
  //create a new list item (li) element
  const newMessage = document.createElement("li")
  //set the innerHTML of your newMessage with the following information:
  //<a> element that displays the "name" and links to the "email" (hint: use the mailto: prefix)
  //<span> element that displays the "message"
  newMessage.innerHTML = `<a href="mailto:${email.value}" target="_blank">${name.value}</a><span> wrote: ${textarea.value} </span>`
  //create a new <button> element
  const removeButton = document.createElement("button")
  //set the inner text to "remove"
  removeButton.innerText = "remove"
  //set the type attribute to "button"
  removeButton.type = "button"
  //add an event listener that handles the "click" event
  removeButton.addEventListener("click", (event) => {
    //find the button's parent element using DOM Traversal
    const entry = event.target.parentNode
    //remove the entry element from the DOM
    entry.remove()
  })
  //append the removeButton to the newMessage element
  newMessage.appendChild(removeButton)
  //append the newMessage to the messageList element
  messageList.appendChild(newMessage)
  //add a new line of code to clear the form
  messageForm.reset()
})
