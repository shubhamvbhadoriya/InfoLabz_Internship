// <!--- REQUIREMENTS ===>
// - Allow user to input date in text box.
// - On click of submit, It should display number of new cases and deaths occurred on that day.
// - Check below reference output.
// - If Field is blank print message : Please enter date instead of table.
// - If Date not matched: print date not found instead of table.
// -->

console.log('Assignment-1 task-1 running...');
// fetching elements
let btn = document.querySelector('button');
let inputDate = document.querySelector('input');
let adContainer = document.querySelector('.ad-container');

// adding event listner to form btn
btn.addEventListener('click', (event) => {
  event.preventDefault();
  let inputValue = inputDate.value;
  if (inputValue === '') {
    adContainer.innerHTML = '';
    adContainer.innerHTML = `
    <div class="alert-box text-red-600 font-semibold">
        <span class="text-2xl">Please enter date don't leave it empty!!</span>
    </div>
    `;
    console.log('date is empty');
  } else {
    fecthData(inputValue.toLowerCase());
  }
});

// function to fetch data from API
const fecthData = (date) => {
  let url = 'https://data.covid19india.org/data.json';
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        return new Error('Enter valid date');
      } else {
        return response.json();
      }
    })
    .then((data) => {
      renderData(data, date);
    });
};

// render result/data
const renderData = (data, date) => {
  let flag = 0;
  for (let item in data.cases_time_series) {
    let APIDate = data.cases_time_series[item].date.toLowerCase();

    // conditional rendering
    if (date === APIDate) {
      let casesConfirmed = data.cases_time_series[item].dailyconfirmed;
      let casesDeceased = data.cases_time_series[item].dailydeceased;
      adContainer.innerHTML = '';
      adContainer.innerHTML = `
      <table class="w-full">
        <tr class="text-left">
            <th class="p-2 border border-slate-300">New Cases (${date})</th>
            <td class="p-2 border border-slate-300">${casesConfirmed}</td>
        </tr>
        <tr class="text-left">
            <th class="p-2 border border-slate-300">New Deaths (${date})</th>
            <td class="p-2 border border-slate-300">${casesDeceased}</td>
        </tr>
      </table>
      `;
      flag = 1;
      console.log('Date found and rendered successfully');
      break;
    } else {
      flag = 0;
    }
  }

  if (flag === 0) {
    adContainer.innerHTML = '';
    adContainer.innerHTML = `
    <div class="alert-box text-red-600 font-semibold">
        <span class="text-2xl">Date not found Enter valid date!!</span>
    </div>
    `;
    console.log('date not found');
  }
};
