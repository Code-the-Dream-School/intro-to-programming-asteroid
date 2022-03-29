const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');

copyright.innerHTML = (`&copy Armani Johnson ${thisYear}`);
footer.appendChild(copyright);

const skills = ["HTML", "CSS", "Javascript"];
const skillsSection = document.querySelector('skills');
const skillsList = document.querySelector('ul');
for (i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}


