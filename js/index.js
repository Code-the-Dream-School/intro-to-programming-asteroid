const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = (` &copy Dmitry Boyko ${thisYear}`);
copyright.style.color = "lightblue";
copyright.style.letterSpacing = '.12rem';
footer.appendChild(copyright);

const skillsSection = document.getElementById('skills');
const skillList = skillsSection.querySelector('ul')
const skills =['HTML', 'JS', 'Python']
for ( i = 0; i < skills.length; i ++ ) {
    var item = document.createElement('li');
    item.textContent = skills[i]
    skillList.append(item)
};
skillList.querySelector('li').textContent = "Cypress"

const messageForm = document.querySelector('[name="leave_message"]')
const messageContainer = document.querySelector('[id="messages"]')

messageForm.addEventListener('submit', function(event){
    event.preventDefault()
    const userName = document.querySelector('[name="userName"]')
    const userEmail = document.querySelector('[name="userEmail"]')
    const userMessage = document.querySelector('[name="userMessage"]')

    const newMessage = document.createElement('li')
    newMessage.append(`${userName.value} with email: ${userEmail.value} sent: `)
    newMessage.append(userMessage.value, ' ')
    messageForm.reset()

    
    const removeButton = document.createElement('button')
    removeButton.innerText = 'Remove'
    removeButton.type = 'button'
    
    removeButton.addEventListener('click', (event) => {
    const entry = event.target.parentNode
    entry.remove()
    })

    messageContainer.append(newMessage)
    newMessage.appendChild(removeButton)
    
    
    console.log(userName.value, userEmail.value, userMessage.value)
})

function scrollTo(hash) {
    location.hash = "#" + hash;
}

fetch('https://api.github.com/users/Dmitry-Boyko/repos') 
  .then((response) => {
    console.log("observed: ", response);
    return response.json(); 
  })
  .then((repositories) => {
    let projectSection = document.getElementById('projects');
    let projectList = projectSection.querySelector('ul');

    console.log(repositories)
    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement('li');
      let linkProject = document.createElement("a");
      project.className = "project-li";
      linkProject.className = "project-link";
      linkProject.href = repositories[i].html_url;
      linkProject.target = "_blank";
      linkProject.innerText = repositories[i].name;
      console.log(project);
      projectList.appendChild(project);
      project.appendChild(linkProject);
    }
  }
)
.catch(error => console.error(error));
  