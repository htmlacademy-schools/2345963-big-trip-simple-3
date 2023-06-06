import { createElement } from '../render.js';

const createRouteListTemplate = () => (
  `<ul class="trip-events__list">
  </ul>`
);

export default class ListOfPointsView {
  getTemplate() {
    return createRouteListTemplate();
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
