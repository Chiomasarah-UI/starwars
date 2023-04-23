const Card = ({ list }) => {
  return (
    <div className="inner">
      <h3>{list.title}</h3>
      <p className="date">
        {new Date(list.release_date).toLocaleString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
      <p className="text">{list.opening_crawl.substring(263)}</p>
      <hr />
      <a href="#">More Info</a>
    </div>
  );
};

export default Card;
