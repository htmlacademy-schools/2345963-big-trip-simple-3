import { getRandId, getRandElement, getRandPic} from '../util.js';
import { descriptiveText, cities } from './const';

const destinations = [];
const destinationId = [];

export const generatePicture = () => ({
  src: getRandPic(),
  description: getRandElement(descriptiveText)
});

export const generateDestination = () => {
  let id = getRandId();
  while (destinationId.indexOf(id) >= 0) {
    id = getRandId();
  }
  destinationId.push(id);
  const descriptionForPic = getRandElement(descriptiveText);
  const name = getRandElement(cities);
  const picture = generatePicture();
  const destination = {
    id, descriptionForPic, name, picture
  };
  destinations.push(destination);
  return id;
};

export const getDestinationById = (id) => destinations.find((item) => item.id === id);
export const getCityById = (id) => destinations.find((destination) => destination.id === id).pictures.src;
