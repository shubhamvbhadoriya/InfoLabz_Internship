import { React, useEffect, useState } from 'react';
import Card from './components/Card.jsx';

function App() {
  const [myData, setApiData] = useState([]);

  useEffect(() => {
    return fetchValue();
  });

  // fetching value from the select input option
  const fetchValue = () => {
    let selectList = document.querySelector('.select-list');

    // conditional rendering
    if (selectList.value === 'all') {
      fetchApiData('https://inshorts.me/news/all?offset=0&limit=21');
    } else if (selectList.value === 'top') {
      fetchApiData('https://inshorts.me/news/top?offset=0&limit=21');
    } else if (selectList.value === 'trending') {
      fetchApiData('https://inshorts.me/news/trending?offset=0&limit=21');
    } else if (selectList.value === 'science') {
      fetchApiData('https://inshorts.me/news/topics/science');
    } else if (selectList.value === 'entertainment') {
      fetchApiData('https://inshorts.me/news/topics/entertainment');
    } else if (selectList.value === 'sports') {
      fetchApiData('https://inshorts.me/news/topics/sports');
    } else {
      console.log(`ERROR : something is worng!!`);
    }
  };

  // fetching API value
  const fetchApiData = (api) => {
    console.log(api);
    fetch(api)
      .then((response) => {
        if (!response.ok) {
          return new Error('Check network connection!!');
        } else {
          return response.json();
        }
      })
      .then((data) => {
        // api data which is required
        console.log(data.data.articles);
        setApiData(data.data.articles);
      })
      .catch((err) => {
        return new Error(`ERROR : ${err}`);
      });
  };

  return (
    <div className="App container mx-auto p-5 flex flex-col justify-center">
      {/* input bar starts */}
      <div className="input-bar flex justify-center py-3 gap-x-6 mb-3">
        <select
          id="n-category"
          name="n-category"
          className="border p-2 border-slate-400 w-[30%] text-slate-500 cursor-pointer font-Poppins select-list"
        >
          <option value="all">All</option>
          <option value="top">Top</option>
          <option value="trending">Trending</option>
          <option value="science">Science</option>
          <option value="entertainment">Entertainment</option>
          <option value="sports">Sports</option>
        </select>

        <button
          className="bg-orange-600 py-2 px-4 text-white capitalize font-Poppins"
          onClick={fetchValue}
        >
          get news
        </button>
      </div>
      <hr />
      {/* input bar ends */}

      {/* card-box starts */}
      <div className="card-container flex flex-col gap-10 my-5">
        {myData.map((news, index) => {
          return (
            <Card
              key={index}
              imageUrl={news.imageUrl}
              title={news.title}
              authorName={news.authorName}
              content={news.content}
              shortenedUrl={news.shortenedUrl}
            />
          );
        })}
      </div>
      {/* card-box ends */}
    </div>
  );
}

export default App;
