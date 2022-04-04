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

const messageForm = document.querySelector('[name="leave_message"]')
const messageContainer = document.querySelector('[id="messages"]')

messageForm.addEventListener('submit', function(event){
    event.preventDefault()
    const userName = document.querySelector('[name="userName"]')
    const userEmail = document.querySelector('[name="userEmail"]')
    const userMessage = document.querySelector('[name="userMessage"]')

    const newMessage = document.createElement('li')
    newMessage.append(`${userName.value} with email: ${userEmail.value} sent: `)
    newMessage.append(userMessage.value)

    messageContainer.append(newMessage)
    console.log(userName.value, userEmail.value, userMessage.value)
})