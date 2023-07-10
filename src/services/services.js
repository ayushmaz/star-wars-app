import axios from "axios";

const starWarsBaseURL = "https://swapi.dev/api/";

export const API_GET_STAR_WARS_CHARACTER = async () => {
  return await axios.get(starWarsBaseURL + "/people").catch((error) => error);
};

export const API_GET_STAR_WARS_CHARACTER_HOME = async (planetId) => {
  return await axios
    .get(starWarsBaseURL + `/planets/${planetId}`)
    .catch((error) => error);
};

export const API_GET_RANDOM_AVAATAR = async (name) => {
  const nameHash = name.split(" ").join("_");
  return await axios.get(`avatars.dicebear.com/api/open-peeps/${nameHash}.svg`);
};
