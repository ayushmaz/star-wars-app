import { MdClose } from "react-icons/md";

const ModalContent = ({ onCloseClicked, peopleDetails }) => {
  console.log(peopleDetails);
  const { name } = peopleDetails;
  return (
    <div className="header">
      <div className="user">
        <div className="avataar">
          <img
            style={{ display: "flex", height: "80%" }}
            src={`https://api.dicebear.com/6.x/open-peeps/svg?seed=${name
              .split(" ")
              .join("_")}`}
            alt="avataar"
          />
        </div>
        <div className="name">{name}</div>
      </div>
      <MdClose onClick={onCloseClicked} className="close" />
    </div>
  );
};

export default ModalContent;
