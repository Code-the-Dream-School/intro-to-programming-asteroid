// Create a new date object and store it in a variable named today
// hint: new Date() constructor
const today = new Date();
console.log(today);

// Retrieve the current year from your date object and store it in a variable named thisYear
// hint: getFullYear method
const thisYear = today.getFullYear();
console.log(thisYear);

// Using "DOM Selection", select the <footer> element from the DOM and store it in a variable named footer
// hint: querySelector method
const footer = document.querySelector("footer");
console.log(footer);

// Create a new paragraph (p) element and store it in a variable named copyright
// hint: createElement method
let copyright = document.createElement("p");

// Set the inner HTML of your copyright element to display your name and the current year
// hint: use thisYear variable from earlier
copyright.innerHTML = "@Karla Flores " + thisYear;

// Using "DOM Manipulation", append the copyright element to the footer
// hint: appendChild method
document.querySelector("footer").appendChild(copyright);
// console.log(copyright);

// List your technical skills by creating an Array of String values 
// and store it in a variable named skills
const skills = ['HTML', 'JavaScript', 'CSS'];

// Using "DOM Selection", select the #skills section by id and store it in a variable named skillsSection
// hint: querySelector or getElementById method
// const skillsSection = document.getElementById('#skills');
const skillsSection = document.querySelector("#skills");
// console.log(skills)

// Using "DOM Selection", query the skillsSection (instead of the entire document) to find the <ul> element 
// and store it in a variable named skillsList
const skillsList = skillsSection.querySelector("ul");


// Create a for loop to iterate over your skills Array, starting at index 0
// Inside the loop, create a new list item (li) element and store it in a variable named skill
// hint: createElement method 
for (i = 0; i < skills.length; i++){
    //console.log(skills[i]); 
    let skill = document.createElement('li');
    
    // On the next line, set the inner text of your skill variable to the value of the current Array element
    // hint: access the Array element using bracket notation
    skill.innerHTML = skills[i];

    // On the next line, append the skill element to the skillsList element
    // hint: appendChild method
    skillsList.appendChild(skill);
}
// Using "DOM Selection", select the "leave_message" form by name attribute 
// and store it in a variable named messageForm
const messageForm = document.getElementsByName("leave_message")[0];
console.log("Line 62 ",messageForm);

// Add an event listener to the messageForm element 
// that handles the "submit" event
// hint: addEventListener method
messageForm.addEventListener('submit', (event) => {
    // Inside the callback function, above the other code you just wrote, 
    // add a new line to prevent the default refreshing behavior of the "submit" event
    // hint: preventDefault method
    event.preventDefault();
    console.log("Hello: ",messageForm);

    // Inside the callback function for your event listener, create a new variable 
    // for each of the three form fields and retrieve the value from the event
    // hint: event.target is the form, event.target.name is the first input element
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // Inside the callback function for your event listener, add a 
    // console.log statement to log the three variables you created in the previous step
    console.log(name, email, message);


    // Using "DOM Selection", select the #messages 
    // section by id and store it in a variable named messageSection
    const messageSection = document.getElementById("messages");
    //console.log("Line 87 ", messageSection);

    // Using "DOM Selection", query the messageSection 
    // (instead of the entire document) to find the <ul> element 
    // and store it in a variable named messageList
    const messageList = messageSection.querySelector("ul");
    //console.log("Line 95: ", messageList);

    // Create a new list item (li) element and store it in a
    // variable named newMessage
    const newMessage = document.createElement("li");
    console.log("Line 100: ", newMessage);
    //---newMessage.textContent = name.value + email.value + message.value;
    console.log("All ",newMessage);

    // On the next line, set the inner HTML of your 
    // newMessage element with the following information:
    // <a> element that displays the "name" and links to the 
    // "email" (hint: use the mailto: prefix) - <span> element that displays the "message"
    newMessage.innerHTML = `<a href="mailto: ${email}" target="_blank" style="text-decoration: none;"><span><bold> ${name}</bold></span> <span><bold> wrote: ${message} </bold> </span><span> </span></a>`;
    messageList.appendChild(newMessage);

    // Create a new <button> element and store it in a variable named removeButton
    // Set the inner text to "remove"
    // Set the type attribute to "button"
    const removeButton = document.createElement("button");
    removeButton.innerHTML = "remove";
    removeButton.type = "button";
    //document.body.appendChild(removeButton);
    //Button - remove
  
    // Add an event listener to the removeButton element that handles the "click" event
    // Inside the callback function, find the button's parent element using DOM Traversal 
    // (hint: parentNode property) and store it in a variable named entry
    // Remove the entry element from the DOM (hint: remove method)
    removeButton.addEventListener("click", (e) => {
        const entry = e.target.parentNode;
        entry.remove();
     });
    
    // Append the removeButton to the newMessage element
    // hint: appendChild method
    newMessage.appendChild(removeButton);

    // Append the newMessage to the messageList element
    messageList.appendChild(newMessage);

    // Inside the callback function, on the very last line, 
    // add a new line of code to clear the form
    // hint: reset method
    messageForm.reset();
});
// (Optional) Hide the #messages section when the list is empty
const hideMessageSection = document.getElementById("messages");
//hideMessageSection.innerHTML = " ";


