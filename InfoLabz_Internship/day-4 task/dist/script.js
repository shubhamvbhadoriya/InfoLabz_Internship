console.log('Day-4 task running...');

// fetching elements
let tBody = document.querySelector('.tbody');
let btn = document.querySelector('button');
let inputPincode = document.querySelector('input');

// adding event listner to form
btn.addEventListener('click', (event) => {
  // to stop form submission process
  event.preventDefault();

  let fetchedPincode = inputPincode.value;
  if (fetchedPincode === '') {
    let tr = document.createElement('tr');
    let classesOfTr = ['border', 'border-slate-400'];
    tr.classList.add(...classesOfTr);
    tr.innerHTML = `
    <td class="text-center text-red-600 font-bold" colspan="4">Pincode field shouldn't be empty</td>
    `;

    tBody.append(tr);

    console.log("code shouldn't be empty");
    inputPincode.value = '';
  } else {
    console.log('pincode fetched and passing to fetchData()');
    fetchData(fetchedPincode);
  }
});

// fetching data from API as per pincode
const fetchData = (pincode) => {
  let url = `https://api.postalpincode.in/pincode/${Number(pincode)}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        console.log('code is wrong');
        return new Error('something Invalid please try again');
      } else {
        return response.json();
      }
    })
    .then((data) => {
      if (data[0].PostOffice == null) {
        // clearing tBody for new data rendering...
        tBody.innerHTML = ' ';

        let tr = document.createElement('tr');
        let classesOfTr = ['border', 'border-slate-400'];
        tr.classList.add(...classesOfTr);
        tr.innerHTML = `
        <td class="text-center text-red-600 font-bold" colspan="4">Pincode is not valid please enter valid pincode</td>
        `;

        tBody.append(tr);

        console.log('Code is not valid please enter valid pincode');
        inputPincode.value = '';
      } else {
        // passing data to render data function to render on web
        console.log('Data fecthed from API now passing to renderData()');
        renderData(data);
      }
    });
};

const renderData = (data) => {
  // clearing tBody for new data rendering...
  tBody.innerHTML = ' ';

  for (let items in data[0].PostOffice) {
    let tr = document.createElement('tr');
    let classesOfTr = ['border', 'border-slate-400'];
    tr.classList.add(...classesOfTr);
    tr.innerHTML = `
    <td class="p-1">${Number(items) + 1}</td>
    <td class="p-1 text-left">${data[0].PostOffice[items].Name}</td>
    <td class="p-1">${data[0].PostOffice[items].District}</td>
    <td class="p-1">${data[0].PostOffice[items].Pincode}</td>
    `;
    tBody.append(tr);
  }
  console.log('All data rendered');
  inputPincode.value = '';
};
