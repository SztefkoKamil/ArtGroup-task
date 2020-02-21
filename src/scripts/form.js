'use strict';

if (!Array.from) Array.from = object => [].slice.call(object);

const donateBtns = Array.from(document.querySelectorAll('.form__donate-btn')),
      donateForm = document.querySelector('#donate-form'),
      inputName = document.querySelector('#input-name'),
      inputEmail = document.querySelector('#input-email'),
      inputPhone = document.querySelector('#input-phone'),
      inputStreet = document.querySelector('#input-street'),
      inputCity = document.querySelector('#input-city'),
      inputZip = document.querySelector('#input-zip'),
      fakeRodoCheckbox = document.querySelector('#fake-rodo-checkbox'),
      fakeRodoImage = document.querySelector('#fake-rodo-image');

let donateAmount = 50,
    rodoAccepted = false;

function removeDonateBtnsActiveClass() {
  donateBtns.map(btn => {
    btn.classList.remove('form__donate-btn--active');
  });
};

function activeDonateBtn(e) {
  removeDonateBtnsActiveClass();
  donateAmount = +e.target.attributes['data-amount'].value;
  e.target.classList.add('form__donate-btn--active');
};

function toggleRodoCheckbox() {
  rodoAccepted = !rodoAccepted;
  fakeRodoImage.classList.toggle('form__checked-image--hidden');
};

function checkInputs() {
  const namePattern = new RegExp('^[A-Z][a-z]{2,10} [A-Z][a-z]{2,15}$'),
        emailPattern = new RegExp('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$', 'img'),
        phonePattern = new RegExp('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$'),
        streetPattern = new RegExp('^(.*[^0-9]+) (([1-9][0-9]*)/)?([1-9][0-9]*[a-cA-C]?)$'),
        cityPattern = new RegExp('^([a-zA-Z\u0080-\u024F]+(?:. |-| |\'))*[a-zA-Z\u0080-\u024F]*$'),
        zipPattern = new RegExp('^[0-9]{2}-[0-9]{3}$');
  
  let validation = true;

  if(namePattern.test(inputName.value)) {
    inputName.classList.remove('form__input--invalid');
    inputName.nextElementSibling.classList.remove('form__input-error--visible');
  } else {
    inputName.classList.add('form__input--invalid');
    inputName.nextElementSibling.classList.add('form__input-error--visible');
    validation = false;
  }
  if(emailPattern.test(inputEmail.value)) {
    inputEmail.classList.remove('form__input--invalid');
    inputEmail.nextElementSibling.classList.remove('form__input-error--visible');
  } else {
    inputEmail.classList.add('form__input--invalid');
    inputEmail.nextElementSibling.classList.add('form__input-error--visible');
    validation = false;
  }
  if(phonePattern.test(inputPhone.value)) {
    inputPhone.classList.remove('form__input--invalid');
    inputPhone.nextElementSibling.classList.remove('form__input-error--visible');
  } else {
    inputPhone.classList.add('form__input--invalid');
    inputPhone.nextElementSibling.classList.add('form__input-error--visible');
    validation = false;
  }
  if(streetPattern.test(inputStreet.value)) {
    inputStreet.classList.remove('form__input--invalid');
    inputStreet.nextElementSibling.classList.remove('form__input-error--visible');
  } else {
    inputStreet.classList.add('form__input--invalid');
    inputStreet.nextElementSibling.classList.add('form__input-error--visible');
    validation = false;
  }
  if(cityPattern.test(inputCity.value) && inputCity.value.length >= 3) {
    inputCity.classList.remove('form__input--invalid');
    inputCity.nextElementSibling.classList.remove('form__input-error--visible');
  } else {
    inputCity.classList.add('form__input--invalid');
    inputCity.nextElementSibling.classList.add('form__input-error--visible');
    validation = false;
  }
  if(zipPattern.test(inputZip.value)) {
    inputZip.classList.remove('form__input--invalid');
    inputZip.nextElementSibling.classList.remove('form__input-error--visible');
  } else {
    inputZip.classList.add('form__input--invalid');
    inputZip.nextElementSibling.classList.add('form__input-error--visible');
    validation = false;
  }
  if(rodoAccepted) {
    fakeRodoCheckbox.classList.remove('form__input--invalid');
    fakeRodoCheckbox.parentElement.previousElementSibling.classList.remove('form__input-error--visible');
  } else {
    fakeRodoCheckbox.classList.add('form__input--invalid');
    fakeRodoCheckbox.parentElement.previousElementSibling.classList.add('form__input-error--visible');
    validation = false;
  }

  return validation;
};

function checkDonateForm(e) {
  e.preventDefault();
  const inputsValidation = checkInputs();
  if(!inputsValidation) return false;

  const formData = {
    amoutn: donateAmount,
    name: inputName.value,
    email: inputEmail.value,
    phone: inputPhone.value,
    street: inputStreet.value,
    city: inputCity.value,
    zip: inputZip.value,
    rodo: rodoAccepted
  };
  console.log(formData);

  // send data
};

const activeFormListeners = () => {
  donateBtns.map(btn => btn.addEventListener('click', activeDonateBtn) );
  fakeRodoCheckbox.addEventListener('click', toggleRodoCheckbox);
  donateForm.addEventListener('submit', checkDonateForm);
};

export { activeFormListeners };