console.log('day-2 task completion');

// function to fetch data from API
function fetchData() {
  // API
  let url = 'https://data.covid19india.org/data.json';

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network issue try again later!');
      } else {
        return response.json();
      }
    })
    .then((data) => {
      console.log('data fetched sucessfully');

      renderData(data);
    });
}

// function to render data on web
const renderData = (data) => {
  let tBody = document.querySelector('.tbody');

  for (let entries of data.cases_time_series) {
    let tr = document.createElement('tr');
    tr.innerHTML = `
    <tr>
      <th scope="row">${entries.date}</th>
      <td>${entries.dailyconfirmed}</td>
      <td>${entries.dailyrecovered}</td>
      <td>${entries.dailydeceased}</td>
      <td>${entries.totalconfirmed}</td>
    </tr>
    `;
    tBody.appendChild(tr);
  }
};

// calling function to perform fetching functionality
fetchData();

// API given by workshop faculties
// https://api.mfapi.in/mf
// https://api.coindesk.com/v1/bpi/currentprice.json
// https://data.covid19india.org/data.json  <-- task on this
