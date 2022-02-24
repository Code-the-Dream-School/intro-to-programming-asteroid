/*
Created a paragraph element and assigned inner HTML as small copyright info text
Placed created paragraph at the specified footer loaction
*/
let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerHTML = `<small> &copy; Marcus Hill ${thisYear} </small>`
footer.append(copyright)

/*
Created an array of skills
Located where I want my list of skills to be by using desendant selector (#skills ul)
Using a for of loop I add each element of my skills array within a newly created list element
Added each list element with array value into the skills list
*/
let skills = ["HTML", "CSS", "Javascript"];
let skillsList = document.querySelector("#skills ul");
for (let skill of skills) {
  let newSkill = document.createElement("li");
  newSkill.textContent = skill;
  skillsList.append(newSkill);
}

//vairiables will be used in the next few functions
const messageSection = document.getElementById("messages")
const messageList = document.querySelector("#messages ul");
/*
Create a function that will check the number of messages in the message list and Hide the messages section if there are no messages to list
*/
let hideMessages = () => {
  if (messageList.children.length === 0){
    messageSection.style.display = "none"
  } else {
    messageSection.style.display = "block"
  }
}
hideMessages();
/*
Creating a message form that takes user input and returns it into the messages section as a list element
Remove button added to each list element giving ability to remove that list element
Edit button provides the user with an input field holing the text content within the span element of the list element.
The user can change the input field and press save to return a list itemp with different span content
*/
const messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener("submit", (e) => {
  //Does not refresh the page and keeps data within local file
  e.preventDefault();
  //create message template and put it within a list element
  let nameVal = e.target.name.value
  let emailVal = e.target.email.value
  let messageVal = e.target.message.value
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${emailVal}">${nameVal}</a>'s Message: <span id = first>${messageVal}</span>`
  //Here is my remove button
  const removeButton = document.createElement("button")
  removeButton.textContent = "remove"
  removeButton.type = "button"
  removeButton.addEventListener("click", (e) => {
    let entry = e.target.parentNode
    newMessage.remove(entry);
    hideMessages();
  })
  //Here is my edit button
  const editButton = document.createElement("button")
  editButton.textContent = "edit"
  editButton.type = "button"
  editButton.addEventListener("click", (e) => {
    if (editButton.textContent === "edit"){
      editButton.textContent = "save"
      li = e.target.parentNode
      span = document.querySelector("#messages #first")
      spanText = document.getElementById("first").textContent
      input = document.createElement("input")
      input.type = "text"
      input.id = "new"
      input.value = spanText
      li.insertBefore(input, span)
      span.remove()
      newMessage.appendChild(editButton);
      messageList.appendChild(newMessage);
    }
    else if (editButton.textContent === "save"){
      editButton.textContent = "edit"
      li = e.target.parentNode
      oldInput = document.querySelector("#messages #new")
      span = document.createElement("span")
      span.id = "first"
      span.textContent = input.value
      //If user saves with a blank input field it will remove the message
      //If user saves with a value in the input field it will update the message
      if(span.textContent !== ""){
        li.appendChild(span)
        oldInput.remove()
        newMessage.appendChild(removeButton);
        newMessage.appendChild(editButton);
      } else {
        newMessage.remove(li);
        hideMessages();
      }
    }
  })
  //Create the message list with the new message!
  //hideMessages function is ran to display the message list after user submits a message
  newMessage.appendChild(removeButton);
  newMessage.appendChild(editButton);
  messageList.appendChild(newMessage);
  hideMessages();
  messageForm.reset();
})
