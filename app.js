const body = document.body

document.body.addEventListener('click', () => {
    console.log('You click the body')
    body.innerHTML = '<h1>Hello World!</h1>';
});