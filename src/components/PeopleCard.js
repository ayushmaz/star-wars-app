const PeopleCard = ({ people, onPeopleCardClicked }) => {
  const { name, eye_color } = people || {};
  return (
    <div
      onClick={() => onPeopleCardClicked(people)}
      style={{ backgroundColor: "light" + eye_color }}
      className="card"
    >
      <div className="avataar-circle">
        <img
          src={`https://api.dicebear.com/6.x/open-peeps/svg?seed=${name
            ?.split(" ")
            ?.join("_")}`}
          alt="avataar"
        />
      </div>
      <div className="name">{name}</div>
    </div>
  );
};

export default PeopleCard;
