const Home = (props) => {
  console.log(props);
  return (
    <div className="nav">
      <img
        src={props.image}
        alt="Avatar"
        className="image"
      />
    </div>
  );
};
export default Home;
