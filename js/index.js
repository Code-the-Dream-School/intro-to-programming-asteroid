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
const footer = document.querySelector('footer');
console.log(footer);

// Create a new paragraph (p) element and store it in a variable named copyright
// hint: createElement method
let copyright = document.createElement('p');

// Set the inner HTML of your copyright element to display your name and the current year
// hint: use thisYear variable from earlier
copyright.innerHTML = "Karla Flores " + thisYear;

// Using "DOM Manipulation", append the copyright element to the footer
// hint: appendChild method
document.querySelector('footer').appendChild(copyright);
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
    console.log(skills[i]); 
    let skill = document.createElement('li');
    
    // On the next line, set the inner text of your skill variable to the value of the current Array element
    // hint: access the Array element using bracket notation
    skill.innerHTML = skills[i];

    // On the next line, append the skill element to the skillsList element
    // hint: appendChild method
    skillsList.appendChild(skill);
}








