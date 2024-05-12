console.log('Assignment-1 task-2 running...');

// fetching elements
let btn = document.querySelector('button');
let inputCode = document.querySelector('input');
let adContainer = document.querySelector('.ad-container');

// adding event listner to btn
btn.addEventListener('click', (event) => {
  event.preventDefault();
  let userSchemeCode = inputCode.value;
  if (userSchemeCode === '') {
    adContainer.innerHTML = '';
    adContainer.innerHTML = `
    <div class="red-signal text-2xl text-red-600">
        <span>scheme shouldn't be empty or nor a NAN</span>
    </div>
    `;
    console.log('input is empty or a string value');
  } else {
    fetchData(Number(userSchemeCode));
  }
});

// function to fetch data from API
const fetchData = (userSchemeCode) => {
  let url = 'https://api.mfapi.in/mf';

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        return new Error('please check internet connection');
      } else {
        return response.json();
      }
    })
    .then((data) => {
      renderData(data, userSchemeCode);
    });
};

// func to render data/results
const renderData = (data, userSchemeCode) => {
  let flag = 0;
  for (let item of data) {
    // conditional rendering
    if (userSchemeCode === item.schemeCode) {
      adContainer.innerHTML = ' ';
      adContainer.innerHTML = `
      <div class="green-signal text-2xl">
        <span>${item.schemeName} - </span>
        <span class="text-green-600">${item.schemeCode}</span>
      </div>
      `;
      flag = 1;
      console.log('scheme found and rendered successfully');
      break;
    }
  }

  if (flag === 0) {
    adContainer.innerHTML = '';
    adContainer.innerHTML = `
    <div class="red-signal text-2xl text-red-600">
        <span>scheme not found!!</span>
    </div>
    `;
    console.log('scheme not found!!');
  }
};
