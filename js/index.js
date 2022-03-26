const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = (`&copy Dmitry Boyko ${thisYear}`);
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