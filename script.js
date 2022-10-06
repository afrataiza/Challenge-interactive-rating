const button = document.querySelector('button');
const ratingContainer = document.querySelector ('.rating-container');
const thanksContainer = document.querySelector ('.thanks-container');
const inputs = document.querySelectorAll('input');
const span = document.querySelector('.message');
const submit = document.querySelector('.submit');
const loader = document.querySelector('.loader');
let rate = '';

inputs.forEach((input) => {
    input.addEventListener('change', () => {
        button.disabled = false;
        rate = input.value;
    })
})

button.addEventListener('click', () => {
   submit.innerText = '';
   loader.style.display = 'block';
    setTimeout(() => {
        span.innerText = `You selected ${rate} out of 5`
        ratingContainer.style.display = 'none';
        thanksContainer.style.display = 'flex';
    }, 3000);
    
})