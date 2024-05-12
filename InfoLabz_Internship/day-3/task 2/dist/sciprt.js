console.log('Day-3 task-2 running');

// selecting elements
let form = document.querySelector('form');

let name = form.children[0];
let email = form.children[2];
let phoneNo = form.children[4];
let address = form.children[6];
let genderMale = form.children[8];
let genderFemale = form.children[10];
let city = form.children[13];

let btn = document.querySelector('.btn');

// Adding event listner
btn.addEventListener('click', (event) => {
  // to stop form submission
  event.preventDefault();

  let displayerBox = document.querySelector('.displayer');

  if (genderMale.checked) {
    displayerBox.innerHTML = `
        <span class="w-[50%] py-2">Name is : ${name.value}</span>
        <span class="w-[50%] py-2">Email is : ${email.value}</span>
        <span class="w-[50%] py-2">Phone-no is : ${phoneNo.value}</span>
        <span class="w-[50%] py-2">Address is : ${address.value}</span>
        <span class="w-[50%] py-2">Gender is : ${genderMale.value}</span>
        <span class="w-[50%] py-2">city is : ${city.value}</span>
    `;
  }
  if (genderFemale.checked) {
    displayerBox.innerHTML = `
    <span class="w-[50%] py-2">Name is : ${name.value}</span>
    <span class="w-[50%] py-2">Email is : ${email.value}</span>
    <span class="w-[50%] py-2">Phone-no is : ${phoneNo.value}</span>
    <span class="w-[50%] py-2">Address is : ${address.value}</span>
    <span class="w-[50%] py-2">Gender is : ${genderFemale.value}</span>
    <span class="w-[50%] py-2">city is : ${city.value}</span>
`;
  }
});
