import { createElement } from '../render';
import { getOfferName, getOfferPrice } from '../fish/offer';
import { getDateForm, getDateTime, getTimeDate, getYearsFormat } from '../util';
import { getCityById } from '../fish/destination';

function createOffersTemplate(offers) {
  return offers.map((offer) => `
    <li class="event__offer">
      <span class="event__offer-title">${getOfferName(offer)}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${getOfferPrice(offer)}</span>
    </li>
  `).join('');
}

function createNewPointTemplate(point) {
  const {price, dateFrom, dateTo, destination, offers, type} = point;
  const fromDate = getTimeDate(dateFrom);
  const timeFrom = getDateTime(dateFrom);
  const toDate = getTimeDate(dateTo);
  const timeTo = getDateTime(dateTo);
  const fullDate = getYearsFormat(dateFrom);
  const shortDate = getDateForm(dateFrom);

  return (
  `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${fullDate}">${shortDate}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${getCityById(destination)}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${fromDate}">${timeFrom}</time>
          &mdash;
          <time class="event__end-time" datetime="${toDate}">${timeTo}</time>
        </p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${price}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${createOffersTemplate(offers)}
      </ul>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`);
}


export default class NewPointView {
  constructor({tripPoint}){
    this.tripPoint = tripPoint;
  }

  getTemplate() {
    return createNewPointTemplate(this.tripPoint);
  }

  getElement() {
    this.element = createElement(this.getTemplate());
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
