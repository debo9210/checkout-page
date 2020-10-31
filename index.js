const form = document.querySelector('.form');
const email = document.querySelector('#email');
const emailError = document.querySelector('.emailError');
const phone = document.querySelector('#phone');
const phoneError = document.querySelector('.phoneError');
const name = document.querySelector('#name');
const nameError = document.querySelector('.nameError');
const address = document.querySelector('#address');
const addressError = document.querySelector('.addressError');
const city = document.querySelector('#city');
const cityError = document.querySelector('.cityError');
const postalCode = document.querySelector('#postal-code');
const postalCodeError = document.querySelector('.postalCodeError');
const btn = document.querySelector('.btn');

const increase = document.querySelectorAll('.increase');
const decrease = document.querySelectorAll('.decrease');
const numIncrement = document.querySelectorAll('.numIncrement');

// form.onsubmit = submit;

// function submit(e){
//     e.preventDefault();
//     console.log('hey');
// }


// Form functionality
const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

const checkEmail = ()=>{
    if(emailRegex.test(email.value)){
        return;
    }else if(email.value === ''){
        emailError.textContent = 'Email address is required';
    }
    else{
        emailError.textContent = 'Email must be valid';
    }
};

const checkPhone = ()=>{
    if(phoneRegex.test(phone.value)){
        return;
    }else if(phone.value === ''){
        phoneError.textContent = 'Phone number is required';
    }else{
        phoneError.textContent = 'Phone number must be in the correct format';
    }
};

const checkName = ()=>{
    if(name.value === ''){
        nameError.textContent = 'Name is required';
    }else{
        return;
    }
};

const checkAddress = ()=>{
    if(address.value === ''){
        addressError.textContent = 'Address is required';
    }else{
        return;
    }
};

const checkCity = ()=>{
    if(city.value === ''){
        cityError.textContent = 'City is required';
    }else{
        return;
    }
};

const checkPostalCode = ()=>{
    if(postalCode.value === ''){
        postalCodeError.textContent = 'Postal Code is required';
    }else{
        return;
    }
};

form.addEventListener('submit', (e)=>{
    e.preventDefault();
});

btn.addEventListener('click', ()=>{
    checkEmail();
    checkPhone();
    checkName();
    checkAddress();
    checkCity();
    checkPostalCode();

    if(email.value !== '' && phone.value !== '' && name.value !== '' && address.value !== '' && city.value !== '' && postalCode.value !== ''){
        alert('Success: Your information has been recieved.');
    }
});


//Order functionality
increase[0].addEventListener('click', ()=>{
    let num = Number(numIncrement[0].textContent);
    function inc(){
        num ++;
        return num;
    }
    inc();
    numIncrement[0].textContent = num;
});

decrease[0].addEventListener('click', ()=>{
    let num = Number(numIncrement[0].textContent);
    function dec(){
        num --;
        return num;
    }
    dec();
    if(numIncrement[0].textContent === '0') return;
    numIncrement[0].textContent = num;
});

increase[1].addEventListener('click', (e)=>{
    let num = Number(numIncrement[1].textContent);
    function inc(){
        num ++;
        return num;
    }
    inc();
    numIncrement[1].textContent = num;
});

decrease[1].addEventListener('click', (e)=>{
    let num = Number(numIncrement[1].textContent);
    function dec(){
        num --;
        return num;
    }
    dec();
    if(numIncrement[1].textContent === '0') return;
    numIncrement[1].textContent = num;
});




