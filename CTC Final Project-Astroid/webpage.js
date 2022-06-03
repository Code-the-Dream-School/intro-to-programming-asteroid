document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.querySelector('form[name=leave_message]');
    messageForm.addEventListener('submit',(event) => {
        event.preventDefault();

        const { name, email, message } = event.target;

        const messageSection = document.querySelector('#messages');
        const messageList = messageSection.querySelector('ul');

        // if hidden, show the "messages" section
      if (messageSection.style.display === 'none') {
        messageSection.style.display = 'block'
      }

        // create new message
      const newMessage = document.createElement('li')
      newMessage.classList.add('list__item')
      newMessage.innerHTML = `<div>
        <span class="strong">${message.value}</span>
        <p class="pMessage">from <a class="link" href="mailto:${email.value}">${name.value}</a> &nbsp;</p></div>`

      
        const BUTTON = {
            remove: 'remove',
        }

         // create remove button
      const removeButton = document.createElement('button');
      removeButton.innerText = BUTTON.remove;
      removeButton.type = 'button';
      removeButton.classList.add('button', 'button--danger');

      removeButton.addEventListener('click', (event) => {
        const entry = event.target.parentNode
        const list = entry.parentNode

        // if there are no other messages, hide the section
        if (list.children.length <= 1) {
          messageSection.style.display = 'none'
        }

        // remove entry from the list
        entry.remove();
      });

      newMessage.appendChild(removeButton);

      // add new message to the list
      console.log(newMessage);
      messageList.prepend(newMessage);

      // reset form
      event.target.reset();
    })

    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("currentYear").innerHTML = year;

    const skillsArray = [
        {
            'ability': 'JavaScript'
        },
        {
            'ability': 'CSS'
        },
        {
            'ability': 'HTML'
        }

    ]

    const list = document.querySelector('.list')
    
    const addList = (array, element) => {
        array.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.ability;
            element.appendChild(li);
        });
    }

    addList(skillsArray, list);

});