const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');

const skills = ['JavaScript - ', 'CSS - ', 'HTML -', 'JQuery - ', 'NodeJS - ', 'React/ReactJS/native - ', 'Redux - ', 'Express - ', 'MongoDB - ', 'MySQL/noSQL '];
const skillsSection = document.getElementById('skills');
console.log(skillsSection);
//const skillsList = skillsSection.querySelector('ul');

for(let i = 0; i < skills.length; i++){
  let skill = document.createElement('div');
  skill.innerHTML = skills[i];
  //console.log(skill);
  skillsSection.appendChild(skill);
}
const messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = event.target.name;
  const email = event.target.email;
  const message = event.target.message;
  console.log(name, email, message);

const messageSection = document.getElementById("messages");
const messageList = messageSection.querySelector("ul");
const newMessage = document.createElement("li");
newMessage.innerHTML = `<a href=mailto: ${email.value} target='_blank'> ${name.value}</a> <span> wrote: ${message.value} </span>`;

const removeButton = document.createElement('button');
removeButton.innerHTML = "remove";
removeButton.setAttribute('type', 'button');

removeButton.addEventListener('click', (e) => {
  const entry = newMessage.querySelector('button').parentNode;
  entry.remove();
});

newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);

  messageForm.reset();
});

copyright.innerHTML = `Dahlak Keleta ${thisYear}`;
footer.appendChild(copyright);

let githubRequest = new XMLHttpRequest();
githubRequest.open('GET', 'https://api.github.com/users/dahlak76/repos');
githubRequest.send();
githubRequest.addEventListener('load', function() {
  var repositories = JSON.parse(this.response);
  console.log(repositories);
//});
let projectSection = document.getElementById('projects');
let projectList = projectSection.querySelector('ul');

for(let i = 0; i < repositories.length; i++){
  let project = document.createElement('li');
  project.innerHTML = repositories[i].name;
  projectList.appendChild(project);
}
});

fetch('https://api.github.com/users/dahlak76/repos')
.then(response => response.json())
.then(load => {
  const projectSection = document.getElementById("projects");
  const projectList= projectSection.querySelector("ul");
  for (let i = 0; i < load.length; i++) {
      const project = document.createElement("li");
      project.innerText = load[i].name;
      projectList.appendChild(project);
  }   
})