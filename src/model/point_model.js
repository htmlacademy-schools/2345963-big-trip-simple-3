import { generatePoint } from '../fish/point';

const POINT_COUNT = 3;

export default class PointModel {
  tripPointsArray = Array.from({length: POINT_COUNT}, generatePoint);

  getTripPoints = () => this.tripPointsArray;
}
