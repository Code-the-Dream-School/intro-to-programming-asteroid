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
    "JavaScript",
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

// let githubRequest = new XMLHttpRequest();  // Creating a new request
// // githubRequest.onreadystatechange === function () {
// //     if (githubRequest.readyState === 4) {
// //         console.log(typeof githubRequest.responseText);
// //     }
// // };
// githubRequest.open("GET", "https://api.github.com/users/CaSaundra-Salgado/repos"); // Getting my repositories from Github
// githubRequest.send(); // Sending the request


fetch("https://api.github.com/users/CaSaundra-Salgado/repos")
    .then(response => response.json())
    .then(githubRequest => { 
        let projectSection = document.getElementById("projects");
        let projectList = projectSection.querySelector("ul");
    
        for (let i = 0; i < githubRequest.length; i++) {  // Looping through my repositories starting with index 0
            let project = document.createElement("li");
            // Displaying all projects by their name and date
            project.innerText = `${githubRequest[i].name} - Date Created: ${githubRequest[i].created_at}`; 
            projectList.appendChild(project);
       
            let repoLinks = projectSection.getElementsByTagName("li");
        
            let text = repoLinks[i].textContent;
            repoLinks[i].textContent = "";
            let a = document.createElement("a");
            a.href = "https://github.com/CaSaundra-Salgado?tab=repositories";
            // Going to work on getting the value of only 1 tab to open when the page is loaded as suggested
            a.textContent = text;
            // function Open() {
            //     window.open("https://www.google.com", "_blank");
            // }
            // Open();
            repoLinks[i].appendChild(a);
        };
    
        // let repoLinks = projectSection.getElementsByTagName("li");
        
        // for(let i = 0; i < repoLinks.length; i++) {
        //     let text = repoLinks[i].textContent;
        //     repoLinks[i].textContent = "";
        //     let a = document.createElement("a");
        //     a.href = "https://github.com/CaSaundra-Salgado?tab=repositories";
        //     // Going to work on getting the value of only 1 tab to open when the page is loaded as suggested
        //     a.textContent = text;
        //     repoLinks[i].appendChild(a);
        // }

        // for (let i = 0; i < githubRequest.length; i++) {  // Looping through my repositories starting with index 0
        //     let project = document.createElement("li");
        //     // Displaying all projects by their name and date
        //     project.innerText = `${githubRequest[i].name} - Date Created: ${githubRequest[i].created_at}`; 
        //     projectList.appendChild(project);
        // };
    
        
    })
    .catch(error => alert("Looks like there was a problem!", error)); // catching an error and displaying an alert dialog box
