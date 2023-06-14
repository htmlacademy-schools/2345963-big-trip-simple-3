import Observable from '../framework/observable';
import { UpdateType } from '../moks/const';

export default class DestinationsModel extends Observable{

  #tripPointApiService = null;
  #destinations = [];

  constructor(tripPointApiService) {
    super();
    this.#tripPointApiService = tripPointApiService;
  }

  get destinations() {
    return this.#destinations;
  }

  init = async () => {

    try {
      this.#destinations = await this.#tripPointApiService.getDestinations();
    } catch(err) {
      this.#destinations = [];
    }
    this._notify(UpdateType.INIT);

  };

}
