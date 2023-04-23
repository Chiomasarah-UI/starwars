import Card from "./Card";
const Movies = ({ records }) => {
  return (
    <div className="grid">
      {records.map((list, index) => (
        <Card key={list.episode_id} list={list} />
      ))}
    </div>
  );
};

export default Movies;
