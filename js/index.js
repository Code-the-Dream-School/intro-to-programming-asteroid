//Navbar mobile size

const toggleButton = document.getElementById("toggle-button");
const navigationList = document.getElementById("navigation-list");

toggleButton.addEventListener("click", () => {
  navigationList.classList.toggle("active");
});
//////////////////////////////////////////////////
var today = new Date();

var thisYear = today.getFullYear();

var footer = document.querySelector("footer");
var copyright = document.createElement("p");

copyright.innerHTML = `&copy;Xeniya Dobrogorskaya  ${thisYear}`;

footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS"];
const skillsSection = document.querySelector("#skills-container");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.setAttribute("class", "skills-li");
  skill.textContent = skills[i];
  skillsList.appendChild(skill);
}

// Create messages in a Message Section, Hide the #messages-container section when the list is empty
const messageSection = document.querySelector("#messages-container");
const messageList = messageSection.querySelector("ul");
//Hide Messages-container
messageSection.hidden = true;

const messageForm = document.getElementsByName("leave_message")[0];

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInput = event.target.name.value;
  const emailInput = event.target.email.value;
  const textArea = event.target.message.value;

  messageSection.hidden = false; //display Messages-container

  const newMessage = document.createElement("li");
  newMessage.setAttribute("class", "messages-li");
  messageList.appendChild(newMessage);
  newMessage.innerHTML = `<a href="mailto:${emailInput}" target="_blank"
  >${nameInput}</a>   wrote: <span> ${textArea} </span>`;
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
        messageSection.hidden = true; //Hide Messages-container
      } else if (button.textContent === "edit") {
        const span = entry.querySelector("span");
        const editMessage = document.createElement("input");
        editMessage.type = "text";
        editMessage.value = textArea;
        editMessage.value = span.textContent;
        entry.insertBefore(editMessage, span);
        entry.removeChild(span);
        //edit button into save button
        button.textContent = "save";
      } else if (button.textContent === "save") {
        const newMessage = entry.querySelector("input");
        const span = document.createElement("span");
        span.textContent = newMessage.value;
        entry.insertBefore(span, newMessage);
        entry.removeChild(newMessage);
        button.textContent = "edit";
      } //Done :)
    }
  });
  newMessage.appendChild(editButton);
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  messageForm.reset();
});
//Fetch GitHub Repositories
var githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/XeniyaDob/repos");
githubRequest.send();

//Handle Response from Server

githubRequest.onload = function () {
  var repositories = JSON.parse(this.response);
  //console.log(repositories);
  //Display Repositories in List
  let projectSection = document.getElementById("projects-container");
  let projectList = projectSection.querySelector("ul");
  for (let i = 0; i < repositories.length; i++) {
    let project = document.createElement("li");
    let linkProject = document.createElement("a");

    project.innerText = repositories[i].name; //set the inner text of a project variable to the current Array element's name property
    project.className = "projects-li";
    projectList.appendChild(project);
  }
};
