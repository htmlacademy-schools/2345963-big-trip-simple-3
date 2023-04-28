import Presenter from './presenter.js';
import FilterView from './view/filter-view.js';
import { render } from './render';

const filterContainer = document.querySelector('.trip-controls__filters');
const mainContainer = document.querySelector('.trip-events');
const mainPresenter = new Presenter({container: mainContainer});
render(new FilterView(), filterContainer);

mainPresenter.init();
