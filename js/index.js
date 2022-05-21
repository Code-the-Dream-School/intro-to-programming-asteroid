const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
const skills = ['JavaScript', 'CSS', 'HTML', 'JQuery', 'NodeJS'];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');

for(let i = 0; i < skills.length; i++){
  let skill = document.createElement('li');
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}

copyright.innerHTML = `Dahlak Keleta ${thisYear}`;
footer.appendChild(copyright);
