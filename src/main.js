import Presenter from './presenter.js';
import FilterView from './view/filter-view.js';
import { render } from './render';
import PointsModel from './model/point_model.js';

const filterContainer = document.querySelector('.trip-controls__filters');
const container = document.querySelector('.trip-events');
render(new FilterView(), filterContainer);

/* const mainPage = document.querySelector('.page-body__page-main');*/
const modelOfPoint = new PointsModel();
const boardPresenter = new Presenter({container: container}, modelOfPoint);

boardPresenter.init(modelOfPoint);
