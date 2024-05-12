import React from 'react';

const Card = (props) => {
  return (
    <div className="card text-white h-[50vh] max-h-[50vh] flex font-Poppins gap-10 border-slate-700 border">
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
      <div className="content py-3 w-[70%] flex justify-between flex-col">
        <upper className="content">
          <h2 className="text-4xl">{props.title}</h2>
          <div className="publisher mt-2">
            <span className="font-semibold">short</span>
            <span className="text-slate-200"> by {props.authorName}</span>
          </div>
          <p className="mt-4 mb-1 text-slate-400">{props.content}</p>
        </upper>
        <div className="lower-content">
          <a
            href={props.shortenedUrl}
            className="text-sky-400"
            target="_blank"
            rel="noreferrer"
          >
            read more...
          </a>
        </div>
      </div>
      {/* content ends */}
    </div>
  );
};

export default Card;
