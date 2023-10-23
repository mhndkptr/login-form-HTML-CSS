const toRegistrationBtn = document.querySelector('.toRegistrationBtn');
const toLoginBtn = document.querySelector('.toLoginBtn');
const formLR = document.querySelector('.formLR');
const formLRContainer = document.querySelector('.formLRContainer');

toRegistrationBtn.addEventListener('click', function() {
    formLRContainer.style.transform = 'rotateY(180deg)';
    formLR.style.height = '550px';
});

toLoginBtn.addEventListener('click', function() {
    formLRContainer.style.transform = 'rotateY(0deg)';
    formLR.style.height = '430px';
});