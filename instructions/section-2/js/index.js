const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');

copyright.innerHTML = (`&copy Armani Johnson ${thisYear}`);
footer.appendChild(copyright);

const skills = ["HTML", "CSS", "Javascript"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');
for (i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
};
//DOM
const messageForm = document.getElementsByName("leave_message")[0];
console.log(messageForm);
messageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const name = event.target.name;
    const email = event.target.email;
    const message = event.target.message;

    console.log(name.value, email.value, message.value);

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href = "mailto:${email.value}" target "_blank"> ${name.value}</a><span> wrote: ${message.value} </span>`

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';

    removeButton.type = 'button'

    removeButton.addEventListener('click', (event) => {
        const entry = event.target.parentNode
        entry.remove()
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();  
});


//intersection observer
// window.addEventListener('DOMContentLoaded', setup); 

// function setup() {
//     const options = {
//         rootMargin: '0px 0px -200px 0px'
//     }

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if(entry.isIntersecting) {
//                 entry.target.classList.add('show');
//                 observer.unobserve(entry.target);
//             } else {
//                 return;
//             }
//         })
//     }, options);

//     //for h2s
//     const comeIn = document.querySelectorAll('h2');
//     comeIn.forEach(h2 => observer.observe(h2)); 
//     //for img
//     const image = document.querySelectorAll('img');
//     image.forEach(img => observer.observe(img));
// };

//AJAX 

const githubRequest = new XMLHttpRequest();

githubRequest.open('GET', 'https://api.github.com/users/Armanchi/repos');

githubRequest.send();

githubRequest.addEventListener('load', function (){
    const repositories = JSON.parse(this.response)
    console.log(repositories);
});

const projectSection = document.querySelector('#projects'); 
const projectList = projectSection.querySelector('ul');
for (let i = 0; repositories.length; i++) {
    const project = createElement('li')
    project.innerHTML = repositories.name
    projectList.appendChild(project);

}



// intersection observer
// window.addEventListener('DOMContentLoaded', setup); 

// function setup() {
//     const options = {
//         rootMargin: '0px 0px -200px 0px'
//     }

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if(entry.isIntersecting) {
//                 entry.target.classList.add('show');
//                 observer.unobserve(entry.target);
//             } else {
//                 return;
//             }
//         })
//     }, options);

//     //for h2s
//     const comeIn = document.querySelectorAll('h2');
//     comeIn.forEach(h2 => observer.observe(h2)); 
//     //for img
//     const image = document.querySelectorAll('img');
//     image.forEach(img => observer.observe(img));
// };