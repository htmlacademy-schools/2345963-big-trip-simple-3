import { getRandElement, getRandId, getRandPrice } from '../util.js';
import { getOffersByType, pullOfDates, pointTypes } from './const.js';
import { generateDestination } from './destination.js';

const pointsId = [];

export const generatePoint = () => {
  let id = getRandId();
  while (pointsId.indexOf(id) >= 0) {
    id = getRandId();
  }
  pointsId.push(id);
  const price = getRandPrice;
  const destination = generateDestination();
  const type = getRandElement(pointTypes);
  const offers = getOffersByType(type);
  const dates = getRandElement(pullOfDates);
  const dateFrom = dates.dateFrom;
  const dateTo = dates.dateTo;
  return {
    price, dateFrom, dateTo, destination, id, offers, type };
};
