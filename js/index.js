var today = new Date();

var thisYear = today.getFullYear();

var footer = document.querySelector("footer");
var copyright = document.createElement("p");

copyright.innerHTML = `&copy;Xeniya Dobrogorskaya  ${thisYear}`;

footer.appendChild(copyright);

const skills = ["HTML", "CSS", "JavaScript"];
const skillsSection = document.querySelector("#skills-container");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.setAttribute("class", "skills-li");
  skill.textContent = skills[i];
  skillsList.appendChild(skill);
}

const messageForm = document.getElementsByName("leave_message")[0];

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInput = event.target.name;
  const emailInput = event.target.email;
  const textArea = event.target.message;

  const messageSection = document.querySelector("#messages-container");
  const messageList = messageSection.querySelector("ul");
  //console.log(messageList);
  // Create messages in a Message Section hide it if no messages
  const newMessage = document.createElement("li");
  newMessage.setAttribute("class", "messages-li");
  messageList.appendChild(newMessage);
  newMessage.innerHTML = `<a href="mailto:${emailInput.value}" target="_blank"
  >${nameInput.value}</a><span> wrote:  ${textArea.value} </span>`;
  //create EDIT Button
  const editButton = document.createElement("button");
  editButton.textContent = "edit";
  editButton.type = "button";
  //create REMOVE Button
  const removeButton = document.createElement("button");
  removeButton.textContent = "remove";
  removeButton.type = "button";
  //event listener for EDIT and REMOVE Buttons
  newMessage.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const button = e.target;
      const entry = button.parentNode;
      const ul = entry.parentNode;
      if (button.textContent === "remove") {
        ul.removeChild(entry);
      } else if (button.textContent === "edit") {
        const span = entry.querySelector("span");
        const editMessage = document.createElement("input");
        editMessage.type = "text";
        editMessage.value = textArea.value;
        entry.insertBefore(editMessage, span);
        entry.removeChild(span);
        //Next going to turn edit button into save button
      }
    }
  });
  newMessage.appendChild(editButton);
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  messageForm.reset();
});
