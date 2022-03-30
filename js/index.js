const today = new Date(2022, 2, 14);
const thisYear = today.getFullYear();

const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `George Owusu ${thisYear}`;
footer.appendChild(copyright);

const skills = ['JavaScript', 'Github','HTML', 'CSS'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for(let i = 0; i < skills.length; i++){
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.getElementById('leaveMessage');

messageForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const name = e.target.name;
    const email = e.target.email;
    const message = e.target.message;
    
    console.log(name);
    console.log(email);
    console.log(message);

    const messageSection = document.getElementById('message');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = '<span><a href="mailto:gkojunior@gmail.com">Email</a></span>';
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    input.type = 'button';

    document.getElementById("leaveMessage").reset();
});

removeButton.addEventListener('click' , (e) => {
    const entry = button.parentNode;
    entry.remove();
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
});
