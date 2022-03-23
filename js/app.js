// const body = document.body

// document.body.addEventListener('click', () => {
//     console.log('You click the body')
//     body.innerHTML = '<h1>Hello My New World!</h1>';
// });

const butnUpdate = document.getElementById('btn-main');
butnUpdate.addEventListener('click', () => {
    headline.style.border = 'solid 2px red';
    headline.style.fontSize = '60px';
});

const headline = document.getElementById('headline');
//headline.style.border = 'solid 2px red';
