import casesTimeSeries from './data';

function App() {
  return (
    <div className="App">
      {/* heading starts */}
      <h1 className="text-3xl my-5 font-bold capitalize text-center text-indigo-600">
        Rendering static Covid data
      </h1>
      {/* heading ends */}
      {/* table starts  */}
      <div className="data-container container mx-auto">
        <table className="w-full border text-left my-10">
          {/* thead starts */}
          <thead>
            <tr className="capitalize text-lg font-semibold bg-indigo-600 text-white">
              <th className="p-2 rounded-lg rounded-r-none rounded-b-none">
                date
              </th>
              <th className="p-2">new cases</th>
              <th className="p-2">cases recovered</th>
              <th className="p-2 rounded-lg rounded-l-none rounded-b-none">
                deaths
              </th>
            </tr>
          </thead>
          {/* thead ends */}
          {/* tbody starts */}
          <tbody>
            {casesTimeSeries.map((elem, index) => {
              return (
                <tr className="font-semibold" key={index}>
                  <td className="p-2 text-indigo-600">{elem.date}</td>
                  <td className="p-2">{elem.dailyconfirmed}</td>
                  <td className="p-2 text-green-600">{elem.dailyrecovered}</td>
                  <td className="p-2 text-red-600">{elem.dailydeceased}</td>
                </tr>
              );
            })}
          </tbody>
          {/* tbody ends */}
        </table>
      </div>
      {/* table ends  */}
    </div>
  );
}

export default App;
