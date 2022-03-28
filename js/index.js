const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Nuriye ${thisYear}`;
footer.appendChild(copyright);

const skills = ['HTML','CSS','JavaScript','Git','GitHub'];
const skillsSection = document.getElementById('skills');
const skillList = skillsSection.querySelector('ul');
for(i=0; i<skills.length; i++){
    item =document.createElement('li')
    item.textContent = skills[i]
    skillList.append(item);
}