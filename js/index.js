/*
Created a paragraph element and assigned inner HTML as small copyright info text
Placed created paragraph at the specified footer loaction
*/
let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerHTML = `&copy; Marcus Hill ${thisYear}`
footer.insertBefore(copyright, footer.firstChild)



/*
Created an array of skills
Located where I want my list of skills to be by using desendant selector (#skills ul)
Using a for of loop I add each element of my skills array within a newly created list element
Added each list element with array value into the skills list
*/
let skills = ["HTML", "CSS", "JavaScript", "React.js", "Git", "Fetch API", ];
let skillsList = document.querySelector("#skills ul");
for (let skill of skills) {
  let newSkill = document.createElement("li");
  newSkill.textContent = skill;
  skillsList.append(newSkill);
}



//vairiables will be used in the next few functions
const messageSection = document.getElementById("messages")
const messageList = document.querySelector("#messages ul");



/*
Create a function that will check the number of messages in the message list and Hide the messages section if there are no messages to list
*/
let hideMessages = () => {
  if (messageList.children.length === 0){
    messageSection.style.display = "none"
  } else {
    messageSection.style.display = "block"
  }
}
hideMessages();



/*
Creating a message form that takes user input and returns it into the messages section as a list element
Remove button added to each list element giving ability to remove that list element
Edit button provides the user with an input field holing the text content within the span element of the list element.
The user can change the input field and press save to return a list itemp with different span content
*/
const messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener("submit", (e) => {

  //Does not refresh the page and keeps data within local file
  e.preventDefault();

  //create message template and put it within a list element
  let nameVal = e.target.name.value
  let emailVal = e.target.email.value
  let messageVal = e.target.message.value
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<div><span>Message: </span><span id = first>${messageVal}</span><span id = dashSpan> - </span><a href="mailto:${emailVal}">${nameVal}</a></div>`

  //Here is my remove button
  const removeButton = document.createElement("button")
  removeButton.textContent = "Remove"
  removeButton.type = "button"
  removeButton.classList.add("remove")
  removeButton.addEventListener("click", (e) => {
    newMessage.remove();
    hideMessages();
  })

  //Here is my edit button
  const editButton = document.createElement("button")
  editButton.textContent = "Edit"
  editButton.type = "button"
  editButton.classList.add("edit")
  editButton.addEventListener("click", (e) => {
    //When user clicks edit display an input field with the message as the value to be edited
    if (editButton.textContent === "Edit"){
      editButton.textContent = "save"
      li = e.target.parentNode
      div = li.firstElementChild
      span = li.querySelector("#first")
      input = document.createElement("input")
      input.type = "text"
      input.id = "new"
      input.value = span.textContent
      div.insertBefore(input, span)
      span.remove()
    }
    else if (editButton.textContent === "save"){
      editButton.textContent = "Edit"
      li = e.target.parentNode
      div = li.firstElementChild
      input = li.querySelector("#new")
      span = document.createElement("span")
      span.id = "first"
      span.textContent = input.value
      //If user saves with a blank input field it will remove the message
      //If user saves with a value in the input field it will update the message
      if(span.textContent !== ""){
        div.insertBefore(span, input)
        input.remove()
      } else {
        newMessage.remove(li);
        hideMessages();
      }
    }
  })

  //Create the message list with the new message!
  //hideMessages function is ran to display the message list after user submits a message
  newMessage.appendChild(editButton)
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  hideMessages();
  messageForm.reset();
})



/*
Allows navigation bar to change css class at a certain user scroll position
*/
const navBar = document.querySelector(".navigation");
const imageSection = document.getElementById("imageSection");

//Navigation bar class is based on user scroll position in reference to image height
window.addEventListener("scroll", (e) => {
  let imagePosition = imageSection.getBoundingClientRect().height;
  let navBarPosition = navBar.getBoundingClientRect().height;
  let displayNav = imagePosition - navBarPosition;
  if(window.scrollY > displayNav){
    //Show navigation background color and display photo and author name
    navBar.classList.remove("navOne");
    navBar.classList.add("navTwo");
  } else {
    //Navigation background is transparent and display of photo and author name is set to none
    navBar.classList.remove("navTwo");
    navBar.classList.add("navOne");
  }
})



/*
Light theme or Dark them button
*/
const theme = document.getElementById("lightDark");
const body = document.getElementById("content");
const headingTwo = document.getElementsByTagName("h2");
const navContent = document.querySelectorAll("nav li");
let navLink = (i) =>  navContent[i].firstChild;
let sunSvg = document.querySelector("#lightDark svg")
let hamSvg = document.querySelector("#hamburger svg")
let sunClick = sessionStorage.getItem("saveLightDarkTheme")!==0?sessionStorage.getItem("saveLightDarkTheme"):0;
changeThemeOnClick();
theme.addEventListener("click", (e) =>{
  //count the number of clicks
  sunClick++
  sessionStorage.setItem("saveLightDarkTheme", sunClick);
  changeThemeOnClick();
})

function changeThemeOnClick() {
  //odd sunClick runs ELSE even sunClick runs IF
  if(sunClick/2 === parseInt(sunClick/2)){

    //Make body background white and text color black
    body.classList.remove("dark", "white");
    body.classList.add("light", "black");

    //Ignoring the first h2 make all h2s black
    for (i = 1; i < headingTwo.length; i++){
      headingTwo[i].classList.remove("white");
      headingTwo[i].classList.add("black");
    }

    //Make navigation bar background white
    navBar.classList.remove("dark");
    navBar.classList.add("light");

    //Ignoring the first navigation list element and SVGs make all navigation list elements white
    for (i = 1; i < (navContent.length - 1); i++){
      navLink(i).classList.remove("whiteNav");
      navLink(i).classList.add("blackNav");
    }

    //Make the sun SVG black
    sunSvg.classList.remove("whiteNav");
    sunSvg.classList.add("blackNav");

    //Make the hamburger SVG black
    hamSvg.classList.remove("whiteNav");
    hamSvg.classList.add("blackNav");

  } else {

    //Make body background black and text color white
    body.classList.remove("light", "black");
    body.classList.add("dark", "white");

    //Ignoring the first h2 make all h2s white
    for (i = 1; i < headingTwo.length; i++){
      headingTwo[i].classList.remove("black");
      headingTwo[i].classList.add("white");
    }

    //Make navigation bar background black
    navBar.classList.remove("light");
    navBar.classList.add("dark");

    //Ignoring the first navigation list element and SVGs make all navigation list elements white
    for (i = 1; i < (navContent.length - 1); i++){
      navLink(i).classList.remove("blackNav");
      navLink(i).classList.add("whiteNav");
    }

    //Make the sun SVG white
    sunSvg.classList.remove("blackNav");
    sunSvg.classList.add("whiteNav");

    //Make the hamburger SVG white
    hamSvg.classList.remove("blackNav");
    hamSvg.classList.add("whiteNav");
  }
};


/*
Hamburger Navigation button
*/
const mobileNav = document.getElementById("hamburger");
const authorInfo = document.querySelector(".home");
let hamClick = 0;

mobileNav.addEventListener("click", (e) =>{

  //count the number of clicks
  hamClick ++;

  //First/odd click runs ELSE second/even click runs IF
  if(hamClick/2 === parseInt(hamClick/2)){

    //Hide navigation links
    for (i = 2; i < (navContent.length - 1); i++){
      navLink(i).classList.add("mobileOnly")
    }

    //Hide the sun SVG
    theme.classList.add("mobileOnly")

    //Smaller navigation size
    navBar.classList.remove("bigNav")
    navBar.classList.add("smallNav")

    //Dispaly author information in navTwo
    authorInfo.classList.remove("noAuthor")

  } else {

    //Display navigation Links
    for (i = 2; i < (navContent.length - 1); i++){
      navLink(i).classList.remove("mobileOnly")
    }

    //Dispaly the sun SVG
    theme.classList.remove("mobileOnly")

    //Larger navigation size
    navBar.classList.remove("smallNav")
    navBar.classList.add("bigNav")

    //Hide author information in navTwo
    authorInfo.classList.add("noAuthor")
  }
})


/*
Fetch GitHub API to create Project list
*/
const projectSection = document.getElementById("projects");
const projectList = projectSection.querySelector("ul");
const checkStatus = (res) =>{
  if (res.ok){
    return res
  } else {
    return Promise.reject(new Error(res.statusText))
  }
}

const repositoryData = (data) => {
  for (i = 0; i < data.length; i++){
    let projectItem = document.createElement("li");
    projectItem.innerHTML = `<a href = "${data[i].html_url}" target = "_blank"><h3>${data[i].name}</h3><p>${data[i].description}</p></a>`
    projectList.appendChild(projectItem)
  }
}

fetch('https://api.github.com/users/MarcusCHill/repos')
  .then(res => checkStatus(res))
  .then(response => response.json())
  .then(data => repositoryData(data))
  .catch(error => console.log("Looks like something went wrong with a request!", error))



/*
AJAX Method
*/
/*
  let githubRequest = new XMLHttpRequest();
  githubRequest.onload = function () {
      repositories = JSON.parse(githubRequest.response)
      for (i = 0; i < repositories.length; i++){
        let projectItem = document.createElement("li");
        projectItem.innerHTML = `<a href = "${repositories[i].html_url}" target = "_blank"><h3>${repositories[i].name}</h3><p>${repositories[i].description}</p></a>`
        projectList.appendChild(projectItem)
      }
  }
  githubRequest.open("GET", "https://api.github.com/users/MarcusCHill/repos");
  githubRequest.send();
*/
