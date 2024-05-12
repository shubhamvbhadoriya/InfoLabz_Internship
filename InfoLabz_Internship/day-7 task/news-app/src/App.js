import React, { useState, useEffect } from 'react';
import Card from './components/card';

function App() {
  const [apiData, setapiData] = useState([]);

  const fetchAPI = () => {
    let url = 'https://inshorts.me/news/all?offset=0&limit=21#';
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          return new Error('Check your internet connection plz!!');
        } else {
          return response.json();
        }
      })
      .then((data) => {
        // all the articles fetched from API and inserted to 'myData' array
        setapiData(data.data.articles);
      })
      .catch((err) => {
        console.log(`ERROR : ${err}`);
      });
  };

  // this renders whole data every time
  useEffect(() => {
    return fetchAPI();
  }, []);

  return (
    <div className="App container mx-auto px-3 py-5 border border-slate-400 w-full ">
      <div className="card-container flex flex-col gap-10">
        {apiData.map((article, index) => {
          return (
            <>
              <Card
                key={index}
                imageUrl={article.imageUrl}
                title={article.title}
                authorName={article.authorName}
                content={article.content}
                sourceUrl={article.sourceUrl}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
