console.log('Day-1 task completion....');

let data = {
  Ahmedabad: [1600, 1500, 2],
  Surat: [230, 100, 9],
  Vapi: [2000, 2100, 1],
};

let tBody = document.querySelector('.tbody');

for (let keys in data) {
  tBody.innerHTML += `
  <tr>
      <th scope="row">${keys}</th>
      <td>${data[keys][0]}</td>
      <td>${data[keys][1]}</td>
      <td>${data[keys][2]}</td>
  </tr>
  `;
}
