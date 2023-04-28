import SortView from './view/sort-view.js';
import EditPointView from './view/form-edit-view.js';
import NewPointView from './view/point-view.js';
import ListOfPointsView from './view/route-list-view.js';
import CreatePointView from './view/form-create-view.js';
import { render } from './render.js';

export default class Presenter {
  listOfPoints = new ListOfPointsView();

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(new SortView(), this.container);
    render(this.listOfPoints, this.container);
    render(new EditPointView(), this.listOfPoints.getElement());
    render(new CreatePointView(), this.listOfPoints.getElement());

    for (let i = 0; i < 3; i++) {
      render(new NewPointView(), this.listOfPoints.getElement());
    }
  }
}
