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







