const Card = (props) => {
  return (
    <div className="card border flex h-[50vh]">
      {/* image starts */}
      <div className="image w-[30%] h-[100%]">
        <img
          src={props.imageUrl}
          alt="news-pic"
          className="w-[100%] h-[100%] object-cover overflow-hidden"
        />
      </div>
      {/* image ends */}

      {/* content starts */}
      <div className="content w-[70%] p-4 flex flex-col items-start">
        <div className="upper-content">
          <h2 className="text-3xl mb-2">{props.title}</h2>
          <span className="text-slate-500">
            <span className="font-bold text-black">short</span> by{' '}
            {props.authorName}
          </span>
        </div>
        <div className="lower-content flex flex-col items-start justify-between gap-2">
          <p className="mt-5">{props.content}</p>
          <a href={props.sourceUrl} className="font-semibold text-sky-500">
            read more at twitter
          </a>
        </div>
      </div>
      {/* content ends */}
    </div>
  );
};

export default Card;