// (Optional) Create an "edit" button for each message entry that allows the user 
// to input a new/modified message



//-------------------------------------------------------------------------------------------------------------------------------

// 6.1 - Fetch GitHub Repositories:
// Create a new XMLHttpRequest object and store it in a variable named githubRequest
const githubRequest = new XMLHttpRequest();

// Call the open method on your githubRequest object and pass the necessary arguments
// method: the method of your request (in this case, "GET")
// url: the url of your request (in this case, "https://api.github.com/users/{GITHUB_USERNAME}/repos")
githubRequest.open("GET", "https://api.github.com/users/Karla1981/repos");

// Finally, call the send method on your githubRequest object to actually send the request
githubRequest.send();

// Handle Response from Server:
// Below the last line of code you just wrote, add a "load" event listener on your 
// githubRequest object and pass the necessary arguments
// 1. event: the event that is being handled (in this case, "load")
//  callback: the function that runs when this event occurs
// Inside the callback function you just created, parse the response and store it in a variable named repositories
//  hint: JSON.parse(this.response)
//  Log the value of repositories in the console
githubRequest.addEventListener("load", function () {
    const repositories = JSON.parse(this.response);
    //console.log("Repositories: ",repositories);------------------------------------------------------tooday

    // Save and refresh your browser
    // You should see your list of GitHub repositories logged in the console
    // Note: at this point, you have the response data but nothing is being displayed on the webpage itself

    // Display Repositories in List
    // Using "DOM Selection", select the #projects section by id and store it in a variable named projectSection
    const projectSection = document.getElementById("projects");
    //console.log("Project Section: ", projectSection)

    //  Using "DOM Selection", query the projectSection (instead of the entire document) to find the <ul> element and
    // store it in a variable named projectList
    const projectList = projectSection.querySelector("ul");
    //console.log("Project List: ", projectList);

    // Create a for loop to iterate over your repositories Array, starting at index 0
    for (let i = 0; i < repositories.length; i++){
        // console.log("Arraym: ", repositories[i])
        // Inside the loop, create a new list item (li) element and store it in a variable named project
        // hint: createElement method
        let project = document.createElement("li");
        project.innerText =  repositories[i].html_url;
        //repositories[i].name

        // On the next line, set the inner text of your project variable to the current Array element's name property
        // hint: access the Array element using bracket notation- Check here!

        // On the next line, append the project element to the projectList element
        // hint: appendChild method
        projectList.appendChild(project);
        console.log("Project: ", project);    

    }
    // Stretch Goals
    // (Optional) Transform your repository names into <a> tags 
    // that link to GitHub (hint: html_url property)
    // name: "intro-to-programming-asteroid"
    // html_url: "https://github.com/Karla1981/intro-to-programming-asteroid"
    // name: "intro-to-programming-section-5"
    // html_url: "https://github.com/Karla1981/intro-to-programming-section-5"


        const project_1 = document.createElement("a");
        project_1.href="https://github.com/Karla1981/intro-to-programming-asteroid";
        project_1.innerText = "intro-to-programming-asteroid";
        ///console.log(project_1);--------------------------------------------------------today
        const addToProjects = document.getElementById("projects");
        addToProjects.appendChild(project_1 );


        const project_2 = document.createElement("a");
        project_2.href="https://github.com/Karla1981/intro-to-programming-section-5";
        project_2.innerText = "intro-to-programming-section-5";
        ///console.log(project_2);--------------------------------------------------------today
        // const addToProjects2 = document.getElementById("proj");
        addToProjects.appendChild(project_2);

    // (Optional) Display additional information about your 
    // repositories (i.e. description, date, etc.)

    // (Optional) Customize the styling of your "Projects" section list

});

    // project.innerText = `<a href="https://github.com/Karla1981/intro-to-programming-asteroid" target="_blank">${repositories[i].html_url}</a>`;

    //`<a href="https://github.com/Karla1981/intro-to-programming-asteroid" target="_blank">project</a>`;
    // ${repositories[i].html_url} 

    // let anchor = document.createElement("a");// <a>
    // anchor.href="https://github.com/Karla1981/intro-to-programming-asteroid";
    // anchor.innerText = "intro-to-programming-asteroid";
    // console.log(anchor);
    // let addToProjects = document.getElementById("projects");
    // addToProjects.appendChild(anchor)

