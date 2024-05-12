import Card from './components/card.jsx';

function App() {
  return (
    <div className="App container flex justify-center items-center mx-auto border py-5 h-screen">
      {/* card-container starts here */}
      <div className="card-container w-full flex justify-evenly">
        <Card
          src="https://wallpaper.dog/large/17293249.jpg"
          name="virat kohli"
        />
        <Card
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO6ahc3yMnCEBYwjbNb3jjI08bnvsbF7v58nZ7xLQ2fa5mRZJvO0KkBjq0QRUcBJTAZZA&usqp=CAU"
          name="MS dhoni"
        />
        <Card
          src="https://i0.wp.com/www.thestatesman.com/wp-content/uploads/2020/01/000_1OD9EN.jpg?resize=678%2C452&ssl=1"
          name="Shreyas Iyer"
        />
      </div>
      {/* card-container ends here */}
    </div>
  );
}

export default App;
