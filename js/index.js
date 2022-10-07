//Insert Copyright Text in Footer
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `&copy Amy Jen Sandoval ${thisYear}`;
footer.appendChild(copyright);

//Create List of Skills
const skills = ["React", "JavaScript", "HTML", "CSS"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

//Create a for loop to iterate over your skills Array, starting at index 0
for (let i = 0; i < skills.length; i++) {
  //inside the loop, create a new list item element
  let skill = document.createElement("li");
  //set the inner text of skill variable to the value of the current Array element
  skill.innerHTML = `${skills[i]}`;
  //append the skill element to the skillsList element
  skillsList.appendChild(skill);
}

// //Handle Message Form Submit
// //using "DOM Selection", select the "leave_message" form by name attribute
// const messageForm = document.getElementsByName("leave_message")[0];
// const messageSection = document.getElementById("messages");

// //Hide the #messages section when the list is empty
// messageSection.style.display = "none";

// //add an event listener to the messageForm element that handles the "submit" event
// messageForm.addEventListener("submit", (event) => {
//   //inside the callback function, create a new variable for each of the three form fields
//   event.preventDefault();
//   const name = event.target.name;
//   const email = event.target.email;
//   const textarea = event.target.message;
//   console.log(name.value, email.value, textarea.value);
//   //Display Messages in List
//   //using "DOM Selection", query the messageSection to find the <ul> element
//   const messageList = messageSection.querySelector("ul");
//   //create a new list item (li) element
//   const newMessage = document.createElement("li");
//   //set the innerHTML of your newMessage with the following information:
//   //<a> element that displays the "name" and links to the "email" (hint: use the mailto: prefix)
//   //<span> element that displays the "message"
//   newMessage.innerHTML = `<a href="mailto:${email.value}" target="_blank">${name.value}</a><span> wrote: ${textarea.value} </span>`;
//   //create a new <button> element
//   const removeButton = document.createElement("button");
//   //set the inner text to "remove"
//   removeButton.innerText = "Remove";
//   //set the type attribute to "button"
//   removeButton.type = "button";
//   //add an event listener that handles the "click" event
//   removeButton.addEventListener("click", (event) => {
//     //find the button's parent element using DOM Traversal
//     const entry = event.target.parentNode;
//     //remove the entry element from the DOM
//     entry.remove();
//   });
//   //append the removeButton to the newMessage element
//   newMessage.appendChild(removeButton);
//   //append the newMessage to the messageList element
//   messageList.appendChild(newMessage);
//   //add a new line of code to clear the form
//   messageForm.reset();
//   //Show the #messages section
//   if (messageList) {
//     messageSection.style.display = "block";
//   }
//   ///OPTIONAL:  *** next question is: how to hide messages section again after all messages are "removed" ***
//   // my logic: if messageList is empty, hide messages section, else, show messageList
// });

///OPTIONAL: Create an "edit" button for each message entry that allows user to input a new/modified message

//API: https://api.github.com/users/SandovalAmy/repos
// const projectSection = document.getElementById("projects");
// const projectList = projectSection.querySelector("ul");

// const api_url = "https://api.github.com/users/SandovalAmy/repos";

// function fetchData() {
//   fetch(api_url)
//     .then((response) => {
//       if (!response.ok) {
//         throw Error("ERROR");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       const html = data
//         .map((repos) => {
//           return `<li><a href=${repos.html_url} target="_blank">${repos.name} </a></li>`;
//         })
//         .join("");
//       const project = document.createElement("li");
//       project.innerHTML = html;
//       projectList.appendChild(project);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
// fetchData();
