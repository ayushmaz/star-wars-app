import { useEffect, useState } from "react";
import List from "../components/List";
import Modal from "../components/Modal";
import ModalContent from "../components/ModalContent";
import NavBar from "../components/NavBar";
import PeopleCard from "../components/PeopleCard";
import { API_GET_STAR_WARS_CHARACTER } from "../services/services";

const Homepage = () => {
  const [people, setPeople] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [peopleDetails, setPeopleDetails] = useState({});

  const onPeopleCardClicked = (details) => {
    console.log(details, "Dasds");
    setShowModal(true);
    setPeopleDetails(details);
  };
  const onCloseClicked = () => {
    setShowModal(false);
    setPeopleDetails({});
  };
  useEffect(() => {
    API_GET_STAR_WARS_CHARACTER().then(({ data }) => setPeople(data.results));
  }, []);
  return (
    <div className="homepage">
      {showModal && (
        <Modal>
          <ModalContent
            onCloseClicked={onCloseClicked}
            peopleDetails={peopleDetails}
          />
        </Modal>
      )}
      <NavBar />
      <List
        data={people}
        Card={PeopleCard}
        onPeopleCardClicked={onPeopleCardClicked}
      />
    </div>
  );
};

export default Homepage;
