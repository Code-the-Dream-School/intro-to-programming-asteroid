const today = newDate();

const thisYear = today.getFullYear();

const footer = document.querySelector('footer');

const copyright = document.createElement('p');

copyright.innerHTML = "Jennifer Tellez" + thisYear;
   console.log(footer); 
footer.appendChild(copyright);