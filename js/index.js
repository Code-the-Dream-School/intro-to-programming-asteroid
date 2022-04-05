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

const messageForm = document.getElementsByName("leave_message")[0];

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInput = event.target.name;
  const emailInput = event.target.email;
  const textArea = event.target.message;

  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");
  //console.log(messageList);
  const newMessage = document.createElement("li");
  messageList.appendChild(newMessage);
  newMessage.insertAdjacentHTML(
    "afterbegin",
    `<a href="mailto:${emailInput.value}" target="_blank"
  >${nameInput.value}</a> wrote: <span> ${textArea.value} </span>`
  );
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
        // still working on EDIT button functionality
        //and
        //Hide the #messages section feature
      }
    }
  });
  newMessage.appendChild(editButton);
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  messageForm.reset();
});
