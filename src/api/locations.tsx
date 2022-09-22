import axios from "axios";

const LOCATION_URL =
  "https://nventory-postgres-database.herokuapp.com/locations";

const getAllLocations = () => axios.get(LOCATION_URL);

const createLocation = async (body: any) => {
  try {
    const newLocation = await axios.post(LOCATION_URL, body);
    console.log(newLocation);
  } catch (err) {
    console.log(err);
  }
};

const getOneLocation = (id: any) => axios.get(`${LOCATION_URL}/${id}`);
const updateLocation = (id: any, body: any) => axios.put(`${LOCATION_URL}/${id}`, body);
const deleteLocation = (id: any) => axios.delete(`${LOCATION_URL}/${id}`);

export const locationsCall = {
  getAllLocations,
  createLocation,
  getOneLocation,
  updateLocation,
  deleteLocation,
};
