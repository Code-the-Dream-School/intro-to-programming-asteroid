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
    skills[i];
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
