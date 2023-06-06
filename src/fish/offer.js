import { getOffersByType, pullOfOffers } from './const';
import { getRandElement } from '../util';

export const getOffersIdByType = (type) => {
  const offersType = getRandElement(pullOfOffers.find(getOffersByType(type)));
  return offersType.map((offer) => offer.id);
};

export const getOfferById = (offerId) => getOfferById.find(offerId);

export const getOfferName = (offerId) => pullOfOffers.find((offer) => offer.id === offerId).title;

export const getOfferPrice = (offerId) => pullOfOffers.find((offer) => offer.id === offerId).price;
