const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");

document.getElementsByTagName("footer");

copyright.innerHTML = "CaSaundra Salgado " + "&copy; " + thisYear;

footer.appendChild(copyright);

let skills = [
    "HTML",
    "CSS",
    "Java with JavaFX",
    "Network Security",
    "Cyber Security"
];

let skillSection = document.getElementById("skills");

skillsList = skillSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
};

const messageForm = document.getElementsByName("leave_message")[0];

messageForm.addEventListener("submit", (event) => {
   event.preventDefault();
   
   const eventName = event.target.name.value;
   const eventEmail = event.target.email.value;
   const eventMessage = event.target.message.value;
  
   console.log(eventName, eventEmail, eventMessage);
   messageForm.reset();


   const messageSection = document.getElementById("messages");
   const messageList = messageSection.querySelector("ul");

   const newMessage = document.createElement("li");
   newMessage.innerHTML = `<a href="mailto:${eventEmail}">${eventName}</a><span> wrote: ${eventMessage} </span>`;
   console.log(newMessage);

   const removeButton = document.createElement("button");
   removeButton.textContent = "remove";
   removeButton.type = "button";

   removeButton.addEventListener("click", (event) => {
   const entry = removeButton.parentNode;
   
});
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage); 
    entry.remove();
});  