function Card(props) {
  return (
    <div className="card w-[25%] border border-slate-400 rounded-lg">
      {/* card-image starts here */}
      <div className="image h-[50%] max-h-[50%] w-full">
        <img
          src={props.src}
          alt="cricketer"
          className="rounded-lg rounded-b-none object-cover h-full w-full"
        />
      </div>
      {/* card-image ends here */}

      {/* card-content starts here */}
      <div className="content p-4">
        <h1 className="font-semibold text-2xl">{props.name}</h1>
        <p className="py-3">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button className="bg-indigo-600 py-2 px-3 text-white border-none rounded-md">
          Meet player
        </button>
      </div>
      {/* card-content ends here */}
    </div>
  );
}

export default Card;
