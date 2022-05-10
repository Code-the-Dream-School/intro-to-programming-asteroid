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


   // adding an event listener to the remove button to remove the messages when the button is clicked. 
    removeButton.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            const li = event.target.parentNode;
            const ul = li.parentNode;
            ul.removeChild(li);
        }
});
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage); 
    entry.remove();
});  

let githubRequest = new XMLHttpRequest();  // Creating a new request
// githubRequest.onreadystatechange === function () {
//     if (githubRequest.readyState === 4) {
//         console.log(typeof githubRequest.responseText);
//     }
// };
githubRequest.open("GET", "https://api.github.com/users/CaSaundra-Salgado/repos"); // Getting my repositories from Github
githubRequest.send(); // Sending the request

githubRequest.addEventListener("load", () => {
    const repositories = JSON.parse(githubRequest.responseText);  // Parsing the JSON data
    console.log(repositories); 

    projectSection = document.getElementById("projects");
    projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++) {  // Looping through my repositories starting with index 0
    let project = document.createElement("li");
    project.innerText = `${repositories[i].name} - Date Created: ${repositories[i].created_at}`; // Displaying all projects by their name and date
    projectList.appendChild(project);
    };

    var repoLinks = projectSection.getElementsByTagName("li");
    for(var i = 0; i < repoLinks.length; i++) {
    var text = repoLinks[i].textContent;
    repoLinks[i].textContent = "";
    var a = document.createElement("a");
    a.href = "https://github.com/CaSaundra-Salgado?tab=repositories";
    // Have to figure out how to get only 1 tab to open when the page is loaded
    //a.href = window.open("https://github.com/CaSaundra-Salgado?tab=repositories", "_blank").focus; 
    a.textContent = text;
    repoLinks[i].appendChild(a);
    }
});  