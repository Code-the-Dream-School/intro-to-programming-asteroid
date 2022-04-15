/* Footer */
const today     =   new Date();
const thisYear  =   today.getFullYear();
const footer    =   document.querySelector("footer");
const copyright =   document.createElement("p");

copyright.textContent = `Lena Zhdanko ${thisYear}`;
footer.appendChild(copyright);

/* Skills*/
const skills = ['HTML', 'CSS', 'JavaScript'];
const skillsSection = document.getElementById ('skills');
const skillsList = skillsSection.querySelector('ul');

for (let txt of skills) {
    skill = document.createElement('li');
    skill.textContent = txt;
    skillsList.appendChild(skill);
}