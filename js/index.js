/*
Created a paragraph element and assigned inner HTML as small copyright info text
Placed created paragraph at the specified footer loaction
*/
let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerHTML = `<small> &copy; Marcus Hill ${thisYear} </small>`
footer.append(copyright)

/*
Created an array of skills
Located where I want my list of skills to be by using desendant selector (#skills ul)
Using a for of loop I add each element of my skills array within a newly created list element
Added each list element with array value into the skills list
*/
let skills = ["HTML", "CSS", "Javascript"];
let skillsList = document.querySelector("#skills ul");
for (let skill of skills) {
  let newSkill = document.createElement("li");
  newSkill.textContent = skill;
  skillsList.append(newSkill);
}
