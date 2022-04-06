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

