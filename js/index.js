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

const messageForm = document.getElementsByName("leave_message")[0];
console.log(messageForm);
messageForm.addEventListener("submit", (event) => {
  event.preventDefault(); //prevent browser refresh

  var nameForm = event.target.name.value;
  console.log(nameForm);
  var emailForm = event.target.email.value;
  console.log(emailForm);
  var newMessages = event.target.message.value;
  console.log(newMessages);

  const messageSection = document.getElementById("messages");
  console.log(messageSection);

  const messageList = messageSection.querySelector("ul");
  console.log(messageList);

  const newMessage = document.createElement("li");
  console.log(newMessage);

  messageList.appendChild(newMessage);

  /*On the next line, set the inner HTML of your newMessage element with the following information:
  1) <a> element that displays the "name" and links to the "email" (hint: use the mailto: prefix)
  2) <span> element that displays the "message" */
  newMessage.innerHTML = `<a href="mailto:${emailForm}">${nameForm}</a> wrote: <span> ${newMessages}</span>`; //used template literals

  /* Create a new <button> element and store it in a variable named removeButton:
  1) Set the inner text to "remove"
  2) Set the type attribute to "button"
  3) Add an event listener to the removeButton element that handles the "click" event
     3a) Inside the callback function, find the button's parent element using DOM Traversal
        (hint: parentNode property) and store it in a variable named entry
     3b) Remove the entry element from the DOM (hint: remove method)*/
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.setAttribute("type", "button");

  removeButton.addEventListener("click", (events) => {
    var entry = events.target.parentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);

  document.getElementsByName("leave_message")[0].reset(); //reset form
});
