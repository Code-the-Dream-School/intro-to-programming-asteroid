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
// DOM Manipulation

const form = document.getElementById('leaveMessage');
const input = form.querySelector('input');
const ul = document.getElementById('messageList');

// Handle Message Form Submit

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = e.target.elements.submitterName.value;
    const email = e.target.elements.email.value;
    const messages = e.target.elements.submitterMessage.value;
    console.log(name);
    console.log(email);
    console.log(messages);

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a>`

    const span = document.createElement('span');
    span.textContent = ` left a message saying, "${messages}" `;
    newMessage.appendChild(span)

    const editButton = document.createElement('button');
    editButton.textContent = 'edit';
    newMessage.appendChild(editButton);
    messageList.appendChild(newMessage);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    removeButton.type = "button"

    removeButton.addEventListener('click' , (e) => {
      const entry = button.parentNode;
      entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    
    form.reset(); // resets form
  });                                 
  
  ul.addEventListener('click', (e) => { // edit handler
    if (e.target.tagName === 'BUTTON') {
      const button = e.target;
      const li = button.parentNode;
      const ul = li.parentNode;
      if (button.textContent === 'remove') {
      ul.removeChild(li);
      } else if (button.textContent === 'edit') {
        const span = li.firstElementChild;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;
        li.insertBefore(input, span);
        li.removeChild(span);
        button.textContent= 'save';
        } else if (button.textContent === 'save') {
        const input = li.firstElementChild;
        const span = document.createElement('span');
        span.textContent = input.value;
        li.insertBefore(span, input);
        li.removeChild(input);
        button.textContent = 'edit'; 
      }
    }
  });
