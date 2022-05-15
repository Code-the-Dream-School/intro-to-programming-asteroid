// Animation for header
const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl .fromTo(hero, 1, {height: "0%"}, {height: "100%", ease: Power2.easeInOut})
     .fromTo(slider, 1.2, { x: "-100%"}, { x: "0%", ease: Power2.easeInOut },"-=1.2")
    .fromTo(headline, 1, { opacity: 0, x: 3 }, { opacity: 1, x: 0 }, "-=0.5");

// Insert Copyright Text in Footer
const today = new Date(2022, 2, 14);
const thisYear = today.getFullYear();

// Used DOM Selection to create a footer and paragragh
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `George Owusu ${thisYear}`;
footer.appendChild(copyright);

// Add Skills Section & loop to iterate over your `skills` Array
const skills = ['JavaScript', 'React', 'Git', 'Github', 'CSS', 'HTML'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for(let i = 0; i < skills.length; i++){
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

// DOM Manipulation
const form = document.getElementById('leaveMessage');
const input = form.querySelector('input');
const ul = document.getElementById('messageList');

// Handle Message Form Submit

form.addEventListener('submit', (e) => {
    // prevent the default refreshing behavior of the "submit" event
    e.preventDefault();

    // creates a new variables for each of the three form fields and retrieve the value from the event
    const name = e.target.elements.submitterName.value;
    console.log(name);
    const email = e.target.elements.email.value;
    console.log(email);
    const messages = e.target.elements.submitterMessage.value;
    console.log(messages);

    // Displays Messages in List
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> <span> left a message saying, "${messages}"</span>`

    const removeButton = document.createElement('button'); // remove button
    removeButton.textContent = 'remove';
    removeButton.type = "button"
    removeButton.addEventListener('click' , (e) => {
      const entry = button.parentNode;
      entry.remove();
    });

    const editButton = document.createElement('button'); // edit button
    editButton.textContent = 'edit';
    newMessage.appendChild(editButton);

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    
    form.reset(); // adds a new line of code to clear the form
  });                                 
  
  ul.addEventListener('click', (e) => { // edit handler
    if (e.target.tagName === 'BUTTON') {
      const button = e.target;
      const li = button.parentNode;
      const ul = li.parentNode;
      if (button.textContent === 'remove') {
      ul.removeChild(li);
      } else if (button.textContent === 'edit') {
        const span = li.firstElementChild;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;
        li.insertBefore(input, span);
        li.removeChild(span);
        button.textContent= 'save';
        } else if (button.textContent === 'save') {
        const input = li.firstElementChild;
        const span = document.createElement('span');
        span.textContent = input.value;
        li.insertBefore(span, input);
        li.removeChild(input);
        button.textContent = 'edit'; 
      }
    }
  });

// Fetch GitHub Repositories using AJAX

// const url = 'https://api.github.com/users/gkojunior/repos'
// const githubRequest = new XMLHttpRequest();
// githubRequest.onreadystatechange = function () {
//   if (githubRequest.readyState === 4 && githubRequest.status === 200) {     
//   githubRequest.responseText
//   }
// };
// githubRequest.open('GET', url);
// githubRequest.send();


// //Handle Response from Server
// githubRequest.addEventListener('load', function () {
//   const repositories = JSON.parse(this.response);
//   console.log(repositories)

//   const projectSection = document.getElementById('projects');
//   const projectList = projectSection.querySelector('ul');
//   //   Display Repositories in List
//   for (let i = 0; i <= repositories.length; i++) {
//     const project = document.createElement('li');
//     project.innerText = repositories[0].name
//     projectList.appendChild(project);
//   }
// });

// Fetch GitHub Repositories using fetch
const url = 'https://api.github.com/users/gkojunior/repos'
fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const projectSection = document.getElementById('projects');
        const projectList = projectSection.querySelector('ul');
    
        //   Display Repositories in List
        for (let i = 0; i < data.length; i++) {
        const project = document.createElement('li');
        project.innerText = data[i].name
        projectList.appendChild(project);
        }
      })

  
