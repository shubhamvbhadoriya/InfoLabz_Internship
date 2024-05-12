console.log('Day-3 script running..');

// function to fetch data from API
const fetchData = () => {
  // API
  let url = 'https://data.covid19india.org/data.json';

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        return new Error('Something went wrong check your connection');
      } else {
        return response.json();
      }
    })
    .then((data) => {
      renderData(data);
    });
};

// function to render fetched data on web
const renderData = (data) => {
  let tBody = document.querySelector('.tbody');
  let prevConfirmed = 0;
  let prevRecovered = 0;

  for (let entries of data.cases_time_series) {
    let tr = document.createElement('tr');

    // conditional rendering...
    if (prevConfirmed < entries.dailyconfirmed) {
      let difference = entries.dailyconfirmed - prevConfirmed;
      tr.innerHTML = `
    <td>${entries.date}</td>
    <td>${entries.dailyconfirmed} &nbsp; <span style="color: red;">(+${difference})</span></td>
    <td>${entries.dailyrecovered}</td>
    `;
    } else if (prevRecovered < entries.dailyrecovered) {
      let difference = entries.dailyrecovered - prevRecovered;
      tr.innerHTML = `
    <td>${entries.date}</td>
    <td>${entries.dailyconfirmed} </td>
    <td>${entries.dailyrecovered} &nbsp; <span style="color:green;">(+${difference})</span></td>
    `;
    } else {
      tr.innerHTML = `
        <td>${entries.date}</td>
        <td>${entries.dailyconfirmed} </td>
        <td>${entries.dailyrecovered}</td>
        `;
    }

    tBody.appendChild(tr);

    prevConfirmed = entries.dailyconfirmed;
    prevRecovered = entries.dailyrecovered;
  }
};

// calling function to perform operations
fetchData();
